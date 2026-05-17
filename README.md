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
```

Node 18.20.8+ (the repo CI / monorepo uses Node 24).

## Editing content

All marketing copy and metadata live in **`src/consts.ts`** — site title/description,
nav, features, steps, pricing tiers, FAQ. Edit there, not in components.

## Structure

```
src/
  consts.ts            # all copy + metadata (single source of truth)
  layouts/BaseLayout   # <head>, SEO/OG/JSON-LD, fonts, global.css
  styles/global.css    # design tokens + primitives
  components/   # Nav, Hero, Trust, ShowProduct, Features, Audience, HowItWorks,
                #   Pricing, FAQ, CTA, Footer, Waitlist, StoreBadges
  pages/index.astro · pages/404.astro · pages/og.png.ts  (build-time social card)
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
