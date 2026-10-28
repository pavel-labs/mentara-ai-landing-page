import { afterEach, describe, expect, it, vi } from 'vitest';

const settle = async () => {
  for (let i = 0; i < 12; i++) await Promise.resolve();
};

const boot = async (
  config: unknown,
  privacy: Record<string, unknown> = {},
  ok = true,
  consent: string | null = 'granted',
  responsePromise?: Promise<{ ok: boolean; json: () => Promise<unknown> }>,
) => {
  vi.resetModules();
  vi.stubEnv('PUBLIC_API_URL', 'https://api.example.test');
  vi.stubGlobal('navigator', privacy);
  const consentState = { value: consent };
  vi.stubGlobal('window', {
    localStorage: {
      getItem: () => consentState.value,
      setItem: vi.fn(),
    },
  });

  const append = vi.fn();
  const script = {
    id: '',
    async: false,
    referrerPolicy: '',
    src: '',
    dataset: {},
  };
  vi.stubGlobal('document', {
    getElementById: () => null,
    createElement: () => script,
    head: { append },
  });

  const response =
    responsePromise ?? Promise.resolve({ ok, json: async () => config });
  const request = vi.fn(() => response);
  vi.stubGlobal('fetch', request);
  await import('./web-analytics');
  await settle();
  return {
    append,
    request,
    script,
    setConsent: (value: string | null) => {
      consentState.value = value;
    },
  };
};

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetAllMocks();
});

describe('runtime analytics script allowlist', () => {
  it('loads the configured Cloudflare token', async () => {
    const { append, script } = await boot({
      provider: 'cloudflare',
      siteId: 'a'.repeat(32),
    });

    expect(append).toHaveBeenCalledOnce();
    expect(script.src).toBe(
      'https://static.cloudflareinsights.com/beacon.min.js',
    );
    expect(script.referrerPolicy).toBe('strict-origin-when-cross-origin');
    expect(script.dataset).toEqual({
      cfBeacon: JSON.stringify({ token: 'a'.repeat(32), spa: false }),
    });
  });

  it('loads Umami with privacy options', async () => {
    const siteId = '94db1cb1-74f4-4a40-ad6c-962362670409';
    const { append, script } = await boot({ provider: 'umami', siteId });

    expect(append).toHaveBeenCalledOnce();
    expect(script.src).toBe('https://cloud.umami.is/script.js');
    expect(script.async).toBe(true);
    expect(script.referrerPolicy).toBe('no-referrer');
    expect(script.dataset).toMatchObject({
      websiteId: siteId,
      excludeSearch: 'true',
      excludeHash: 'true',
      doNotTrack: 'true',
    });
  });

  it.each([
    { provider: 'none' },
    null,
    { provider: 'custom', siteId: 'x' },
    { provider: 'cloudflare', siteId: '<script>' },
    { provider: 'umami', siteId: 'bad' },
  ])('does not inject invalid configuration %j', async (config) => {
    expect((await boot(config)).append).not.toHaveBeenCalled();
  });

  it.each([{ doNotTrack: '1' }, { globalPrivacyControl: true }])(
    'does not fetch configuration with privacy preference %j',
    async (privacy) => {
      const { request, append } = await boot(
        { provider: 'cloudflare', siteId: 'a'.repeat(32) },
        privacy,
      );

      expect(request).not.toHaveBeenCalled();
      expect(append).not.toHaveBeenCalled();
    },
  );

  it('does not fetch provider configuration before consent', async () => {
    const { request, append } = await boot(
      { provider: 'umami', siteId: '94db1cb1-74f4-4a40-ad6c-962362670409' },
      {},
      true,
      null,
    );

    expect(request).not.toHaveBeenCalled();
    expect(append).not.toHaveBeenCalled();
  });

  it('does not inject a script if consent is withdrawn during the config request', async () => {
    let resolveResponse!: (value: {
      ok: boolean;
      json: () => Promise<unknown>;
    }) => void;
    const responsePromise = new Promise<{
      ok: boolean;
      json: () => Promise<unknown>;
    }>((resolve) => {
      resolveResponse = resolve;
    });
    const { append, setConsent } = await boot(
      { provider: 'umami', siteId: '94db1cb1-74f4-4a40-ad6c-962362670409' },
      {},
      true,
      'granted',
      responsePromise,
    );

    setConsent('denied');
    resolveResponse({
      ok: true,
      json: async () => ({
        provider: 'umami',
        siteId: '94db1cb1-74f4-4a40-ad6c-962362670409',
      }),
    });
    await settle();

    expect(append).not.toHaveBeenCalled();
  });

  it('fails closed when the API rejects the request', async () => {
    const { append } = await boot(
      { provider: 'cloudflare', siteId: 'a'.repeat(32) },
      {},
      false,
    );

    expect(append).not.toHaveBeenCalled();
  });
});
