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
  components/           # Nav, Hero, Trust, Features, HowItWorks, Pricing, FAQ, CTA, Footer
  pages/index.astro     # page assembly
public/                  # favicon.svg, og.svg, robots.txt (sitemap auto-generated)
```

## Notes

- `astro.config.mjs` sets `site: https://mentara.ai` — update if the marketing domain
  changes. `@astrojs/sitemap` generates `sitemap-index.xml` at build.
- `public/og.svg` is the social card. Some scrapers (Slack, older Twitter) don't render
  SVG OG images — before launch, export a `1200×630` `og.png` and point the OG/Twitter
  tags in `BaseLayout.astro` at it.
- Store badges are intentionally **non-interactive "Coming soon"** until the apps ship.
- Deploy: any static host (Vercel / Netlify / Cloudflare Pages / GitHub Pages). Build
  command `npm run build`, output `dist/`.

## Relationship to the main repo

This repository is consumed as a **git submodule** at `landing/` inside the
`mentara-ai` monorepo (kept outside the npm-workspaces glob so it stays fully
independent — its own `package.json`, lockfile, and deploy). Develop here; the monorepo
just pins a commit.
