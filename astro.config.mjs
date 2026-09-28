import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Hosting config is env-overridable so pointing at a different domain is a one-liner —
// no code change.
//
// Deployed on Firebase Hosting, which serves from the domain root (no repo-subpath like
// GitHub Pages needed), so BASE_PATH defaults to '/'.
//
// SITE_URL defaults to the live Firebase domain because no custom domain is decided yet.
// Never point it at a domain the project does not actually serve: canonical / og:image /
// hreflang / sitemap URLs all derive from it, so a wrong value tells Google and every
// link preview that the real page lives somewhere it does not.
// When a domain is chosen and its DNS points at Firebase, set the repo variable
// SITE_URL=https://<the-domain> (Settings → Secrets and variables → Actions → Variables)
// — no code change needed. See README → Custom domain.
//
// `||` (not `??`) on purpose: unset GitHub Actions `vars.*` arrive as "" — empty must
// fall back to the default, otherwise an unconfigured deploy would break.
const SITE_URL = process.env.SITE_URL || 'https://mentara-ai-landing.web.app';
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  // English at the root (/), every other locale under /<code>/ (de, es, ru, pl).
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'ru', 'pl'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Blog posts are English-only; /<locale>/blog/<slug> copies canonicalize to the
      // English URL (BaseLayout `singleLanguage`), so listing them would only advertise
      // duplicates.
      filter: (page) => !/\/(?:de|es|ru|pl)\/blog\/[^/]+\/?$/.test(new URL(page).pathname),
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', de: 'de-DE', es: 'es-ES', ru: 'ru-RU', pl: 'pl-PL' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
