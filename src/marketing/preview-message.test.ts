import { describe, expect, it } from 'vitest';
import { defaultLanding } from './content';
import { parsePreviewMessage, previewOrigin } from './preview-message';

describe('draft preview boundary', () => {
  const page = defaultLanding('en');
  const article = {
    locale: 'en',
    slug: 'guide',
    title: 'Guide',
    excerpt: 'Interview preparation',
    cover: null,
    author: 'Mentarika',
    tags: [],
    blocks: [{ type: 'paragraph', text: '<script>alert(1)</script>' }],
    seo: page.seo,
  };
  it('accepts complete drafts while retaining text as text', () => {
    expect(
      parsePreviewMessage({ type: 'mentarika-marketing-preview', kind: 'landing', content: page })
        ?.kind,
    ).toBe('landing');
    expect(
      parsePreviewMessage({ type: 'mentarika-marketing-preview', kind: 'article', content: article }),
    ).toMatchObject({ content: { blocks: article.blocks } });
  });
  it('rejects incomplete, mismatched, executable and unknown payloads', () => {
    for (const content of [
      null,
      { title: 'Incomplete' },
      { ...article, blocks: [{ type: 'html', html: '<script></script>' }] },
      { ...article, cover: { url: 'javascript:alert(1)', alt: 'Image' } },
    ]) {
      expect(
        parsePreviewMessage({ type: 'mentarika-marketing-preview', kind: 'article', content }),
      ).toBeNull();
    }
    expect(
      parsePreviewMessage({ type: 'another-message', kind: 'article', content: article }),
    ).toBeNull();
    expect(
      parsePreviewMessage({ type: 'mentarika-marketing-preview', kind: 'landing', content: article }),
    ).toBeNull();
  });
  it('rejects unsafe URL schemes in every preview URL field', () => {
    const unsafeUrls = [
      'javascript:alert(1)',
      'JaVaScRiPt:alert(1)',
      'data:text/html,<script>alert(1)</script>',
      'vbscript:msgbox(1)',
      '//attacker.example/image.svg',
      'https://trusted.example@attacker.example/path',
    ];
    const media = (url: string) => ({ url, alt: 'Preview image' });
    const invalidArticles = unsafeUrls.flatMap((url) => [
      { ...article, cover: media(url) },
      { ...article, blocks: [{ type: 'link', label: 'Open', url }] },
      { ...article, blocks: [{ type: 'image', url, alt: 'Preview image' }] },
      { ...article, seo: { ...article.seo, image: media(url) } },
    ]);
    const invalidLandings = unsafeUrls.flatMap((url) => [
      { ...page, hero: { ...page.hero, image: media(url) } },
      {
        ...page,
        features: [{ ...page.features[0], image: media(url) }, ...page.features.slice(1)],
      },
      { ...page, links: { ...page.links, webAppUrl: url } },
      { ...page, links: { ...page.links, social: [{ label: 'Social', url }] } },
      { ...page, seo: { ...page.seo, image: media(url) } },
    ]);

    for (const content of invalidArticles) {
      expect(
        parsePreviewMessage({ type: 'mentarika-marketing-preview', kind: 'article', content }),
      ).toBeNull();
    }
    for (const content of invalidLandings) {
      expect(
        parsePreviewMessage({ type: 'mentarika-marketing-preview', kind: 'landing', content }),
      ).toBeNull();
    }
  });
  it('restricts preview origins to HTTPS or local development and excludes credentials', () => {
    expect(previewOrigin('https://admin.example.test/path')).toBe('https://admin.example.test');
    expect(previewOrigin('http://localhost:4200')).toBe('http://localhost:4200');
    for (const url of [
      '*',
      'null',
      'http://admin.example.test',
      'https://user:pass@admin.example.test',
    ])
      expect(previewOrigin(url)).toBeNull();
  });
});
