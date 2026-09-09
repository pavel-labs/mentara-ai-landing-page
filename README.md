# Mentara – Landing Page

Marketing landing page for **Mentara**, an AI-powered mock technical interview app for
software engineers. Static, SEO/performance-first, English only (for now).

Built with **[Astro](https://astro.build)** (ships ~zero JS), self-hosted variable fonts,
and a hand-rolled dark "editorial-terminal" design system – no UI kit, no tracking.

## Develop

```bash
npm install
npm run dev     # http://localhost:4321
npm run build   # static output → dist/
npm run preview # serve the production build
npm test        # vitest – i18n helpers + translation parity
```

Node 22.12+ (required by Astro 6; CI runs Node 22).

## Tests

`npm test` (Vitest, pure-logic only – no Astro runtime):

- `src/i18n/i18n.test.ts` – `isLocale` / `getDict` / `withBase` / `localeHome` /
  `localeUrl`.
- `src/i18n/parity.test.ts` – recursively asserts `de` and `ru` match the English
  dictionary's shape exactly (missing/renamed/extra keys and mismatched array lengths
  fail the build), so a missing translation can't ship silently.

Astro components are templates with no branching logic, so they're verified by the build

- visual review rather than unit tests; all testable logic lives in `src/i18n`.

## Languages

Four languages: **English `/`**, **German `/de/`**, **Spanish `/es/`**, **Russian
`/ru/`** (Astro i18n, `prefixDefaultLocale: false`). Each route emits `hreflang`
alternates + `x-default`, a localized `<html lang>` / OG locale / JSON-LD, and the
sitemap carries `xhtml:link` alternates. A compact EN/DE/ES/RU switcher lives in the nav.

To **edit copy**: every translatable string is in `src/i18n/{en,de,es,ru}.ts`, all typed
against `src/i18n/types.ts` – a missing/renamed key is a TypeScript error, not a silent
untranslated string. To **add a locale**: add `xx.ts`, register it in
`src/i18n/index.ts` (`LOCALES` + `dictionaries`) + `astro.config.mjs` (`i18n.locales` and
the sitemap `i18n.locales`), and add `src/pages/xx/index.astro`
(`<Landing locale="xx" />`). The parity test auto-covers it (it derives from `LOCALES`).

`src/consts.ts` now holds only non-translatable constants (brand name, domain, Formspree
endpoint).

## Structure

```
src/
  i18n/{types,en,de,es,ru,index}.ts  # typed translation dictionaries (the copy)
  consts.ts             # non-translatable constants only
  legal.ts              # DRAFT privacy/terms clauses (English authoritative)
  content.config.ts · content/blog/*.md   # changelog collection (English)
  layouts/BaseLayout    # <head>, SEO/OG/JSON-LD/hreflang/RSS, fonts, global.css
  components/   # Landing + Legal + Nav, Hero, Trust, ShowProduct, Features,
                #   Audience, HowItWorks, Pricing, FAQ, CTA, Footer, Waitlist,
                #   StoreBadges, LanguageSwitcher
  pages/        # {locale}/index, {locale}/privacy, {locale}/terms, 404,
                #   blog/index, blog/[slug], rss.xml, og/[locale].png
scripts/gen-icons.mjs   # rasterizes favicon.svg → png icons (npm prebuild)
public/                  # favicon.svg, site.webmanifest, robots.txt
```

## Pages beyond the landing

- **Legal**: `/{locale}/privacy` + `/{locale}/terms` (all 4 locales). The page shell,
  headings and a prominent **draft notice** are localized; the clauses themselves stay in
  **English** (`src/legal.ts`) with "English is authoritative" stated – auto-translated
  binding legal text is a liability. Bump `LEGAL_EFFECTIVE_DATE` / `LEGAL_CONTACT` there.
  **These are unreviewed drafts – have counsel review before launch.**
- **Blog/changelog**: Astro content collection (`src/content/blog/*.md`, English),
  `/blog` + `/blog/<slug>` + `/rss.xml` (auto-discovered `<link rel=alternate>`).
- **Per-locale OG**: `/og/<locale>.png` generated at build; each page references its own.
- **Waitlist conversion**: on success the form fires `window.__mentaraTrack?.('waitlist_signup')`
  (provider-agnostic hook) and a virtual `…/waitlist/success` pushState. Cloudflare Web
  Analytics has **no custom-event API**, so the beacon runs in `spa:true` mode and that
  virtual pageview is the measurable funnel step (URL is restored instantly).

## Configuration (env)

See `.env.example`. All `PUBLIC_*` (inlined into the static build – no secrets):

- `PUBLIC_FORMSPREE_ENDPOINT` – waitlist form target. Empty → the waitlist renders a
  disabled placeholder (never ships a broken POST).
- `PUBLIC_CF_BEACON_TOKEN` – Cloudflare Web Analytics. Empty → no beacon injected, no
  cookie banner needed.
- `SITE_URL` / `BASE_PATH` – hosting overrides (default = GitHub Pages project URL).

Set these as env in the GitHub Action (or repo variables) for the deployed build.

## Firebase Hosting & custom domain

Deployed on **Firebase Hosting** (`firebase.json`, `.firebaserc`, `dist/` as the public
dir). Everything is written to switch domains with **no code change** –
canonical/OG/hreflang/sitemap and `robots.txt` all derive from `site`/`base`
(`astro.config.mjs`).

**The custom domain is not decided yet.** The site is served from the auto-assigned
Firebase domain `https://mentara-ai-landing.web.app`, which is also the `SITE_URL`
default. Do not hardcode a candidate domain anywhere: point `SITE_URL` at an origin only
once it actually serves this site.

**One-time setup:**

1. ~~**Firebase project**~~ – done: `.firebaserc` points at the `mentara-ai-landing`
   project, Hosting enabled.
2. **CI deploy secret**: Firebase console → Project settings → Service accounts →
   Generate new private key, then add its JSON as the GitHub Actions secret
   `FIREBASE_SERVICE_ACCOUNT`. It is stored as an **environment** secret on the
   `firebase` environment (Settings → Environments → firebase), which is why the deploy
   job declares `environment: firebase` – environment secrets are invisible to jobs that
   do not.
   ⚠️ This repo is **public** – that key must live only as a GitHub secret, never
   committed. Until it is set the workflow **skips** the deploy step with a warning
   (the build and Lighthouse jobs still run), so a missing secret shows up as a warning
   rather than a failed run.
3. **Custom domain** – _pending, no domain picked_. Once there is one: Firebase console
   → Hosting → Add custom domain → `<the-domain>` (and its `www.` variant). Firebase walks
   you through a TXT record for verification, then gives you the `A`/`CNAME` records to add
   at your DNS provider, and auto-provisions the TLS certificate.
4. **Repo variables** – **the day that domain actually resolves to this site**: set
   `SITE_URL=https://<the-domain>` (Settings → Secrets and variables → Actions →
   Variables). Not a day earlier: canonical, `og:image`, `hreflang` and sitemap URLs are
   built from it, so pointing them at a domain that is parked, unregistered, or serving
   something else tells Google the canonical page lives there and leaves every shared link
   without a preview. It is one variable – no code edit.

Note: this project only uses Firebase **Hosting** – no client-side Firebase SDK
(`firebase-app.js`, Analytics, Auth, etc.) is wired up, and none is needed for Hosting to
work. Registering the "web app" in the Firebase console (which produces an
`initializeApp(firebaseConfig)` snippet) is optional and unrelated to deploying this site;
skip it unless a future feature actually needs a client-side Firebase product.

After a domain is live and `SITE_URL` is set, `robots.txt`, the sitemap, all
hreflang/canonical/OG URLs, and `localeHome` resolve under it with no further change. Then
point the mobile app's `EXPO_PUBLIC_TERMS_URL` / `EXPO_PUBLIC_PRIVACY_URL` at that domain's
`/terms` and `/privacy`.

For an ad-hoc push outside CI: `npm run deploy` (builds, then `firebase deploy` via
`npx firebase-tools` – requires `firebase login` locally first).

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
- **Accessibility**: watch the first Lighthouse CI report for small-text contrast on
  `--bone-faint` (used for mono captions; ~3.5:1 on ink, under WCAG AA 4.5 for small
  text). Left as a brand trade-off pending a real score rather than blind-retuned.
- **Icons** (`apple-touch-icon.png`, `icon-192/512.png`) are generated from
  `public/favicon.svg` by `npm run prebuild` and are gitignored (regenerated in CI).
- **SEO**: JSON-LD `@graph` (Organization + SoftwareApplication + `FAQPage`), sitemap,
  robots, manifest. The FAQ is rich-result eligible.
- Store badges are intentionally **non-interactive "Coming soon"** until the apps ship.
- **Security**: two open `astro` advisories (`define:vars` XSS, server-island replay) do
  not apply here – this site uses neither and is fully static with no user input.
  `astro@6` is a breaking major `astro-og-canvas` doesn't support yet; revisit when it
  does. Not force-upgraded on purpose.
- Deploy: Firebase Hosting via `.github/workflows/deploy.yml` (build →
  `FirebaseExtended/action-hosting-deploy`), plus a **non-blocking** Lighthouse CI `audit`
  job (`lighthouserc.json`, ≥0.9 budgets as warnings). Any static host also works:
  `npm run build` → `dist/`.

## Relationship to the main repo

This repository is consumed as a **git submodule** at `landing/` inside the
`mentara-ai` monorepo (kept outside the npm-workspaces glob so it stays fully
independent – its own `package.json`, lockfile, and deploy). Develop here; the monorepo
just pins a commit.
