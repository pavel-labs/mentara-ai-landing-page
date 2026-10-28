# Mentarika – Landing Page

Marketing site for **Mentarika**: AI technical interview practice, coding assessments and
feedback for developers, plus Mentarika for teams (Enterprise). Static, SEO/performance-first,
five languages.

**Copy rule:** the site only claims what the product does today. Before adding a feature to
the copy, check it in the app (or `docs/en/*` in the monorepo); planned Enterprise items live
in the explicit "not available yet" list on `/enterprise`, never in a feature claim. No
invented users, customers, statistics, testimonials or logos. Pro's price comes from the
store at runtime, so the site says "set at launch" rather than hardcoding one.

Built with **[Astro](https://astro.build)** (ships ~zero JS), self-hosted variable fonts,
and a shared design system: oversized typography, warm light surfaces, forest-green panels
and lime accents. Product previews are HTML/CSS, with no image or animation runtime.

## Develop

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # static output → dist/
npm run preview # serve the production build
npm test        # i18n, translation parity, marketing contracts and preview messages
npm run check   # Astro templates and TypeScript
```

Node 22.12+ (required by Astro 6; CI runs Node 22).

## Tests

`npm test` (Vitest, pure-logic only – no Astro runtime):

- `src/i18n/i18n.test.ts` – `isLocale` / `getDict` / `withBase` / `localeHome` /
  `localeUrl`.
- `src/i18n/parity.test.ts` – recursively asserts `de` and `ru` match the English
  dictionary's shape exactly (missing/renamed/extra keys and mismatched array lengths
  fail the build), so a missing translation can't ship silently.

Pull requests run template/type checks, tests and a static build before Lighthouse.
For layout changes, also review the fallback and published-content homepages at 320px,
390px, 768px, 1024px and 1440px. Check the mobile menu, language picker, FAQ, reduced
motion and keyboard focus. Validate published images, disabled sections and CMS preview
markers as well as the default content.

## Languages

Five languages: **English `/`**, **German `/de/`**, **Spanish `/es/`**, **Russian
`/ru/`**, **Polish `/pl/`** (Astro i18n, `prefixDefaultLocale: false`). Each route emits `hreflang`
alternates + `x-default`, a localized `<html lang>` / OG locale / JSON-LD, and the
sitemap carries `xhtml:link` alternates. A compact native language dropdown lives in the nav.

To **edit copy**: every translatable string is in `src/i18n/{en,de,es,ru,pl}.ts`, all typed
against `src/i18n/types.ts` – a missing/renamed key is a TypeScript error, not a silent
untranslated string. To **add a locale**: add `xx.ts`, register it in
`src/i18n/index.ts` (`LOCALES` + `dictionaries`) + `astro.config.mjs` (`i18n.locales` and
the sitemap `i18n.locales`), and add `src/pages/xx/index.astro`
(`<Landing locale="xx" />`). The parity test auto-covers it (it derives from `LOCALES`).

`src/consts.ts` now holds only non-translatable constants (brand name, domain, backend origin).

## Structure

```
src/
  i18n/{types,en,de,es,ru,pl,index}.ts  # typed translation dictionaries (the copy)
  consts.ts             # non-translatable constants only
  legal.ts              # DRAFT privacy/terms clauses (English authoritative)
  content.config.ts · content/blog/*.md   # changelog collection (English)
  layouts/BaseLayout    # <head>, SEO/OG/JSON-LD/hreflang/RSS, fonts, global.css
  components/   # Landing = Hero, Proof, WhyPractice, InterviewSection,
                #   AssessmentSection, ReportSection, ProgressSection, Pricing,
                #   TeamsBand, FAQ, CTA, BlogTeaser; EnterprisePageView +
                #   EnterpriseForm; shared FlowSteps, SectionHead, Nav, Footer, …
  pages/        # {locale}/index, {locale}/enterprise, {locale}/privacy,
                #   {locale}/terms, 404, blog/index, blog/[slug], rss.xml,
                #   og/[locale].png
scripts/gen-icons.mjs   # rasterizes favicon.svg → png icons (npm prebuild)
public/                  # favicon.svg, site.webmanifest, robots.txt
```

## Pages beyond the landing

- **Enterprise**: `/{locale}/enterprise` – Mentarika for teams: the two use cases (upskilling,
  hiring), how a trial starts, what the organization can and cannot see, roles, a "not
  available yet" list, and the contact form. The product illustrations on the home page are
  designed HTML/CSS mocks built from the app's real labels, not screenshots; replace them
  with real captures once those exist.
- **Contact form** (`EnterpriseForm.astro`): POSTs JSON to the backend's public
  `POST {PUBLIC_API_URL}/enterprise/inquiries` (fields mirror `EnterpriseInquiryBodySchema`
  in `@mentarika/shared`; `website` is the server-side honeypot), so leads show up in the admin
  console. Success fires `__mentarikaTrack?.('enterprise_inquiry')` and a virtual
  `…/enterprise/success` pageview.

- **Legal**: `/{locale}/privacy` + `/{locale}/terms` (all 5 locales). The page shell,
  headings and a prominent **draft notice** are localized; the clauses themselves stay in
  **English** (`src/legal.ts`) with "English is authoritative" stated – auto-translated
  binding legal text is a liability. Bump `LEGAL_EFFECTIVE_DATE` / `LEGAL_CONTACT` there.
  **These are unreviewed drafts – have counsel review before launch.**
- **Blog/changelog**: Astro content collection (`src/content/blog/*.md`, English),
  `/blog` + `/blog/<slug>` + `/rss.xml` (auto-discovered `<link rel=alternate>`). Posts are
  English-only but served under every locale prefix for the localized chrome, so those
  copies canonicalize to the English URL (`BaseLayout singleLanguage`) and are left out of
  the sitemap. Posts carry `BlogPosting` + `BreadcrumbList` JSON-LD.
- **Language redirect** (`LocaleAuto.astro`): only the root home `/` sends a first-time
  visitor to their browser's language. An explicit `/de/`, `/ru/`, … URL is never overridden
  by browser language (a shared link or a search result already chose it, and crawlers
  render with an English locale); a pick in the language switcher wins everywhere.
- **hreflang**: every localized page lists the same page in each locale (not the locale
  homes); `FAQPage` JSON-LD is emitted only on the home page, where the FAQ is rendered.
- **Per-locale OG**: `/og/<locale>.png` generated at build; each page references its own.
## Configuration (env)

See `.env.example`. All `PUBLIC_*` (inlined into the static build – no secrets):

- External analytics is configured in the app admin (Configuration → Availability), not at
  build time. `PUBLIC_CF_BEACON_TOKEN` is no longer read. See [SEO and analytics](docs/seo-and-analytics.md).
- `PUBLIC_API_URL` – backend origin for the Enterprise contact form (e.g.
  `https://api.example.com`, no trailing slash). Empty → the form renders a disabled note.
  The backend must list this site's origin in `ALLOWED_ORIGINS`, or the browser blocks the
  request (CORS). See the monorepo's `docs/en/environment.md`.
- `SITE_URL` / `BASE_PATH` – hosting overrides (production default = `https://mentarika.app`,
  set as a Railway build variable on the `landing` service — see below).

Set these as env in the GitHub Action (or repo variables) for the deployed build.

## Railway Hosting & custom domain

Deployed on **Railway** (`Dockerfile.landing`, multi-stage: `npm run build` produces the
static `dist/`, then nginx serves it — `nginx.landing.conf`). This replaced Firebase Hosting
so the whole product lives on one platform instead of two — there is no Firebase project or
config left in this repo.

- **Service**: `landing`, in the same Railway project as `frontend`/`backend`/`admin-console`,
  source repo `pavel-labs/mentara-ai-landing-page` (this repo, not the monorepo — Railway
  builds it as its own deploy source, the monorepo only carries it as a read-only git
  submodule). Build settings: `build.builder = DOCKERFILE`,
  `build.dockerfilePath = Dockerfile.landing`.
- **Custom domain**: `mentarika.app` (root) is a Railway custom domain on the `landing`
  service; `www.mentarika.app` redirects to it. Both need a CNAME (and Railway's ownership
  TXT record) at the DNS provider — `railway domain list --service landing --json` shows the
  exact records once added. Keep the DNS record **unproxied** ("DNS only") at the provider
  while Railway issues the certificate; a proxying provider terminates TLS itself and Railway
  can never validate the domain.
- **Build variables** (Railway → `landing` service → Variables, build-time — same
  `PUBLIC_*`/`SITE_URL` set as [above](#environment-variables)): `SITE_URL`, in production
  `https://mentarika.app`; `PUBLIC_WEB_APP_URL=https://app.mentarika.app` (the mobile web app,
  on its own subdomain — see the monorepo's `docs/en/devops-playbook.md` → "Mentarika domain
  rollout"); the rest default safely to off/empty until configured.
- Every `SITE_URL`-derived URL (canonical, OG, hreflang, sitemap, `robots.txt`) still needs no
  code change to move domains — only the Railway build variable.

### Redeploying after a CMS publish

Publishing/unpublishing/archiving managed content in the admin console doesn't push a commit,
so Railway's own push-triggered deploy never fires for it. The backend's optional
`MARKETING_GITHUB_TOKEN` sends a `repository_dispatch` (`marketing-content-published`) instead,
picked up by `.github/workflows/redeploy.yml`, which triggers a Railway redeploy via a
`RAILWAY_TOKEN` repo secret (a Railway *project* token — dashboard → Project settings →
Tokens). With no token, that workflow skips with a warning and the content ships on the next
ordinary push, or trigger one by hand: `railway redeploy --service landing`.

## Notes

- **Social card** `/og/<locale>.png` is generated at build (`astro-og-canvas`, real
  1200×630 PNG) – fixes SVG-OG not rendering on Slack/iMessage/LinkedIn/X. It uses
  astro-og-canvas's default font (fetched + cached at build): **deliberately not
  self-hosted** – Satori needs TTF/OTF and the variable `@fontsource` packages ship
  woff2-only, so true self-host would mean committing a font binary for marginal gain.
- **`robots.txt`** is a generated route (`src/pages/robots.txt.ts`) – its Sitemap URL
  tracks `site`/`base`, so the custom-domain switch needs no manual edit.
- **404**: one static `404.html` (GitHub Pages serves it for every unknown path),
  localized client-side from the `/de|/es|/ru` URL prefix; default render is English.
- **Design tokens**: `src/styles/global.css` defines surface, text, accent, spacing and
  radius tokens. `.theme-dark` and `.theme-light` set local color contexts; components
  inherit them. Keep small text at WCAG AA contrast and retain visible keyboard focus.
  Self-hosted Hanken Grotesk handles headings/body; JetBrains Mono is limited to code
  and compact numeric labels. Motion respects `prefers-reduced-motion`.
- **Icons** (`apple-touch-icon.png`, `icon-192/512.png`) are generated from
  `public/favicon.svg` by `npm run prebuild` and are gitignored (regenerated in CI).
- **SEO**: JSON-LD `@graph` (Organization + SoftwareApplication + `FAQPage`), sitemap,
  robots, manifest. The FAQ is rich-result eligible.
- Store badges link to configured app detail URLs; unconfigured stores show **Coming soon**.
- **Security**: content is validated before static generation; article text and SEO JSON-LD are escaped. Preview accepts drafts only from configured admin origins and never parses text as HTML.
- Deploy: Railway (`Dockerfile.landing`, see "Railway Hosting" above), plus a
  **non-blocking** Lighthouse CI `audit` job in `.github/workflows/lighthouse.yml`
  (`lighthouserc.json`, ≥0.9 budgets as warnings). Any static host also works:
  `npm run build` → `dist/`.

## Relationship to the main repo

This repository is consumed as a **git submodule** at `landing/` inside the
`mentara-ai` monorepo (kept outside the npm-workspaces glob so it stays fully
independent – its own `package.json`, lockfile, and deploy). Develop here; the monorepo
just pins a commit.

## Admin-managed marketing content

The Mentarika admin console owns content; this site owns layout, responsive styles and animation.
Normal edits need no source change. It receives only published content from `/marketing/export`
during prebuild, validates the generated shared contract and emits static HTML. If a configured
managed API is unavailable or invalid, the build fails before deployment and the live site remains.
Managed content is off by default: without `MARKETING_CONTENT_ENABLED=true`, builds use the
existing local content and no managed articles, even when `PUBLIC_API_URL` is already configured
for Enterprise enquiries. This lets the website deploy before the new backend routes are ready.

Managed homepages cover hero, ordered/visible product sections, pricing descriptions, FAQ,
SEO, footer and links in five languages. Billing reference prices come from the existing
catalog; checkout prices remain authoritative. `/articles/<slug>/` and localized equivalents
render complete Article metadata, canonical URLs, sitemap and RSS entries. The existing code
blog is preserved. Slugs stay fixed. Text/code is escaped; arbitrary HTML is not supported.
Hosted HTTPS images require alt text; image uploads and scheduled publishing are not added.

Set public build variables in this repository:

- `PUBLIC_API_URL`: backend origin for Enterprise enquiries and CTA counters; also used for
  published content after explicit activation.
- `MARKETING_CONTENT_ENABLED`: defaults to `false`. Set `true` only after the deployed backend
  returns HTTP 200 and a valid snapshot from `GET /marketing/export`. An enabled build requires
  `PUBLIC_API_URL` and stops on a fetch/validation error. Keep it enabled once CMS content is live.
- `PUBLIC_WEB_APP_URL`: actual web product destination; absent → unavailable CTA.
- `PUBLIC_APP_STORE_URL`, `PUBLIC_GOOGLE_PLAY_URL`: actual app detail URLs; absent → coming soon.
- `PUBLIC_ADMIN_ORIGINS`: comma-separated exact admin origins trusted by `/preview/`.

Published page links override those fallback product/store destinations. Users can choose any
available platform; there is no forced platform redirect. Content-independent pages use these
central links too. CTA events store anonymous locale/event counts; no tracking runs in preview.

The backend can trigger `.github/workflows/redeploy.yml` with repository-dispatch event
`marketing-content-published` (see "Redeploying after a CMS publish" above), or an operator can
run it manually. Content save and publish are separate; a failed dispatch/build is retriable.
Automated publication requires explicit activation; disabled content cannot trigger a
deployment of local defaults. The Railway build itself reads the activation flag from the
`landing` service's own Build Variables (set once, not per-dispatch); the Lighthouse build in
CI sets it from the repo variable of the same name. `/marketing/defaults/<locale>.json` lets the
admin copy current local content into a draft. `/preview/` reuses real website CSS, checks the
parent window and admin origin, and validates drafts before rendering DOM text nodes. Drafts
never enter URLs or the public export. Preview is noindex, excluded from sitemap/analytics.

Contracts are generated from the main repo with `npm run marketing:contract`, which builds
`@mentarika/shared` first. Keep generated JSON/types with both coordinated PRs. Run
`npm test` and `npm run build` before review. The CSS 3D hero needs no WebGL dependency and
honors reduced-motion preferences.

The legacy third-party waitlist form has been removed. The landing page does not collect early-access emails. Launch copy and product links are managed through Marketing → Landing in the admin console when CMS publication is enabled. Enterprise inquiries continue to use the existing backend and admin inquiry list. The `#waitlist` anchor remains for existing inbound links and shows launch information.

## Layout and content

`Hero`, `Pricing` and `FAQ` serve both default and published content. `InterviewPreview`
contains the localized sample conversation; `FeatureArt` supplies decorative SVG/CSS
art when an enabled CMS section has no image. Published images take precedence.
`BrandMark` and `public/favicon.svg` share the same mark, with raster icons generated
at build time. Content dictionaries, blog posts, contracts and publication rules remain
the source of truth; visual changes should not rewrite them.


### Anonymous funnel counters

The landing first reads `GET /marketing/tracking` from `PUBLIC_API_URL`. Only an explicit
`{ enabled: true }` permits a landing-view or CTA event. A missing endpoint, network failure,
DNT or GPC prevents collection; preview pages load no tracking script. The API enforces the
admin switch again before storing a counter. Deploy the companion backend before this landing.

Payloads contain only the allowlisted event and document locale, with credentials omitted.
There are no tracking cookies or persistent visitor IDs. Totals are events, not unique users
or linked conversion rates. Optional Cloudflare analytics is configured independently.
The QA practice article describes a controlled pilot, with availability checked in the app.
