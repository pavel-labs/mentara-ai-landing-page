export const ANALYTICS_CONSENT_KEY = 'mentarika.analytics-consent.v1';

export type AnalyticsConsent = 'granted' | 'denied';

let sessionChoice: AnalyticsConsent | null = null;
let storageUnavailable = false;

export const getAnalyticsConsent = (): AnalyticsConsent | null => {
  try {
    const stored = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    if (stored === 'granted' || stored === 'denied') {
      sessionChoice = stored;
      return stored;
    }
    if (!storageUnavailable) sessionChoice = null;
  } catch {
    storageUnavailable = true;
  }
  return sessionChoice;
};

export const hasAnalyticsConsent = (): boolean =>
  getAnalyticsConsent() === 'granted';

export const setAnalyticsConsent = (choice: AnalyticsConsent): void => {
  sessionChoice = choice;
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, choice);
    storageUnavailable = false;
  } catch {
    storageUnavailable = true;
  }
};
