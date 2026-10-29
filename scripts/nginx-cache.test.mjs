import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const config = readFileSync(new URL('../nginx.landing.conf', import.meta.url), 'utf8');

const locationBlock = (selector) => {
  const start = config.indexOf(`location ${selector} {`);
  expect(start, `nginx location ${selector}`).toBeGreaterThanOrEqual(0);

  const openingBrace = config.indexOf('{', start);
  let depth = 0;
  for (let index = openingBrace; index < config.length; index += 1) {
    if (config[index] === '{') depth += 1;
    if (config[index] === '}' && --depth === 0) return config.slice(start, index + 1);
  }

  throw new Error(`Unclosed nginx location ${selector}`);
};

describe('nginx cache headers', () => {
  it('caches content-hashed Astro assets for a year as immutable', () => {
    const block = locationBlock('~* ^/(?:.*/)?_astro/');
    expect(block).toContain('Cache-Control "public, max-age=31536000, immutable"');
  });

  it('revalidates stable-URL public assets after one hour', () => {
    const block = locationBlock('~* \\.(?:js|css|png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|eot)$');
    expect(block).toContain('Cache-Control "public, max-age=3600, must-revalidate"');
    expect(block).not.toContain('immutable');
  });

  it('requires browsers to revalidate prerendered pages', () => {
    const block = locationBlock('/');
    expect(block).toContain('expires -1;');
    expect(block).not.toContain('add_header');
  });

  it('keeps live previews uncached', () => {
    const block = locationBlock('^~ /preview/');
    expect(block).toContain('Cache-Control "no-store"');
  });
});
