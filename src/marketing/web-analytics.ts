import { API } from '../consts';
import { respectsPrivacy } from './privacy';
import { fetchWithTimeout } from './request';

/** Provider URLs are compiled allowlists, never admin-supplied JavaScript or URLs. */
export const loadWebAnalytics = async (): Promise<void> => {
  if (!API.baseUrl || respectsPrivacy()) return;
  try {
    const response = await fetchWithTimeout(
      `${API.baseUrl}/marketing/web-analytics`,
      { credentials: 'omit', cache: 'no-store' },
    );
    if (!response.ok || respectsPrivacy()) return;
    const config: unknown = await response.json();
    if (
      typeof config !== 'object' ||
      config === null ||
      !('provider' in config) ||
      !('siteId' in config) ||
      typeof config.siteId !== 'string'
    )
      return;
    if (document.getElementById('marketing-provider')) return;
    const script = document.createElement('script');
    script.id = 'marketing-provider';
    script.async = true;
    script.referrerPolicy = 'no-referrer';
    if (
      config.provider === 'cloudflare' &&
      /^[a-f0-9]{32}$/i.test(config.siteId)
    ) {
      script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      script.dataset.cfBeacon = JSON.stringify({
        token: config.siteId,
        spa: false,
      });
    } else if (
      config.provider === 'umami' &&
      /^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(
        config.siteId,
      )
    ) {
      script.src = 'https://cloud.umami.is/script.js';
      script.dataset.websiteId = config.siteId;
      script.dataset.doNotTrack = 'true';
      script.dataset.excludeSearch = 'true';
      script.dataset.excludeHash = 'true';
    } else return;
    if (!respectsPrivacy()) document.head.append(script);
  } catch {
    // A failed config request leaves third-party analytics off.
  }
};
void loadWebAnalytics();
