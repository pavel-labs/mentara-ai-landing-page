// Non-translatable constants only. All user-facing copy lives in `src/i18n/*`.

export const SITE = {
  name: 'Mentara',
  domain: 'https://mentara.ai',
} as const;

export const WAITLIST = {
  // Formspree form endpoint, e.g. https://formspree.io/f/abcdwxyz.
  // Empty → the waitlist renders a disabled placeholder.
  endpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? '',
} as const;
