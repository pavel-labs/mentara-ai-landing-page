import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';

const config = readFileSync(new URL('../nginx.landing.conf', import.meta.url), 'utf8');
const dockerfile = readFileSync(new URL('../Dockerfile.landing', import.meta.url), 'utf8');

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

describe('nginx security policy', () => {
  it('disables server version disclosure', () => {
    expect(config).toContain('server_tokens off;');
  });

  it('defines transport, MIME-sniffing, and referrer protections', () => {
    const headers = readFileSync(
      new URL('../nginx.security-headers.conf', import.meta.url),
      'utf8',
    );
    expect(headers).toContain('X-Content-Type-Options "nosniff" always');
    expect(headers).toContain('Referrer-Policy "strict-origin-when-cross-origin" always');
    expect(headers).toContain('Strict-Transport-Security "max-age=31536000; includeSubDomains" always');
  });

  it('ships the shared headers include in the nginx image', () => {
    expect(dockerfile).toContain(
      'COPY nginx.security-headers.conf /etc/nginx/security-headers.conf',
    );
    expect(config.split('include /etc/nginx/security-headers.conf;').length - 1).toBe(6);
  });

  it('retains the security headers in locations that define their own response headers', () => {
    for (const selector of [
      '^~ /marketing/defaults/',
      '^~ /preview/',
      '~* ^/(?:.*/)?_astro/',
      '~* \\.(?:js|css|png|jpg|jpeg|gif|svg|ico|webp|woff2?|ttf|eot)$',
    ]) {
      expect(locationBlock(selector)).toContain('include /etc/nginx/security-headers.conf;');
    }
  });

  it('limits wildcard CORS to public marketing defaults', () => {
    expect(locationBlock('^~ /marketing/defaults/')).toContain(
      'Access-Control-Allow-Origin "*" always',
    );
    expect(config.match(/Access-Control-Allow-Origin/g)).toHaveLength(1);
    expect(locationBlock('^~ /preview/')).not.toContain('Access-Control-Allow-Origin');
  });

  it('keeps preview pages unindexed and uncached', () => {
    const preview = locationBlock('^~ /preview/');
    expect(preview).toContain('X-Robots-Tag "noindex, nofollow" always');
    expect(preview).toContain('Cache-Control "no-store" always');
  });
});
