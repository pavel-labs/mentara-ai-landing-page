import { describe, expect, it, vi } from 'vitest';
import { createAnalyticsConsentController } from './consent-controller';
import type { AnalyticsConsent } from './consent';

const setup = (
  initial: AnalyticsConsent | null = null,
  privateSignal = false,
) => {
  let consent = initial;
  const loadAnalytics = vi.fn(async () => {});
  const reload = vi.fn();
  const setConsent = vi.fn((choice: AnalyticsConsent) => {
    consent = choice;
  });
  const controller = createAnalyticsConsentController({
    getConsent: () => consent,
    setConsent,
    respectsPrivacy: () => privateSignal,
    loadAnalytics,
    reload,
  });
  return { controller, loadAnalytics, reload, setConsent };
};

describe('analytics consent controller', () => {
  it('shows no prior choice without loading analytics', () => {
    const { controller, loadAnalytics } = setup();

    expect(controller.initialize()).toBeNull();
    expect(loadAnalytics).not.toHaveBeenCalled();
  });

  it('loads analytics once when consent is already granted', async () => {
    const { controller, loadAnalytics } = setup('granted');

    expect(controller.initialize()).toBe('granted');
    controller.initialize();
    await controller.grant();

    expect(loadAnalytics).toHaveBeenCalledOnce();
  });

  it('deduplicates concurrent loading attempts', async () => {
    let resolveLoad!: () => void;
    const loadPromise = new Promise<void>((resolve) => {
      resolveLoad = resolve;
    });
    const { controller, loadAnalytics } = setup();
    loadAnalytics.mockImplementation(() => loadPromise);

    const first = controller.grant();
    const second = controller.grant();

    expect(loadAnalytics).toHaveBeenCalledOnce();
    resolveLoad();
    await Promise.all([first, second]);
  });

  it('does not load analytics for a stored denial', () => {
    const { controller, loadAnalytics } = setup('denied');

    expect(controller.initialize()).toBe('denied');
    expect(loadAnalytics).not.toHaveBeenCalled();
  });

  it('persists consent before starting analytics', async () => {
    let consent: AnalyticsConsent | null = null;
    const loadAnalytics = vi.fn(async () => {});
    const setConsent = vi.fn((choice: AnalyticsConsent) => {
      consent = choice;
      expect(loadAnalytics).not.toHaveBeenCalled();
    });
    const controller = createAnalyticsConsentController({
      getConsent: () => consent,
      setConsent,
      respectsPrivacy: () => false,
      loadAnalytics,
      reload: vi.fn(),
    });

    await controller.grant();

    expect(setConsent).toHaveBeenCalledWith('granted');
    expect(loadAnalytics).toHaveBeenCalledOnce();
  });

  it('never loads analytics when a privacy signal is active', async () => {
    const { controller, loadAnalytics } = setup(null, true);

    await controller.grant();

    expect(loadAnalytics).not.toHaveBeenCalled();
  });

  it('does not reload when analytics was not previously granted', () => {
    const { controller, reload, setConsent } = setup('denied');

    controller.reject();

    expect(setConsent).toHaveBeenCalledWith('denied');
    expect(reload).not.toHaveBeenCalled();
  });

  it('reloads after withdrawing previously granted consent', () => {
    const { controller, reload } = setup('granted');

    controller.reject();

    expect(reload).toHaveBeenCalledOnce();
  });

  it.each([
    ['mentarika.analytics-consent.v1', 'denied'],
    ['mentarika.analytics-consent.v1', null],
    [null, null],
  ] as const)(
    'reloads if another tab withdraws consent (%s, %s)',
    async (key, value) => {
      const { controller, reload } = setup('granted');
      controller.initialize();
      await Promise.resolve();

      controller.handleStorageChange(key, value);

      expect(reload).toHaveBeenCalledOnce();
    },
  );

  it('ignores unrelated storage changes and grants in another tab', async () => {
    const { controller, reload } = setup('granted');
    controller.initialize();
    await Promise.resolve();

    controller.handleStorageChange('unrelated', null);
    controller.handleStorageChange('mentarika.analytics-consent.v1', 'granted');

    expect(reload).not.toHaveBeenCalled();
  });

  it('allows retrying analytics loading after a load error', async () => {
    const onLoadError = vi.fn();
    const loadAnalytics = vi
      .fn<() => Promise<void>>()
      .mockRejectedValueOnce(new Error('import failed'))
      .mockResolvedValueOnce();
    const controller = createAnalyticsConsentController({
      getConsent: () => 'granted',
      setConsent: vi.fn(),
      respectsPrivacy: () => false,
      loadAnalytics,
      reload: vi.fn(),
      onLoadError,
    });

    controller.initialize();
    await Promise.resolve();
    await Promise.resolve();
    await controller.grant();

    expect(loadAnalytics).toHaveBeenCalledTimes(2);
    expect(onLoadError).toHaveBeenCalledOnce();
  });
});
