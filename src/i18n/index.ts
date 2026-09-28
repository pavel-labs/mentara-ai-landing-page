import { de } from './de';
import { en } from './en';
import { es } from './es';
import { pl } from './pl';
import { ru } from './ru';
import type { Dict } from './types';

export type { Dict } from './types';

export const LOCALES = ['en', 'de', 'es', 'ru', 'pl'] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

const dictionaries: Record<Locale, Dict> = { en, de, es, ru, pl };

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

// localStorage key holding an explicit language choice (written by the language
// switcher). Its presence is what stops the browser-language auto-redirect from
// overriding a decision the visitor already made.
export const LOCALE_STORAGE_KEY = 'mentara.locale';

// Picks the best supported locale for a browser's language list ("ru-RU", "de-AT", …).
// Region subtags are ignored, order is honoured, and an unsupported list yields null so
// the caller can fall back to the default locale instead of guessing.
export function pickLocale(preferred: readonly string[] | undefined): Locale | null {
  for (const tag of preferred ?? []) {
    const base = String(tag).toLowerCase().split('-')[0];
    if (isLocale(base)) return base;
  }
  return null;
}

// Single source of truth for the deploy base prefix (no trailing slash).
// `import.meta.env.BASE_URL` has no guaranteed trailing slash across Astro versions, and
// is absent under Vitest – the `?? '/'` keeps the helpers pure-testable.
function basePrefix(): string {
  const raw = (import.meta.env?.BASE_URL as string | undefined) ?? '/';
  return raw.replace(/\/$/, '');
}

// Joins a public-root path onto the deploy base. The ONE place asset/route paths are
// prefixed – used by the layout (favicon/og/manifest/sitemap) and the locale helpers.
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

// Page URLs end in a slash: Astro emits every page as <path>/index.html and Firebase
// Hosting is configured with trailingSlash:true, so '/blog/foo' would cost a 301 on every
// click and every canonical/hreflang/sitemap lookup. Files ('rss.xml') and an empty path
// are left alone; a '#fragment' stays after the slash.
function withTrailingSlash(path: string): string {
  const hashAt = path.indexOf('#');
  const pathname = hashAt === -1 ? path : path.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : path.slice(hashAt);
  const isFile = /\.[a-z0-9]+$/i.test(pathname);
  const done = pathname === '' || pathname.endsWith('/') || isFile;
  return `${done ? pathname : `${pathname}/`}${hash}`;
}

// Builds a base-prefixed page URL for a path under a given locale.
// Default locale paths are not prefixed: localePath('en', 'blog/foo') → '/blog/foo/'
// Other locales are prefixed:            localePath('es', 'blog/foo') → '/es/blog/foo/'
export function localePath(locale: Locale, path: string): string {
  return withBase(withTrailingSlash(locale === DEFAULT_LOCALE ? path : `${locale}/${path}`));
}

// Resolves a nav-entry href against a "home" context shared by Nav and Footer: a hash
// anchor is scoped under homeHref (unless homeHref is the bare in-page '#main', where the
// anchor already works as-is); an absolute path is locale-prefixed via localePath;
// anything else (external URLs) passes through unchanged.
export function resolveNavHref(locale: Locale, homeHref: string, href: string): string {
  if (href.startsWith('#')) {
    return homeHref === '#main' ? href : `${homeHref}${href}`;
  }
  if (href.startsWith('/')) {
    return localePath(locale, href.slice(1));
  }
  return href;
}

// The locale-independent part of a URL path, without the deploy base or a leading slash:
// '/ru/enterprise/' → 'enterprise/', '/enterprise' → 'enterprise', '/de/' → ''. Used to
// point a page's hreflang alternates at the same page in every locale, not at the homes.
export function pathWithoutLocale(pathname: string): string {
  const base = basePrefix();
  const rest = (pathname.startsWith(base) ? pathname.slice(base.length) : pathname).replace(
    /^\//,
    '',
  );
  const [first = '', ...tail] = rest.split('/');
  return isLocale(first) && first !== DEFAULT_LOCALE ? tail.join('/') : rest;
}
