import { describe, expect, it } from 'vitest';
import { en } from './en';
import { DEFAULT_LOCALE, LOCALES, getDict } from './index';

// Every non-default locale, derived from LOCALES — a new locale is covered automatically.
const TRANSLATED = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

// Walks the reference (English) structure and records every place a candidate locale
// diverges in shape: missing/extra keys, wrong type, or a different array length. This is
// the safety net that makes a missing or renamed translation a failing test, not a silent
// untranslated string shipped to users.
function shapeDiffs(ref: unknown, cand: unknown, path = ''): string[] {
  const here = path || '<root>';

  if (Array.isArray(ref)) {
    if (!Array.isArray(cand)) return [`${here}: expected array, got ${typeof cand}`];
    if (ref.length !== cand.length) {
      return [`${here}: array length ${String(cand.length)} ≠ ${String(ref.length)}`];
    }
    return ref.flatMap((item, i) => shapeDiffs(item, cand[i], `${here}[${String(i)}]`));
  }

  if (ref !== null && typeof ref === 'object') {
    if (cand === null || typeof cand !== 'object') {
      return [`${here}: expected object, got ${cand === null ? 'null' : typeof cand}`];
    }
    const refKeys = Object.keys(ref).sort();
    const candKeys = Object.keys(cand).sort();
    const diffs: string[] = [];
    for (const k of refKeys) {
      if (!candKeys.includes(k)) diffs.push(`${here}.${k}: missing`);
    }
    for (const k of candKeys) {
      if (!refKeys.includes(k)) diffs.push(`${here}.${k}: unexpected extra key`);
    }
    for (const k of refKeys) {
      if (candKeys.includes(k)) {
        diffs.push(
          ...shapeDiffs(
            (ref as Record<string, unknown>)[k],
            (cand as Record<string, unknown>)[k],
            `${here}.${k}`,
          ),
        );
      }
    }
    return diffs;
  }

  // Leaf: types must match (all leaves are string/boolean here).
  return typeof ref === typeof cand
    ? []
    : [`${here}: expected ${typeof ref}, got ${typeof cand}`];
}

describe('translation parity (vs English reference)', () => {
  it.each(TRANSLATED)('%s matches the English dictionary shape exactly', (locale) => {
    expect(shapeDiffs(en, getDict(locale))).toEqual([]);
  });

  it.each(TRANSLATED)('%s does not leave key headline fields in English', (locale) => {
    const d = getDict(locale);
    expect(d.meta.tagline).not.toBe(en.meta.tagline);
    expect(d.hero.lede).not.toBe(en.hero.lede);
    expect(d.faq.items[0]?.q).not.toBe(en.faq.items[0]?.q);
  });
});
