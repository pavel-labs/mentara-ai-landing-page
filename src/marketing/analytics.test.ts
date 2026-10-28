import { afterEach, describe, expect, it, vi } from 'vitest';

const settle = async () => {
  for (let i = 0; i < 12; i++) await Promise.resolve();
};
const boot = async (
  enabled: boolean,
  privacy: Record<string, unknown> = {},
  pathname = '/',
  available = true,
) => {
  vi.resetModules();
  vi.stubEnv('PUBLIC_API_URL', 'https://api.example.test');
  vi.stubGlobal('navigator', privacy);
  vi.stubGlobal('window', { location: { pathname } });
  const click = vi.fn();
  vi.stubGlobal('document', {
    documentElement: { lang: 'ru' },
    addEventListener: click,
  });
  const request = vi.fn().mockResolvedValue({ ok: available, json: async () => ({ enabled }) });
  vi.stubGlobal('fetch', request);
  await import('./analytics');
  await settle();
  return { request, click };
};
afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetAllMocks();
});

describe('landing funnel privacy and availability', () => {
  it('checks the switch and sends an anonymous localized landing view', async () => {
    const { request } = await boot(true);
    expect(request).toHaveBeenCalledTimes(2);
    expect(request.mock.calls[0]?.[0]).toBe('https://api.example.test/marketing/tracking');
    expect(request.mock.calls[0]?.[1]).toMatchObject({
      credentials: 'omit',
      cache: 'no-store',
    });
    expect(request.mock.calls[1]?.[1]).toMatchObject({
      credentials: 'omit',
      keepalive: true,
      body: JSON.stringify({ event: 'landing_view', locale: 'ru' }),
    });
  });
  it('does not post when collection is disabled', async () => {
    const { request } = await boot(false);
    expect(request).toHaveBeenCalledOnce();
  });
  it('sends events without keepalive on browsers that do not support it', async () => {
    vi.stubGlobal('Request', undefined);
    const { request } = await boot(true);
    expect(request.mock.calls[1]?.[1]).not.toHaveProperty('keepalive');
  });
  it.each([{ doNotTrack: '1' }, { globalPrivacyControl: true }])(
    'does not request tracking with privacy preference %j',
    async (privacy) => {
      const { request } = await boot(true, privacy);
      expect(request).not.toHaveBeenCalled();
    },
  );
  it('does not post when the configuration endpoint fails', async () => {
    const { request } = await boot(true, {}, '/', false);
    expect(request).toHaveBeenCalledOnce();
  });
  it('does not label article visits as landing views', async () => {
    const { request } = await boot(true, {}, '/blog/qa-interview-practice-plan');
    expect(request).toHaveBeenCalledOnce();
  });
  it('keeps CTA tracking behind the same switch without intercepting navigation', async () => {
    const { request, click } = await boot(true, {}, '/blog/example');
    class Link {
      dataset = { marketingEvent: 'web_app_cta' };
      closest() {
        return this;
      }
    }
    vi.stubGlobal('Element', Link);
    const handler: (event: { target: Link }) => void = click.mock.calls[0]?.[1];
    handler({ target: new Link() });
    await settle();
    expect(request.mock.calls[1]?.[1]).toMatchObject({
      body: JSON.stringify({ event: 'web_app_cta', locale: 'ru' }),
    });
  });
});
