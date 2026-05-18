import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// Hosting config is env-overridable so moving to a custom domain later is a one-liner
// (set SITE_URL=https://mentara.ai and BASE_PATH=/ — no code change).
//
// Default targets GitHub Pages for THIS project repo:
//   https://themafia98.github.io/mentara-ai-landing-page/
const SITE_URL = process.env.SITE_URL ?? 'https://themafia98.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/mentara-ai-landing-page';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  // English at the root (/), German at /de/, Russian at /ru/.
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'ru'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en-US', de: 'de-DE', ru: 'ru-RU' },
      },
    }),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
