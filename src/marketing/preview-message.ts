import addFormats from 'ajv-formats';
import Ajv2020 from 'ajv/dist/2020';
import contract from './preview-contract.generated.json';
import type { IMarketingArticle, IMarketingLanding } from './types.generated';

const ajv = new Ajv2020({ strict: false });
addFormats(ajv);
const isArticle = ajv.compile<IMarketingArticle>(contract.article);
const isLanding = ajv.compile<IMarketingLanding>(contract.landing);

export const previewOrigin = (value: string): string | null => {
  try {
    const url = new URL(value);
    if (url.username || url.password) return null;
    return url.protocol === 'https:' ||
      (url.protocol === 'http:' && ['localhost', '127.0.0.1'].includes(url.hostname))
      ? url.origin
      : null;
  } catch {
    return null;
  }
};

export type PreviewMessage =
  { kind: 'article'; content: IMarketingArticle } | { kind: 'landing'; content: IMarketingLanding };

export const parsePreviewMessage = (message: unknown): PreviewMessage | null => {
  if (
    !message ||
    typeof message !== 'object' ||
    !('type' in message) ||
    message.type !== 'mentara-marketing-preview' ||
    !('kind' in message) ||
    !('content' in message)
  )
    return null;
  if (message.kind === 'article' && isArticle(message.content))
    return { kind: 'article', content: message.content };
  if (message.kind === 'landing' && isLanding(message.content))
    return { kind: 'landing', content: message.content };
  return null;
};
