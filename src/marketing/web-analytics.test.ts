import { afterEach, describe, expect, it, vi } from 'vitest';
const boot = async (config: unknown, privacy = {}, ok = true) => {
  vi.resetModules();
  vi.stubEnv('PUBLIC_API_URL', 'https://api.example.test');
  vi.stubGlobal('navigator', privacy);
  const append = vi.fn();
  const script = { id: '', async: false, referrerPolicy: '', src: '', dataset: {} };
  vi.stubGlobal('document', { getElementById: () => null, createElement: () => script, head: { append } });
  const request = vi.fn().mockResolvedValue({ ok, json: async () => config });
  vi.stubGlobal('fetch', request);
  await import('./web-analytics');
  for (let i = 0; i < 12; i++) await Promise.resolve();
  return { append, script, request };
};
afterEach(() => { vi.unstubAllGlobals(); vi.unstubAllEnvs(); });
describe('runtime analytics script allowlist', () => {
  it('loads the configured Cloudflare token', async () => {
    const { append, script } = await boot({ provider: 'cloudflare', siteId: 'a'.repeat(32) });
    expect(append).toHaveBeenCalledOnce();
    expect(script.src).toBe('https://static.cloudflareinsights.com/beacon.min.js');
    expect(script.referrerPolicy).toBe('no-referrer');
    expect(script.dataset).toEqual({ cfBeacon: JSON.stringify({ token: 'a'.repeat(32), spa: false }) });
  });
  it('loads Umami with URL privacy options', async () => {
    const { script, append } = await boot({ provider: 'umami', siteId: '94db1cb1-74f4-4a40-ad6c-962362670409' });
    expect(append).toHaveBeenCalledOnce();
    expect(script.src).toBe('https://cloud.umami.is/script.js');
    expect(script.async).toBe(true);
    expect(script.referrerPolicy).toBe('no-referrer');
    expect(script.dataset).toMatchObject({
      websiteId: '94db1cb1-74f4-4a40-ad6c-962362670409',
      excludeSearch: 'true',
      excludeHash: 'true',
      doNotTrack: 'true',
    });
  });
  it.each([{ provider: 'none' }, null, { provider: 'custom', siteId: 'x' }, { provider: 'cloudflare', siteId: '<script>' }, { provider: 'umami', siteId: 'bad' }])('rejects off or invalid config %j', async (config) => {
    expect((await boot(config)).append).not.toHaveBeenCalled();
  });
  it.each([{ doNotTrack: '1' }, { globalPrivacyControl: true }])('does not request config for privacy preference %j', async (privacy) => {
    const { request, append } = await boot({ provider: 'cloudflare', siteId: 'a'.repeat(32) }, privacy);
    expect(request).not.toHaveBeenCalled(); expect(append).not.toHaveBeenCalled();
  });
  it('fails closed when the API rejects the request', async () => {
    expect((await boot({ provider: 'cloudflare', siteId: 'a'.repeat(32) }, {}, false)).append).not.toHaveBeenCalled();
  });
});
