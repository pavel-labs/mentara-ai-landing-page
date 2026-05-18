# Mentara — Landing Page

Marketing landing page for **Mentara**, an AI-powered mock technical interview app for
software engineers. Static, SEO/performance-first, English only (for now).

Built with **[Astro](https://astro.build)** (ships ~zero JS), self-hosted variable fonts,
and a hand-rolled dark "editorial-terminal" design system — no UI kit, no tracking.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → dist/
npm run preview  # serve the production build
npm test         # vitest — i18n helpers + translation parity
```

Node 18.20.8+ (the repo CI / monorepo uses Node 24).

## Tests

`npm test` (Vitest, pure-logic only — no Astro runtime):

- `src/i18n/i18n.test.ts` — `isLocale` / `getDict` / `withBase` / `localeHome` /
  `localeUrl`.
- `src/i18n/parity.test.ts` — recursively asserts `de` and `ru` match the English
  dictionary's shape exactly (missing/renamed/extra keys and mismatched array lengths
  fail the build), so a missing translation can't ship silently.

Astro components are templates with no branching logic, so they're verified by the build
+ visual review rather than unit tests; all testable logic lives in `src/i18n`.

## Languages

Trilingual: **English `/`**, **German `/de/`**, **Russian `/ru/`** (Astro i18n,
`prefixDefaultLocale: false`). Each route emits `hreflang` alternates + `x-default`, a
localized `<html lang>` / OG locale / JSON-LD, and the sitemap carries `xhtml:link`
alternates. A compact EN/DE/RU switcher lives in the nav.

To **edit copy**: every translatable string is in `src/i18n/{en,de,ru}.ts`, all typed
against `src/i18n/types.ts` — a missing/renamed key is a TypeScript error, not a silent
untranslated string. To **add a locale**: add `xx.ts`, register it in
`src/i18n/index.ts` + `astro.config.mjs` (`i18n.locales` and the sitemap `i18n.locales`),
and add `src/pages/xx/index.astro` (`<Landing locale="xx" />`).

`src/consts.ts` now holds only non-translatable constants (brand name, domain, Formspree
endpoint).

## Structure

```
src/
  i18n/{types,en,de,ru,index}.ts   # typed translation dictionaries (the copy)
  consts.ts             # non-translatable constants only
  layouts/BaseLayout    # <head>, SEO/OG/JSON-LD/hreflang, fonts, global.css
  styles/global.css     # design tokens + primitives
  components/   # Landing (assembles a locale) + Nav, Hero, Trust, ShowProduct,
                #   Features, Audience, HowItWorks, Pricing, FAQ, CTA, Footer,
                #   Waitlist, StoreBadges, LanguageSwitcher
  pages/index.astro · pages/de/index.astro · pages/ru/index.astro
  pages/404.astro · pages/og.png.ts  (build-time social card)
scripts/gen-icons.mjs   # rasterizes favicon.svg → png icons (npm prebuild)
public/                  # favicon.svg, site.webmanifest, robots.txt
```

## Configuration (env)

See `.env.example`. All `PUBLIC_*` (inlined into the static build — no secrets):

- `PUBLIC_FORMSPREE_ENDPOINT` — waitlist form target. Empty → the waitlist renders a
  disabled placeholder (never ships a broken POST).
- `PUBLIC_CF_BEACON_TOKEN` — Cloudflare Web Analytics. Empty → no beacon injected, no
  cookie banner needed.
- `SITE_URL` / `BASE_PATH` — hosting overrides (default = GitHub Pages project URL).

Set these as env in the GitHub Action (or repo variables) for the deployed build.

## Notes

- **Social card** `og.png` is generated at build (`astro-og-canvas`, real 1200×630 PNG) —
  fixes SVG-OG not rendering on Slack/iMessage/LinkedIn/X.
- **Icons** (`apple-touch-icon.png`, `icon-192/512.png`) are generated from
  `public/favicon.svg` by `npm run prebuild` and are gitignored (regenerated in CI).
- **SEO**: JSON-LD `@graph` (Organization + SoftwareApplication + `FAQPage`), sitemap,
  robots, manifest. The FAQ is rich-result eligible.
- Store badges are intentionally **non-interactive "Coming soon"** until the apps ship.
- **Security**: two open `astro` advisories (`define:vars` XSS, server-island replay) do
  not apply here — this site uses neither and is fully static with no user input.
  `astro@6` is a breaking major `astro-og-canvas` doesn't support yet; revisit when it
  does. Not force-upgraded on purpose.
- Deploy: GitHub Pages via `.github/workflows/deploy.yml` (build → `deploy-pages`), plus a
  **non-blocking** Lighthouse CI `audit` job (`lighthouserc.json`, ≥0.9 budgets as
  warnings). Any static host also works: `npm run build` → `dist/`.

## Relationship to the main repo

This repository is consumed as a **git submodule** at `landing/` inside the
`mentara-ai` monorepo (kept outside the npm-workspaces glob so it stays fully
independent — its own `package.json`, lockfile, and deploy). Develop here; the monorepo
just pins a commit.
