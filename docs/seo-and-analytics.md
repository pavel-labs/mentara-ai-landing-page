# SEO and runtime analytics (#181)

## SEO implementation

Astro renders `BaseLayout.astro` metadata into HTML: title, description, self-canonical,
Open Graph/Twitter, language alternates and JSON-LD. CMS `landing.seo` values override localized
fallback metadata through `Landing.astro`. Titles and descriptions are editorial inputs, not
keyword-stuffing templates. The new visible practice-modes section supports the broader topic.

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

`web-analytics.ts` requests `GET /marketing/web-analytics` from `PUBLIC_API_URL` without cookies
and with a three-second timeout. It accepts only Cloudflare's token or Umami's UUID and uses fixed
script URLs. DNT/GPC prevents the request and script load. Umami excludes query strings and hash
fragments; neither adapter adds user IDs or custom event payloads. Third-party requests still
reach the selected provider and are different from the internal aggregate counters.

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

These are placeholder public IDs. Missing/invalid/unavailable configuration loads no script.
API/admin must deploy before this landing; migrate any former `PUBLIC_CF_BEACON_TOKEN` into the
admin explicitly. Old landing bundles cannot honor the new switch. Changes apply to subsequent
page loads after normal backend runtime-cache refresh. Removing a script element cannot undo
listeners or requests from already executed vendor code, so there is no claim of live shutdown.
CMS preview pages keep analytics disabled. API CORS must allow the landing origin as before.

References: [Umami configuration](https://docs.umami.is/docs/tracker-configuration),
[Cloudflare Web Analytics](https://developers.cloudflare.com/web-analytics/).
