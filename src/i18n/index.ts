import { de } from './de';
import { en } from './en';
import { es } from './es';
import { ru } from './ru';
import type { Dict } from './types';

export type { Dict } from './types';

export const LOCALES = ['en', 'de', 'es', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Dict> = { en, de, es, ru };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

// Single source of truth for the deploy base prefix (no trailing slash).
// `import.meta.env.BASE_URL` has no guaranteed trailing slash across Astro versions, and
// is absent under Vitest — the `?? '/'` keeps the helpers pure-testable.
function basePrefix(): string {
  const raw = (import.meta.env?.BASE_URL as string | undefined) ?? '/';
  return raw.replace(/\/$/, '');
}

// Joins a public-root path onto the deploy base. The ONE place asset/route paths are
// prefixed — used by the layout (favicon/og/manifest/sitemap) and the locale helpers.
export function withBase(path: string): string {
  return `${basePrefix()}/${path.replace(/^\//, '')}`;
}

// Home URL for a locale. Default locale lives at the root (prefixDefaultLocale: false);
// the others under /<locale>/.
export function localeHome(locale: Locale): string {
  return locale === DEFAULT_LOCALE ? withBase('') : withBase(`${locale}/`);
}

// Absolute origin + path for hreflang / canonical alternates.
export function localeUrl(locale: Locale, origin: URL): string {
  return new URL(localeHome(locale), origin).href;
}

// Builds a base-prefixed URL for a path under a given locale.
// Default locale paths are not prefixed: localePath('en', 'blog/foo') → '/blog/foo'
// Other locales are prefixed:            localePath('es', 'blog/foo') → '/es/blog/foo'
export function localePath(locale: Locale, path: string): string {
  return withBase(locale === DEFAULT_LOCALE ? path : `${locale}/${path}`);
}
