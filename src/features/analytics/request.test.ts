import { afterEach, describe, expect, it, vi } from 'vitest';
import { fetchWithTimeout } from './request';

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('fetchWithTimeout', () => {
  it('aborts a timed-out request when AbortController is available', async () => {
    vi.useFakeTimers();
    const request = vi.fn(
      (_input: RequestInfo | URL, _init?: RequestInit) =>
        new Promise<Response>(() => {}),
    );
    vi.stubGlobal('fetch', request);
    const pending = fetchWithTimeout('/config', {}, 100);
    const result = expect(pending).rejects.toThrow('Request timed out');

    await vi.advanceTimersByTimeAsync(100);

    await result;
    expect(request.mock.calls[0]?.[1]?.signal?.aborted).toBe(true);
  });

  it('settles on timeout when AbortController is unavailable', async () => {
    vi.useFakeTimers();
    vi.stubGlobal('AbortController', undefined);
    vi.stubGlobal('fetch', () => new Promise<Response>(() => {}));
    const pending = fetchWithTimeout('/config', {}, 100);
    const result = expect(pending).rejects.toThrow('Request timed out');

    await vi.advanceTimersByTimeAsync(100);

    await result;
  });
});
