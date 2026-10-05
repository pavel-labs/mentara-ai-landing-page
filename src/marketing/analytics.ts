import { API } from '../consts';
import { MARKETING_EVENTS, type MarketingEvent } from './types.generated';

// One anonymous counter per CTA click. Preview loads no tracking script. Failures never delay navigation.
document.addEventListener('click', (event) => {
  const element =
    event.target instanceof Element
      ? event.target.closest<HTMLAnchorElement>('a[data-marketing-event]')
      : null;
  const name = element?.dataset.marketingEvent;
  if (!API.baseUrl || !name || !(MARKETING_EVENTS as readonly string[]).includes(name)) return;
  void fetch(`${API.baseUrl}/marketing/events`, {
    method: 'POST',
    credentials: 'omit',
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ event: name as MarketingEvent, locale: document.documentElement.lang }),
    signal: AbortSignal.timeout(3000),
  }).catch(() => {});
});
