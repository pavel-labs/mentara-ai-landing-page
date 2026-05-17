// Single source of truth for marketing copy + metadata. Edit here, not in components.

export const SITE = {
  name: 'Mentara',
  domain: 'https://mentara.ai',
  title: 'Mentara — AI mock technical interviews for software engineers',
  description:
    'Mentara runs realistic technical mock interviews with an AI interviewer that adapts, pushes back, and scores you in real time — so the real loop feels like a rerun.',
  tagline: 'Rehearse the room.',
  launchLabel: 'Launching 2026',
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'How it works', href: '#how' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const TRUST = [
  'FAANG-style loops',
  '10+ practice tracks',
  'Real-time scoring',
  'Adaptive difficulty',
  'iOS · Android',
] as const;

export const FEATURES = [
  {
    index: '01',
    title: 'An interviewer that pushes back',
    body: 'Not a chatbot reading questions. The AI interviewer stays in character for your role, level, and persona — follows up, probes edge cases, and gets harder when you cruise.',
  },
  {
    index: '02',
    title: 'Scored while you talk',
    body: 'Live signal on technical depth, communication, edge-case handling, and problem-solving — updated every few turns, not buried in a post-mortem.',
  },
  {
    index: '03',
    title: 'Structured practice tracks',
    body: 'Algorithms, System Design, Behavioral, and Domain rounds with calibrated difficulty. Train the round you actually fear, not a random grab bag.',
  },
  {
    index: '04',
    title: 'Progress that compounds',
    body: 'XP, streaks, levels, and achievements turn scattered cramming into a habit. Show up daily; watch the curve bend.',
  },
] as const;

export const STEPS = [
  {
    n: '1',
    title: 'Pick the round',
    body: 'Choose a track, role, and difficulty. Set the persona — friendly screen or a staff-level grilling.',
  },
  {
    n: '2',
    title: 'Run the live mock',
    body: 'Talk it through or write code. The interviewer adapts in real time and scores each exchange.',
  },
  {
    n: '3',
    title: 'Get the report',
    body: 'A scored breakdown plus a focused study path — exactly what to fix before the real loop.',
  },
] as const;

export const PRICING = [
  {
    tier: 'FREE',
    price: '$0',
    cadence: 'forever',
    blurb: 'Kick the tires on real mock interviews.',
    features: [
      'A few sessions / month',
      'Core practice tracks',
      'Live scoring',
      'Basic progress',
    ],
    featured: false,
  },
  {
    tier: 'PRO',
    price: '$19',
    cadence: '/ month',
    blurb: 'For the engineer in an active loop.',
    features: [
      'Unlimited sessions',
      'Full scored reports + study path',
      'All tracks & personas',
      'Gamified progression',
    ],
    featured: true,
  },
  {
    tier: 'ENTERPRISE',
    price: 'Custom',
    cadence: 'talk to us',
    blurb: 'Bootcamps, university cohorts, and teams.',
    features: [
      'Seats & cohort management',
      'Aggregate analytics',
      'SSO & admin controls',
      'Priority support',
    ],
    featured: false,
  },
] as const;

export const FAQ = [
  {
    q: 'Does it actually feel like a real interview?',
    a: 'That is the whole point. The interviewer holds a persona, asks follow-ups, challenges weak answers, and escalates difficulty — the awkward silences included.',
  },
  {
    q: 'Do I have to code out loud?',
    a: 'You choose. Talk through your reasoning, write code, or both. Behavioral and system-design rounds are conversation-first; algorithm rounds let you submit code.',
  },
  {
    q: 'Which tracks are covered?',
    a: 'Algorithms, System Design, Behavioral, and Domain rounds, across roles and seniority levels, with difficulty that calibrates to you.',
  },
  {
    q: 'When does it launch?',
    a: 'Mentara is launching in 2026 on iOS and Android. The store listings go live at launch — this page is the early look.',
  },
  {
    q: 'Is my session data private?',
    a: 'Your transcripts and scores are yours. They power your reports and progress and are not sold. A full privacy policy ships with the apps.',
  },
] as const;
