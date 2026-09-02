import { describe, expect, it } from 'vitest';
import { en } from './en';
import {
  DEFAULT_LOCALE,
  LOCALES,
  getDict,
  isLocale,
  localeHome,
  localeUrl,
  pickLocale,
  withBase,
} from './index';

describe('isLocale', () => {
  it('accepts the supported locales', () => {
    expect(isLocale('en')).toBe(true);
    expect(isLocale('de')).toBe(true);
    expect(isLocale('ru')).toBe(true);
  });

  it('rejects anything else', () => {
    expect(isLocale('fr')).toBe(false);
    expect(isLocale('EN')).toBe(false);
    expect(isLocale('')).toBe(false);
  });
});

describe('getDict', () => {
  it('returns the matching dictionary', () => {
    expect(getDict('en')).toBe(en);
    expect(getDict('de').langName).toBe('Deutsch');
    expect(getDict('ru').langName).toBe('Русский');
  });
});

describe('withBase', () => {
  it('joins onto the base with exactly one slash and no leading-slash dupes', () => {
    // Under Vitest BASE_URL is absent → base resolves to '' (root).
    expect(withBase('og.png')).toBe('/og.png');
    expect(withBase('/og.png')).toBe('/og.png');
    expect(withBase('')).toBe('/');
  });
});

describe('localeHome', () => {
  it('serves the default locale at the root, others under /<locale>/', () => {
    expect(localeHome(DEFAULT_LOCALE)).toBe('/');
    expect(localeHome('en')).toBe('/');
    expect(localeHome('de')).toBe('/de/');
    expect(localeHome('ru')).toBe('/ru/');
  });
});

describe('localeUrl', () => {
  it('is an absolute URL under the given origin', () => {
    const origin = new URL('https://mentara.ai');
    expect(localeUrl('en', origin)).toBe('https://mentara.ai/');
    expect(localeUrl('de', origin)).toBe('https://mentara.ai/de/');
    expect(localeUrl('ru', origin)).toBe('https://mentara.ai/ru/');
  });
});

describe('LOCALES', () => {
  it('every locale resolves to a dictionary and a home path', () => {
    for (const l of LOCALES) {
      expect(getDict(l)).toBeTruthy();
      expect(localeHome(l).startsWith('/')).toBe(true);
    }
  });
});

describe('pickLocale', () => {
  it('matches on the base subtag and honours list order', () => {
    expect(pickLocale(['ru-RU', 'en-US'])).toBe('ru');
    expect(pickLocale(['de-AT'])).toBe('de');
    expect(pickLocale(['es'])).toBe('es');
  });

  it('skips unsupported languages instead of failing the whole list', () => {
    expect(pickLocale(['fr-FR', 'pt-BR', 'de'])).toBe('de');
  });

  it('is case-insensitive', () => {
    expect(pickLocale(['RU'])).toBe('ru');
  });

  it('returns null when nothing matches, so callers keep the default locale', () => {
    expect(pickLocale(['fr', 'ja'])).toBe(null);
    expect(pickLocale([])).toBe(null);
    expect(pickLocale(undefined)).toBe(null);
  });
});
