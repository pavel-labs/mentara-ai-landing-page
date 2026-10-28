import { afterEach, describe, expect, it, vi } from 'vitest';

afterEach(() => {
  vi.unstubAllGlobals();
  vi.resetModules();
});

describe('analytics consent preference', () => {
  it('fails closed when no preference has been recorded', async () => {
    vi.stubGlobal('window', {
      localStorage: { getItem: () => null, setItem: vi.fn() },
    });
    const consent = await import('./consent');
    expect(consent.getAnalyticsConsent()).toBeNull();
    expect(consent.hasAnalyticsConsent()).toBe(false);
  });

  it('defaults to no consent and persists an explicit choice', async () => {
    const values = new Map<string, string>();
    vi.stubGlobal('window', {
      localStorage: {
        getItem: (key: string) => values.get(key) ?? null,
        setItem: (key: string, value: string) => values.set(key, value),
      },
    });
    const consent = await import('./consent');

    expect(consent.hasAnalyticsConsent()).toBe(false);
    consent.setAnalyticsConsent('granted');
    expect(consent.hasAnalyticsConsent()).toBe(true);
    expect(values.get(consent.ANALYTICS_CONSENT_KEY)).toBe('granted');

    consent.setAnalyticsConsent('denied');
    expect(consent.hasAnalyticsConsent()).toBe(false);
  });

  it('keeps an explicit in-memory choice when storage is unavailable', async () => {
    vi.stubGlobal('window', {
      get localStorage() {
        throw new Error('Storage disabled');
      },
    });
    const consent = await import('./consent');

    consent.setAnalyticsConsent('granted');
    expect(consent.hasAnalyticsConsent()).toBe(true);
    consent.setAnalyticsConsent('denied');
    expect(consent.hasAnalyticsConsent()).toBe(false);
  });

  it('ignores malformed stored values', async () => {
    vi.stubGlobal('window', {
      localStorage: { getItem: () => 'yes', setItem: vi.fn() },
    });
    const consent = await import('./consent');

    expect(consent.getAnalyticsConsent()).toBeNull();
    expect(consent.hasAnalyticsConsent()).toBe(false);
  });

  it('uses the in-memory choice if reading storage later throws', async () => {
    let storageFails = false;
    vi.stubGlobal('window', {
      get localStorage() {
        if (storageFails) throw new Error('Storage disabled');
        return {
          getItem: () => null,
          setItem: vi.fn(),
        };
      },
    });
    const consent = await import('./consent');
    consent.setAnalyticsConsent('granted');
    storageFails = true;

    expect(consent.getAnalyticsConsent()).toBe('granted');
  });

  it('retains the in-memory choice if persisting it throws', async () => {
    vi.stubGlobal('window', {
      localStorage: {
        getItem: () => null,
        setItem: () => {
          throw new Error('Storage disabled');
        },
      },
    });
    const consent = await import('./consent');

    consent.setAnalyticsConsent('granted');

    expect(consent.hasAnalyticsConsent()).toBe(true);
  });
});
