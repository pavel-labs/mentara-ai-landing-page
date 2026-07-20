// Non-translatable constants only. All user-facing copy lives in `src/i18n/*`.

export const SITE = {
  name: 'Mentara',
  domain: 'https://mentara.ai',
} as const;

export const WAITLIST = {
  // Live Formspree form endpoint (a public form ID – safe in client HTML, not a secret).
  // Overridable per build via PUBLIC_FORMSPREE_ENDPOINT (e.g. a staging form).
  endpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/meedqggp',
} as const;
