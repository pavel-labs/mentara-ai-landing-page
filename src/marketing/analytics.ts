import { API } from '../consts';
import { MARKETING_EVENTS, type MarketingEvent } from './types.generated';

const respectsPrivacy = () =>
  navigator.doNotTrack === '1' ||
  ('globalPrivacyControl' in navigator && navigator.globalPrivacyControl === true);

const enabled = async (): Promise<boolean> => {
  if (!API.baseUrl || respectsPrivacy()) return false;
  try {
    const response = await fetch(`${API.baseUrl}/marketing/tracking`, {
      credentials: 'omit',
      signal: AbortSignal.timeout(3000),
    });
    if (!response.ok) return false;
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
  if (!(await trackingEnabled) || respectsPrivacy()) return;
  try {
    await fetch(`${API.baseUrl}/marketing/events`, {
      method: 'POST',
      credentials: 'omit',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ event, locale: document.documentElement.lang }),
      signal: AbortSignal.timeout(3000),
    });
  } catch {
    // Counters must never delay navigation or retry a user action.
  }
};

if (/^\/(en|de|es|ru|pl)?\/?$/.test(window.location.pathname)) void record('landing_view');
document.addEventListener('click', (event) => {
  const element =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>('a[data-marketing-event]')
      : null;
  const name = element?.dataset.marketingEvent;
  const supported = MARKETING_EVENTS.find((value) => value === name);
  if (supported) void record(supported);
});
