# SEO and runtime analytics (#181)

## SEO implementation

Astro renders `BaseLayout.astro` metadata into HTML: title, description, author, robots,
self-canonical, Open Graph/Twitter image alt text, language alternates and JSON-LD. CMS
`landing.seo` values override localized fallback metadata through `Landing.astro`. Titles and
descriptions are editorial inputs, not keyword-stuffing templates. The favicon and generated PNG
icon set use the same Mentarika mark and colors as the main app. The new visible practice-modes
section supports the broader topic.

Keyword framework (intent hypotheses, not measured search-volume claims):

| Audience | Primary intent | Supporting terms | Destination |
| --- | --- | --- | --- |
| Shared | AI skills practice | AI tutor, professional skills assessment, evidence-based feedback | Home and multi-profession article |
| Developer | AI technical interview practice | system design, code review, algorithms | Interview section and existing technical guides |
| QA | QA interview practice | test scenarios, API testing, bug reporting, automation strategy | QA practice guide |
| Business/finance | business consultant interview practice | cash flow, KPIs, unit economics, business translation | Multi-profession article, consulting scenario section |

The English article `ai-skills-practice-for-developers-qa-and-consultants` includes role-specific
H2/H3 sections, internal links and a CTA to the configured access options. The blog template
supplies the single H1. Existing single-language canonical handling applies to localized wrappers;
translate and publish distinct CMS articles before advertising translated article content.
CMS overrides already published may retain older SEO text: review them in Marketing → Landing.

Validate production canonical origin, robots, sitemap and rendered article metadata after deploy.
Submit the sitemap to Search Console and use actual impressions/queries to refine the framework;
indexing and traffic increases are not guaranteed by metadata changes.

## Provider choice and architecture

Internal anonymous counters are the default for the product funnel. Cloudflare is a simple
web-traffic option; Umami Cloud provides an alternative with a website dashboard. Use current
provider terms to choose an appropriate plan; no pricing or quota assumptions are encoded.
GA4, Plausible and Yandex are not loaded by this implementation. Arbitrary script injection is
intentionally unsupported: a new provider requires an explicitly reviewed adapter.

The JavaScript build targets Chrome 86+, Edge 86+, Firefox 78+ and Safari 13.1+ (including iOS
Safari). These browsers provide the required `fetch`, `Promise` and timer APIs natively, so global
polyfills are intentionally omitted. Astro/Vite bundles are transpiled to these targets; inline
scripts must stay within the same syntax baseline. Request timeouts still settle if
`AbortController` is unavailable; only cancellation of the underlying request is then unavailable.

`web-analytics.ts` requests `GET /marketing/web-analytics` from `PUBLIC_API_URL` without cookies,
without caching, and with a three-second timeout. The timeout aborts requests where
`AbortController` is available and still settles if it is not. It accepts only Cloudflare's token
or Umami's UUID and uses fixed script URLs. DNT/GPC prevents the request and script load. Provider
scripts do not receive full page paths as referrers; Cloudflare receives the site origin for
beacon validation, while Umami receives no referrer. Umami also excludes query strings and hash
fragments and honors DNT.
Internal event requests use Fetch `keepalive` only in browsers that expose it. Neither adapter adds
user IDs or custom event payloads. Third-party requests still reach the selected provider and are
different from the internal aggregate counters.

Both internal funnel events and the optional third-party provider are gated by an explicit,
site-wide analytics opt-in. Before consent, the page does not request the tracking config or
send events. The consent UI is a small entry point; internal and provider analytics are separate
dynamic imports and are not downloaded until consent is granted. The choice is stored as
`mentarika.analytics-consent.v1` in local storage so it can be remembered on later visits; a
persistent privacy-settings button lets visitors change it.
Rejecting after previously allowing analytics records the choice and reloads the page so loaded
third-party code does not continue on that document. DNT/GPC still disables analytics even after
consent. This is a technical consent control, not a substitute for jurisdiction-specific legal
review.

The language switcher stores an explicit selection as `mentarika.locale` in local storage.
Neither value is a cookie. Internal event requests contain only the event name and locale in
their JSON body and use `credentials: omit`; available names are defined in
`src/marketing/types.generated.ts`. This does not establish what cookies or server-side logs
may be used by hosting, the API, or a third-party analytics provider. The privacy notice should
name the provider currently enabled in admin (Umami Cloud per the current product configuration)
and be reviewed if that changes. Confirm controller details, legal bases, retention periods,
provider/hosting storage behavior, and international-transfer safeguards before launch.

The admin saves `features.webAnalytics` through the existing audited configuration API:

```json
{"provider":"cloudflare","siteId":"0123456789abcdef0123456789abcdef"}
```

```json
{"provider":"umami","siteId":"94db1cb1-74f4-4a40-ad6c-962362670409"}
```

```json
{"provider":"none"}
```

These are placeholder public IDs, not secrets; all landing-page code and browser-visible
configuration are public. Keep API credentials and private keys on the backend, never in
`PUBLIC_*` variables or client-side bundles. Missing/invalid/unavailable configuration loads no
script.
API/admin must deploy before this landing; migrate any former `PUBLIC_CF_BEACON_TOKEN` into the
admin explicitly. Old landing bundles cannot honor the new switch. Changes apply to subsequent
page loads after normal backend runtime-cache refresh. Removing a script element cannot undo
listeners or requests from already executed vendor code, so there is no claim of live shutdown.
CMS preview pages keep analytics disabled. API CORS must allow the landing origin as before.

References: [Umami configuration](https://docs.umami.is/docs/tracker-configuration),
[Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/).
