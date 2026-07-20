import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Hosting config is env-overridable so pointing at a different domain is a one-liner —
// no code change.
//
// Deployed on Firebase Hosting, which serves from the domain root (no repo-subpath like
// GitHub Pages needed), so BASE_PATH defaults to '/'. SITE_URL defaults to the eventual
// mentara.ai custom domain (see README → Custom domain); override it to build against the
// auto-assigned <project-id>.web.app / .firebaseapp.com domain before DNS cutover.
// `||` (not `??`) on purpose: unset GitHub Actions `vars.*` arrive as "" — empty must
// fall back to the default, otherwise an unconfigured deploy would break.
const SITE_URL = process.env.SITE_URL || 'https://mentara.ai';
const BASE_PATH = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  // English at the root (/), German at /de/, Russian at /ru/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'es', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', de: 'de-DE', es: 'es-ES', ru: 'ru-RU' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
