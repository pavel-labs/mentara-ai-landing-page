import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { getCollection } from 'astro:content';
import { beforeAll, describe, expect, it } from 'vitest';
import { defaultLanding } from './marketing/content';

type AstroComponent = Parameters<
  Awaited<ReturnType<typeof AstroContainer.create>>['renderToString']
>[0];

const components = import.meta.glob<{
  default: AstroComponent;
}>(
  ['./components/**/*.astro', './features/**/*.astro', './layouts/**/*.astro', './pages/**/*.astro'],
  { eager: true },
);

const landing = defaultLanding('en');
const article = {
  locale: 'en',
  slug: 'component-test',
  title: 'Component test',
  excerpt: 'A sample article for server-render tests.',
  cover: null,
  author: 'Mentarika',
  tags: ['test'],
  blocks: [{ type: 'paragraph' as const, text: 'Component test content.' }],
  publishedAt: '2026-01-15T00:00:00.000Z',
  seo: landing.seo,
};
const localizedArticle = { ...article, locale: 'de' as const };
const props = {
  locale: 'en',
  homeHref: '#main',
  eyebrow: 'Component test',
  heading: 'Component test heading',
  title: 'Component test title',
  description: 'Component test description',
  class: 'component-test',
  preview: 'component-test',
  content: landing,
  article,
  articles: [],
  blocks: article.blocks,
  items: [{ q: 'Component test question?', a: 'Component test answer.' }],
  steps: [{ title: 'Component test step', body: 'Component test details.' }],
  faqItems: [],
  doc: 'privacy',
  kind: 'mock-interviews',
  platform: 'web',
  compact: true,
};

let container: Awaited<ReturnType<typeof AstroContainer.create>>;
let blogPost: Awaited<ReturnType<typeof getCollection<'blog'>>>[number];

beforeAll(async () => {
  container = await AstroContainer.create();
  const [firstPost] = await getCollection('blog', ({ data }) => !data.draft);
  if (!firstPost) throw new Error('Astro component tests require a published blog post.');
  blogPost = firstPost;
});

describe('Astro component server rendering', () => {
  it.each(Object.entries(components))('renders %s without runtime errors', async (path, module) => {
    const componentProps = {
      ...props,
      ...(path.endsWith('/BlogPostView.astro') || path.includes('/blog/[slug].astro')
        ? { post: blogPost }
        : {}),
      ...(path.endsWith('/Legal.astro') ? { doc: 'privacy' } : {}),
      ...(path.endsWith('/pages/[locale]/articles/index.astro') ? { locale: 'de' } : {}),
      ...(path.endsWith('/pages/[locale]/articles/[slug].astro')
        ? { article: localizedArticle }
        : {}),
      ...(path.endsWith('/MarketingArticle.astro') || path.endsWith('/pages/articles/[slug].astro')
        ? { article: { ...article, publishedAt: '2026-01-15T00:00:00.000Z' } }
        : {}),
    };
    const html = await container.renderToString(module.default, { props: componentProps });
    expect(html.trim().length).toBeGreaterThan(0);
  });
});
