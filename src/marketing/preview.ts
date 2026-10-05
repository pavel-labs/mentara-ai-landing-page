import { parsePreviewMessage } from './preview-message';
import type { MarketingArticleBlock } from './types.generated';

const node = (tag: string, text = '', className = '') => {
  const element = document.createElement(tag);
  element.textContent = text;
  element.className = className;
  return element;
};
const publicUrl = (value: unknown): string | null => {
  try {
    if (typeof value !== 'string') return null;
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
};
const image = (media: { url: string; alt: string } | null | undefined) => {
  const url = publicUrl(media?.url);
  if (!url || !media || typeof media.alt !== 'string') return null;
  const img = document.createElement('img');
  img.src = url;
  img.alt = media.alt;
  img.loading = 'lazy';
  img.referrerPolicy = 'no-referrer';
  return img;
};
const blocks = (items: MarketingArticleBlock[]) => {
  const prose = node('div', '', 'cms-prose');
  for (const block of items.slice(0, 100)) {
    if (!block || typeof block !== 'object') continue;
    switch (block.type) {
      case 'paragraph':
      case 'heading':
      case 'quote':
        if (typeof block.text === 'string')
          prose.append(
            node(
              block.type === 'heading' ? 'h2' : block.type === 'quote' ? 'blockquote' : 'p',
              block.text,
            ),
          );
        break;
      case 'code':
        if (typeof block.code === 'string') {
          const pre = node('pre');
          pre.append(node('code', block.code));
          prose.append(pre);
        }
        break;
      case 'list':
        if (Array.isArray(block.items)) {
          const list = node(block.ordered ? 'ol' : 'ul');
          for (const item of block.items.slice(0, 30))
            if (typeof item === 'string') list.append(node('li', item));
          prose.append(list);
        }
        break;
      case 'link': {
        const url = publicUrl(block.url);
        if (url && typeof block.label === 'string') {
          const a = node('a', block.label) as HTMLAnchorElement;
          a.href = url;
          a.rel = 'noopener noreferrer';
          prose.append(a);
        }
        break;
      }
      case 'image': {
        const img = image(block);
        if (img) prose.append(img);
        break;
      }
    }
  }
  return prose;
};

/** Drafts stay in this frame. Text is never parsed as HTML and links require HTTPS. */
export const renderPreview = (target: HTMLElement | null, input: unknown): void => {
  const message = parsePreviewMessage(input);
  if (!target || !message) return;
  const fragment = document.createDocumentFragment();
  fragment.append(node('p', 'Draft preview · unpublished', 'mono'));
  if (message.kind === 'article') {
    const article = message.content;
    const container = node('article', '', 'cms-article');
    container.append(node('h1', article.title), node('p', article.excerpt, 'lede'));
    const cover = image(article.cover);
    if (cover) container.append(cover);
    container.append(blocks(article.blocks));
    fragment.append(container);
  } else if (message.kind === 'landing') {
    const page = message.content;
    const hero = node('section', '', 'cms-hero');
    const copy = node('div', '', 'cms-copy');
    copy.append(
      node('p', page.hero.eyebrow, 'eyebrow'),
      node('h1', page.hero.heading, 'display'),
      node('p', page.hero.description, 'lede'),
      node('span', page.hero.ctaLabel, 'btn'),
    );
    hero.append(copy);
    const img = image(page.hero.image);
    if (img) hero.append(img);
    fragment.append(hero);
    const features = node('section', '', 'cms-grid cms-section');
    for (const feature of page.features.filter((item) => item.enabled)) {
      const card = node('article', '', 'cms-feature');
      card.append(node('h3', feature.title), node('p', feature.description));
      const img = image(feature.image);
      if (img) card.append(img);
      features.append(card);
    }
    fragment.append(
      features,
      node('h2', page.pricing.heading),
      node('p', page.pricing.description),
    );
    const plans = node('div', '', 'cms-plans');
    for (const [label, description] of [
      ['Free', page.pricing.freeDescription],
      ['Pro', page.pricing.proDescription],
      ['Enterprise', page.pricing.enterpriseDescription],
    ]) {
      const card = node('article', '', 'cms-plan');
      card.append(node('h3', label), node('p', description));
      plans.append(card);
    }
    fragment.append(plans);
    for (const item of page.faq.slice(0, 30).filter((item) => item?.enabled)) {
      const detail = node('details', '', 'cms-faq');
      detail.append(node('summary', item.question), node('p', item.answer));
      fragment.append(detail);
    }
    fragment.append(node('footer', page.footerDescription, 'cms-section mono'));
  } else return;
  target.replaceChildren(fragment);
};
