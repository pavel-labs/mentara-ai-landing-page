import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';
import { SITE } from '../consts';
import { withBase } from '../i18n';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', (p) => !p.data.draft);
  return rss({
    title: `${SITE.name} — Blog`,
    description: 'Launch milestones and product updates from Mentara.',
    site: context.site ?? SITE.domain,
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((p) => ({
        title: p.data.title,
        description: p.data.summary,
        pubDate: p.data.date,
        link: withBase(`blog/${p.id}`),
      })),
  });
}
