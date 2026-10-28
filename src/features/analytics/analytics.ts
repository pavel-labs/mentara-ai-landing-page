import { API } from '../../consts';
import { MARKETING_EVENTS, type MarketingEvent } from '../../marketing/types.generated';
import { respectsPrivacy } from './privacy';
import { fetchWithTimeout } from './request';
import { hasAnalyticsConsent } from './consent';

const enabled = async (): Promise<boolean> => {
  if (!API.baseUrl || !hasAnalyticsConsent() || respectsPrivacy()) return false;
  try {
    const response = await fetchWithTimeout(
      `${API.baseUrl}/marketing/tracking`,
      { credentials: 'omit', cache: 'no-store' },
    );
    if (!response.ok || !hasAnalyticsConsent() || respectsPrivacy())
      return false;
    const config: unknown = await response.json();
    return (
      typeof config === 'object' &&
      config !== null &&
      'enabled' in config &&
      config.enabled === true
    );
  } catch {
    return false;
  }
};
const trackingEnabled = enabled();
const record = async (event: MarketingEvent): Promise<void> => {
  if (!(await trackingEnabled) || !hasAnalyticsConsent() || respectsPrivacy())
    return;
  try {
    const request: RequestInit = {
      method: 'POST',
      credentials: 'omit',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, locale: document.documentElement.lang }),
    };
    if (typeof Request !== 'undefined' && 'keepalive' in Request.prototype)
      request.keepalive = true;
    await fetchWithTimeout(`${API.baseUrl}/marketing/events`, request);
  } catch {
    // Best-effort analytics must never delay navigation or retry a user action.
  }
};

if (/^\/(en|de|es|ru|pl)?\/?$/.test(window.location.pathname))
  void record('landing_view');
document.addEventListener('click', (event) => {
  const element =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>('a[data-marketing-event]')
      : null;
  const name = element?.dataset.marketingEvent;
  const supported = MARKETING_EVENTS.find((value) => value === name);
  if (supported) void record(supported);
});
