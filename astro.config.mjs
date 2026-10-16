import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Hosting config is env-overridable so pointing at a different domain is a one-liner —
// no code change.
//
// Deployed on Firebase Hosting, which serves from the domain root (no repo-subpath like
// GitHub Pages needed), so BASE_PATH defaults to '/'.
//
// Mentarika's canonical marketing domain. Override SITE_URL for staging or while DNS/TLS
// are being connected; canonical, OG, hreflang and sitemap URLs all derive from it.
// See README → Custom domain.
//
// `||` (not `??`) on purpose: unset GitHub Actions `vars.*` arrive as "" — empty must
// fall back to the default, otherwise an unconfigured deploy would break.
const SITE_URL = process.env.SITE_URL || 'https://mentarika.app';
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
      filter: (page) =>
        !new URL(page).pathname.includes('/preview/') &&
        !new URL(page).pathname.includes('/marketing/defaults/') &&
        !/\/(?:de|es|ru|pl)\/blog\/[^/]+\/?$/.test(new URL(page).pathname),
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
