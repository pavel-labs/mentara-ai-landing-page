import { de } from './de';
import { en } from './en';
import { ru } from './ru';
import type { Dict } from './types';

export type { Dict } from './types';

export const LOCALES = ['en', 'de', 'ru'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Dict> = { en, de, ru };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

// Normalized base prefix (no trailing slash) — `import.meta.env.BASE_URL` has no
// guaranteed trailing slash across Astro versions.
function basePrefix(): string {
  return import.meta.env.BASE_URL.replace(/\/$/, '');
}

// Home URL for a locale. Default locale lives at the root (prefixDefaultLocale: false);
// the others under /<locale>/.
export function localeHome(locale: Locale): string {
  const base = basePrefix();
  return locale === DEFAULT_LOCALE ? `${base}/` : `${base}/${locale}/`;
}

// Absolute origin + path for hreflang / canonical alternates.
export function localeUrl(locale: Locale, origin: URL): string {
  return new URL(localeHome(locale), origin).href;
}
