// Non-translatable constants only. All user-facing copy lives in `src/i18n/*`.

export const SITE = {
  name: 'Mentara',
  // Fallback origin for the rare build without `site` configured. Kept in step with
  // astro.config.mjs's SITE_URL default: the live Firebase domain, since no custom
  // domain has been decided yet.
  domain: 'https://mentara-ai-landing.web.app',
} as const;

export const WAITLIST = {
  // Live Formspree form endpoint (a public form ID – safe in client HTML, not a secret).
  // Overridable per build via PUBLIC_FORMSPREE_ENDPOINT (e.g. a staging form).
  endpoint: import.meta.env.PUBLIC_FORMSPREE_ENDPOINT ?? 'https://formspree.io/f/meedqggp',
} as const;

export const API = {
  // Backend origin for the public Enterprise inquiry endpoint (POST /enterprise/inquiries).
  // Empty → the contact form renders disabled instead of posting to nowhere. The backend
  // must list this site's origin in ALLOWED_ORIGINS for the browser to be allowed to call it.
  baseUrl: (import.meta.env.PUBLIC_API_URL ?? '').replace(/\/$/, ''),
} as const;
