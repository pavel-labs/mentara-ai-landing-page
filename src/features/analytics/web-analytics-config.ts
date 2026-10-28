export type WebAnalyticsConfig =
  | { provider: 'cloudflare'; siteId: string }
  | { provider: 'umami'; siteId: string };

export const parseWebAnalyticsConfig = (
  value: unknown,
): WebAnalyticsConfig | null => {
  if (
    typeof value !== 'object' ||
    value === null ||
    !('provider' in value) ||
    !('siteId' in value) ||
    typeof value.siteId !== 'string'
  )
    return null;

  if (value.provider === 'cloudflare' && /^[a-f0-9]{32}$/i.test(value.siteId))
    return { provider: value.provider, siteId: value.siteId };

  if (
    value.provider === 'umami' &&
    /^[a-f0-9]{8}-[a-f0-9]{4}-[1-8][a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}$/i.test(
      value.siteId,
    )
  )
    return { provider: value.provider, siteId: value.siteId };

  return null;
};
