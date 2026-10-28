import { API } from '../../consts';
import { respectsPrivacy } from './privacy';
import { fetchWithTimeout } from './request';
import { hasAnalyticsConsent } from './consent';
import { parseWebAnalyticsConfig } from './web-analytics-config';

/** Provider URLs are compiled allowlists, never admin-supplied JavaScript or URLs. */
export const loadWebAnalytics = async (): Promise<void> => {
  if (!API.baseUrl || !hasAnalyticsConsent() || respectsPrivacy()) return;
  try {
    const response = await fetchWithTimeout(
      `${API.baseUrl}/marketing/web-analytics`,
      { credentials: 'omit', cache: 'no-store' },
    );
    if (!response.ok || !hasAnalyticsConsent() || respectsPrivacy()) return;
    const config = parseWebAnalyticsConfig(await response.json());
    if (!config) return;
    if (document.getElementById('marketing-provider')) return;
    const script = document.createElement('script');
    script.id = 'marketing-provider';
    script.async = true;
    if (config.provider === 'cloudflare') {
      script.src = 'https://static.cloudflareinsights.com/beacon.min.js';
      script.referrerPolicy = 'strict-origin-when-cross-origin';
      script.dataset.cfBeacon = JSON.stringify({
        token: config.siteId,
        spa: false,
      });
    } else {
      script.src = 'https://cloud.umami.is/script.js';
      script.referrerPolicy = 'no-referrer';
      script.dataset.websiteId = config.siteId;
      script.dataset.doNotTrack = 'true';
      script.dataset.excludeSearch = 'true';
      script.dataset.excludeHash = 'true';
    }
    if (hasAnalyticsConsent() && !respectsPrivacy())
      document.head.append(script);
  } catch {
    // A failed config request leaves third-party analytics off.
  }
};
void loadWebAnalytics();
