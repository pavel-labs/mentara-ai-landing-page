import { describe, expect, it } from 'vitest';
import { parseWebAnalyticsConfig } from './web-analytics-config';

describe('parseWebAnalyticsConfig', () => {
  it('accepts a valid Cloudflare token', () => {
    expect(
      parseWebAnalyticsConfig({
        provider: 'cloudflare',
        siteId: 'a'.repeat(32),
      }),
    ).toEqual({ provider: 'cloudflare', siteId: 'a'.repeat(32) });
  });

  it('accepts a valid Umami website ID', () => {
    const siteId = '94db1cb1-74f4-4a40-ad6c-962362670409';
    expect(parseWebAnalyticsConfig({ provider: 'umami', siteId })).toEqual({
      provider: 'umami',
      siteId,
    });
  });

  it.each([
    null,
    undefined,
    'config',
    {},
    { provider: 'none' },
    { provider: 'custom', siteId: 'a'.repeat(32) },
    { provider: 'cloudflare', siteId: '<script>' },
    { provider: 'cloudflare', siteId: 'a'.repeat(31) },
    { provider: 'umami', siteId: 'not-a-uuid' },
    { provider: 'umami', siteId: '00000000-0000-0000-0000-000000000000' },
  ])('rejects invalid provider configuration %#', (value) => {
    expect(parseWebAnalyticsConfig(value)).toBeNull();
  });
});
