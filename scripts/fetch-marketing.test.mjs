import { describe, expect, it, vi } from 'vitest';
import { fetchMarketing } from './fetch-marketing.mjs';
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
});
