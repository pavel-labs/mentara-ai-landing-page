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
    author: 'Mentara',
    tags: [],
    blocks: [{ type: 'paragraph', text: '<script>alert(1)</script>' }],
    seo: page.seo,
  };
  it('accepts complete drafts while retaining text as text', () => {
    expect(
      parsePreviewMessage({ type: 'mentara-marketing-preview', kind: 'landing', content: page })
        ?.kind,
    ).toBe('landing');
    expect(
      parsePreviewMessage({ type: 'mentara-marketing-preview', kind: 'article', content: article }),
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
        parsePreviewMessage({ type: 'mentara-marketing-preview', kind: 'article', content }),
      ).toBeNull();
    }
    expect(
      parsePreviewMessage({ type: 'another-message', kind: 'article', content: article }),
    ).toBeNull();
    expect(
      parsePreviewMessage({ type: 'mentara-marketing-preview', kind: 'landing', content: article }),
    ).toBeNull();
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
