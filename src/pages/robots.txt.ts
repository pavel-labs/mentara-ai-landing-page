import type { APIContext } from 'astro';
import { SITE } from '../consts';
import { withBase } from '../i18n';

// Generated, not static – the Sitemap URL tracks whatever domain/base the build targets
// (the Firebase *.web.app preview domain, or mentara.ai once DNS is cut over) with zero
// manual edits.
export function GET(context: APIContext) {
  const origin = context.site ?? new URL(SITE.domain);
  const sitemap = new URL(withBase('sitemap-index.xml'), origin).href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
