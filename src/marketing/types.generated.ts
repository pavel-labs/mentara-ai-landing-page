// Generated from @mentara/shared by scripts/export-marketing-contract.mjs.
interface IBillingCatalog {
  displayPrices: { currency: 'USD'; proMonthly: string; proAnnual: string; interviewPack: string };
}

export const MARKETING_EVENTS = [
  'web_app_cta',
  'app_store_cta',
  'google_play_cta',
  'pricing_cta',
  'enterprise_cta',
  'article_open',
] as const;
export type MarketingEvent = (typeof MARKETING_EVENTS)[number];
export interface IMarketingEventInput {
  event: MarketingEvent;
  locale: MarketingLocale;
}
export interface IMarketingMetrics {
  days: 7;
  counts: Record<MarketingEvent, number>;
}

export type MarketingLocale = 'en' | 'de' | 'es' | 'ru' | 'pl';
export interface IMarketingMedia {
  url: string;
  alt: string;
}
export interface IMarketingLink {
  label: string;
  url: string;
}
export interface IMarketingLinks {
  webAppUrl: string | null;
  appStoreUrl: string | null;
  googlePlayUrl: string | null;
  social: IMarketingLink[];
}
export interface IMarketingSeo {
  title: string;
  description: string;
  image: IMarketingMedia | null;
}
export interface IMarketingFeature {
  id: 'mock-interviews' | 'quick-practice' | 'coding-assessments' | 'progress' | 'enterprise';
  title: string;
  description: string;
  image: IMarketingMedia | null;
  enabled: boolean;
}
export interface IMarketingFaq {
  question: string;
  answer: string;
  enabled: boolean;
}
export interface IMarketingLanding {
  locale: MarketingLocale;
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaLabel: string;
    image: IMarketingMedia | null;
  };
  features: IMarketingFeature[];
  pricing: {
    heading: string;
    description: string;
    freeDescription: string;
    proDescription: string;
    enterpriseDescription: string;
  };
  faq: IMarketingFaq[];
  links: IMarketingLinks;
  seo: IMarketingSeo;
  footerDescription: string;
}

// A small, closed block vocabulary: content cannot introduce HTML or executable code.
export type MarketingArticleBlock =
  | { type: 'paragraph' | 'heading' | 'quote'; text: string }
  | { type: 'list'; items: string[]; ordered: boolean }
  | { type: 'code'; code: string; language: string }
  | { type: 'link'; label: string; url: string }
  | { type: 'image'; url: string; alt: string };
export interface IMarketingArticle {
  locale: MarketingLocale;
  slug: string;
  title: string;
  excerpt: string;
  cover: IMarketingMedia | null;
  author: string;
  tags: string[];
  blocks: MarketingArticleBlock[];
  seo: IMarketingSeo;
}
export interface IMarketingDocument<TContent> {
  version: number;
  draft: TContent | null;
  published: TContent | null;
  archived: boolean;
  createdAt: string | null;
  updatedAt: string | null;
  publishedAt: string | null;
  createdBy: string | null;
  updatedBy: string | null;
  publishedBy: string | null;
}
export interface IMarketingPublishedArticle extends IMarketingArticle {
  publishedAt: string;
}
export interface IMarketingSnapshot {
  schemaVersion: 1;
  landing: IMarketingLanding[];
  articles: IMarketingPublishedArticle[];
  pricing: IBillingCatalog;
}
export interface IMarketingPublicContent {
  locale: MarketingLocale;
  landing: IMarketingLanding | null;
  articles: Omit<IMarketingPublishedArticle, 'blocks'>[];
  pricing: IBillingCatalog;
}
export type MarketingRefreshStatus = 'queued' | 'manual' | 'failed';
export interface IMarketingPublishResult<TContent> {
  document: IMarketingDocument<TContent>;
  refresh: MarketingRefreshStatus;
}
