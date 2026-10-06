import { describe, expect, it, vi } from 'vitest';
import { fetchMarketing, getMarketingApiUrl } from './fetch-marketing.mjs';
describe('static publication boundary', () => {
  it('supports an unconfigured local clone without network access', async () => {
    const request = vi.fn();
    expect((await fetchMarketing('', request)).articles).toEqual([]);
    expect(request).not.toHaveBeenCalled();
  });
  it('fails an update on unavailable or invalid content so the previous deployment remains', async () => {
    const request = vi
      .fn()
      .mockResolvedValueOnce(new Response('unavailable', { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ draft: 'secret' })));
    await expect(fetchMarketing('https://api.example.com', request)).rejects.toThrow();
    await expect(fetchMarketing('https://api.example.com', request)).rejects.toThrow();
  });
  it('rejects insecure API origins', async () => {
    await expect(fetchMarketing('http://api.example.com')).rejects.toThrow();
  });
  it('does not fetch CMS content just because the existing enquiry API is configured', async () => {
    const request = vi.fn().mockResolvedValue(new Response('Not found', { status: 404 }));
    const snapshot = await fetchMarketing(
      getMarketingApiUrl({ PUBLIC_API_URL: 'https://api.example.com' }),
      request,
    );
    expect(snapshot).toEqual({ schemaVersion: 1, landing: [], articles: [], pricing: null });
    expect(request).not.toHaveBeenCalled();
  });
  it('requires an API URL when managed content is enabled', () => {
    expect(() => getMarketingApiUrl({ MARKETING_CONTENT_ENABLED: 'true' })).toThrow(
      'PUBLIC_API_URL is required',
    );
    expect(() => getMarketingApiUrl({ MARKETING_CONTENT_ENABLED: 'invalid' })).toThrow(
      'MARKETING_CONTENT_ENABLED must be true or false',
    );
  });
  it('rejects automated publication when managed content is disabled', () => {
    expect(() =>
      getMarketingApiUrl({
        PUBLIC_API_URL: 'https://api.example.com',
        GITHUB_EVENT_NAME: 'repository_dispatch',
      }),
    ).toThrow('Enable MARKETING_CONTENT_ENABLED');
  });
  it('fetches a validated published snapshot after explicit activation', async () => {
    const limits = {
      'interview.text': 5,
      'interview.voice': 3,
      'assessment.attempt': 3,
      'consultation.ai_coach': 1,
    };
    const snapshot = {
      schemaVersion: 1,
      landing: [],
      articles: [],
      pricing: {
        limits: { FREE: limits, PRO: limits, ENTERPRISE: limits },
        fairUse: [],
        comparison: [],
        fairUseFootnote: 'Monthly limits apply.',
        packs: [],
        displayPrices: {
          currency: 'USD',
          proMonthly: '$9.99',
          proAnnual: '$79.99',
          interviewPack: '$4.99',
        },
      },
    };
    const request = vi.fn().mockResolvedValue(new Response(JSON.stringify(snapshot)));
    const baseUrl = getMarketingApiUrl({
      MARKETING_CONTENT_ENABLED: 'true',
      PUBLIC_API_URL: 'https://api.example.com/',
      GITHUB_EVENT_NAME: 'repository_dispatch',
    });
    expect(await fetchMarketing(baseUrl, request)).toEqual(snapshot);
    expect(request.mock.calls[0][0].href).toBe('https://api.example.com/marketing/export');
  });
  it('keeps activated publication strict when the marketing endpoint returns 404', async () => {
    const request = vi.fn().mockResolvedValue(new Response('Not found', { status: 404 }));
    const baseUrl = getMarketingApiUrl({
      MARKETING_CONTENT_ENABLED: 'true',
      PUBLIC_API_URL: 'https://api.example.com',
    });
    await expect(fetchMarketing(baseUrl, request)).rejects.toThrow(
      'Marketing content refresh failed (404)',
    );
  });
});
