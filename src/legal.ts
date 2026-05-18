// DRAFT legal content — English is authoritative. Not legal advice; review with counsel
// before launch. Kept in English on purpose (auto-translated binding clauses are a
// liability — the page shell/notice is localized, these clauses are not).
//
// `effectiveDate` is the single place to bump the "last updated" stamp.

export const LEGAL_EFFECTIVE_DATE = '2026-05-18';
export const LEGAL_CONTACT = 'privacy@mentara.ai'; // TODO: confirm real address before launch

export interface LegalSection {
  heading: string;
  body: string[];
}

export const PRIVACY: LegalSection[] = [
  {
    heading: '1. Scope',
    body: [
      'This policy explains what Mentara ("we") collects when you use the Mentara app (iOS, Android, web) and this site, and how it is used. Mentara is an AI mock-interview practice product for software engineers.',
      'This is a pre-launch draft. The final policy shipped with the apps is authoritative.',
    ],
  },
  {
    heading: '2. What we collect',
    body: [
      'Account: your email address and authentication identifiers, via our auth provider (Clerk).',
      'Interview content: the transcripts, code, and answers you produce during a session, and the scores and reports generated from them.',
      'Subscriptions: purchase and entitlement status via the Apple App Store, Google Play, and RevenueCat. We never receive or store your card details.',
      'Device: a push notification token (if you enable notifications) so we can tell you when a report is ready.',
      'Analytics: privacy-friendly, cookieless aggregate usage via Cloudflare Web Analytics — no cross-site tracking, no advertising identifiers.',
      'Diagnostics: limited product diagnostics to find and fix bugs.',
    ],
  },
  {
    heading: '3. How we use it',
    body: [
      'To run mock interviews, generate live scoring and reports, track your progress, operate subscriptions, send the notifications you opted into, and keep the service secure and working.',
    ],
  },
  {
    heading: '4. AI processing',
    body: [
      'To produce the interviewer’s responses and your scoring, your session content is sent to third-party AI model providers acting as our processors. It is used to generate your results, not to train their public models.',
    ],
  },
  {
    heading: '5. Sharing',
    body: [
      'We share data only with processors that run the service: authentication (Clerk), subscriptions (Apple, Google, RevenueCat), AI model providers, analytics (Cloudflare), and infrastructure/hosting. We do not sell your data.',
    ],
  },
  {
    heading: '6. Retention & deletion',
    body: [
      'We keep your account and interview data while your account exists. You can delete your account in-app at any time (Profile → Delete account); this permanently removes your data and identity from our systems.',
    ],
  },
  {
    heading: '7. Your rights',
    body: [
      'Depending on where you live you may have rights to access, correct, export, or delete your data. Contact us to exercise them.',
    ],
  },
  {
    heading: '8. Children',
    body: ['Mentara is not directed to children and is intended for users 16+.'],
  },
  {
    heading: '9. Changes & contact',
    body: [
      `We will update this policy as the product evolves and note the date below. Questions: ${LEGAL_CONTACT}.`,
    ],
  },
];

export const TERMS: LegalSection[] = [
  {
    heading: '1. Acceptance',
    body: [
      'By using Mentara you agree to these terms. If you do not agree, do not use the service. This is a pre-launch draft.',
    ],
  },
  {
    heading: '2. The service',
    body: [
      'Mentara provides AI-driven mock technical interviews, scoring, and practice tracks. It is a practice tool. It is under active development and features may change or be unavailable.',
    ],
  },
  {
    heading: '3. Accounts',
    body: [
      'You are responsible for your account and for the accuracy of the information you provide. Keep your credentials secure.',
    ],
  },
  {
    heading: '4. Subscriptions & billing',
    body: [
      'Paid plans are sold and billed through the Apple App Store or Google Play under their terms. Subscriptions auto-renew until cancelled; manage or cancel them in your store account. Refunds follow the applicable store’s policy.',
    ],
  },
  {
    heading: '5. Acceptable use',
    body: [
      'Do not abuse, reverse-engineer, scrape, overload, or use the service unlawfully, and do not submit content you have no right to submit.',
    ],
  },
  {
    heading: '6. AI output',
    body: [
      'Interview questions, feedback, and scores are generated heuristically by AI for practice. They are not professional advice and do not guarantee any interview outcome.',
    ],
  },
  {
    heading: '7. Your content',
    body: [
      'You keep ownership of the content you submit. You grant us the license needed to operate the service for you (e.g. to generate and store your reports).',
    ],
  },
  {
    heading: '8. Disclaimers & liability',
    body: [
      'The service is provided "as is" without warranties. To the extent permitted by law, our liability is limited; we are not liable for indirect or consequential damages.',
    ],
  },
  {
    heading: '9. Termination',
    body: ['You may stop and delete your account anytime. We may suspend accounts that violate these terms.'],
  },
  {
    heading: '10. Governing law, changes & contact',
    body: [
      `Governing law and venue will be specified before launch (TODO with counsel). We may update these terms and will note the date below. Questions: ${LEGAL_CONTACT}.`,
    ],
  },
];

export const LEGAL_DOCS = { privacy: PRIVACY, terms: TERMS } as const;
export type LegalDoc = keyof typeof LEGAL_DOCS;
