import { ANALYTICS_CONSENT_KEY, type AnalyticsConsent } from './consent';

export interface AnalyticsConsentControllerOptions {
  getConsent: () => AnalyticsConsent | null;
  setConsent: (choice: AnalyticsConsent) => void;
  respectsPrivacy: () => boolean;
  loadAnalytics: () => Promise<void>;
  reload: () => void;
  onLoadError?: (error: unknown) => void;
}

export const createAnalyticsConsentController = ({
  getConsent,
  setConsent,
  respectsPrivacy,
  loadAnalytics,
  reload,
  onLoadError,
}: AnalyticsConsentControllerOptions) => {
  let analyticsStarted = false;
  let analyticsLoad: Promise<void> | null = null;

  const startAnalytics = (): Promise<void> => {
    if (analyticsLoad) return analyticsLoad;
    if (analyticsStarted || getConsent() !== 'granted' || respectsPrivacy())
      return Promise.resolve();

    analyticsStarted = true;
    analyticsLoad = loadAnalytics().catch((error: unknown) => {
      analyticsStarted = false;
      analyticsLoad = null;
      onLoadError?.(error);
    });
    return analyticsLoad;
  };

  const grant = (): Promise<void> => {
    setConsent('granted');
    return startAnalytics();
  };

  const reject = (): void => {
    const previous = getConsent();
    setConsent('denied');
    if (previous === 'granted') reload();
  };

  const handleStorageChange = (
    key: string | null,
    newValue: string | null,
  ): void => {
    if (
      analyticsStarted &&
      (key === null || key === ANALYTICS_CONSENT_KEY) &&
      newValue !== 'granted'
    )
      reload();
  };

  const initialize = (): AnalyticsConsent | null => {
    const choice = getConsent();
    if (choice === 'granted') void startAnalytics();
    return choice;
  };

  return { initialize, grant, reject, handleStorageChange };
};
