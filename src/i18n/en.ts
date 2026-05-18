import type { Dict } from './types';

export const en: Dict = {
  langName: 'English',
  ogLocale: 'en_US',
  a11ySkip: 'Skip to content',

  meta: {
    title: 'Mentara — AI mock technical interviews for software engineers',
    description:
      'Mentara runs realistic technical mock interviews with an AI interviewer that adapts, pushes back, and scores you in real time — so the real loop feels like a rerun. iOS, Android, and the web.',
    tagline: 'Rehearse the room.',
    launchLabel: 'Launching 2026',
  },

  nav: [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'AI mock interviews · built for engineers',
    titleLead: 'Rehearse the room.',
    titleAccent: 'Before it',
    titleTail: 'rehearses you.',
    lede: 'Mentara runs realistic technical mock interviews with an AI interviewer that adapts, pushes back, and scores you in real time — so the real loop feels like a rerun.',
    availability: 'Launching 2026 · iOS, Android & Web',
  },

  trust: [
    'FAANG-style loops',
    '10+ practice tracks',
    'Real-time scoring',
    'Adaptive difficulty',
    'iOS · Android · Web',
  ],

  product: {
    eyebrow: 'A look at the app',
    heading: 'The room, on every screen.',
    lede: "One screen, one job: keep you in the interview. The question, your answer, and the live read on how it's landing — on your phone or in the browser, nothing else competing for attention.",
    notes: [
      'Talk or type — the interviewer reacts either way',
      'The score moves while you speak, not after',
      'Hint budget is visible, so you ration it like the real thing',
    ],
    ui: {
      track: 'system-design · L5',
      timer: '14:22',
      interviewer: 'interviewer',
      you: 'you',
      q: 'Your write path is hot on one key. How do you keep one node from melting?',
      a: 'Salt the partition key, fan reads across replicas, and add a write-behind…',
      liveScore: 'live score',
      hints: 'hints',
    },
  },

  panel: {
    label: 'session · system-design · L5',
    interviewer: 'interviewer',
    you: 'you',
    aiLine: "Walk me through how you'd shard this so a hot key doesn't melt one node.",
    youLine: "I'd add a salt to the partition key and fan reads across replicas…",
    of: '/10',
    scores: ['Technical', 'Communication', 'Edge cases', 'Problem-solving'],
  },

  features: {
    eyebrow: 'What you get',
    heading: 'A sparring partner, not a quiz app.',
    items: [
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
    ],
  },

  audience: {
    eyebrow: 'Who it’s for',
    heading: 'Built for the engineer in the loop.',
    groups: [
      {
        tag: 'New grads',
        body: 'Turn “I know it on paper” into “I can run the room” before your first onsite.',
      },
      {
        tag: 'Career switchers',
        body: 'Close the interview-fluency gap fast — reps with feedback, not guesswork.',
      },
      {
        tag: 'Senior loops',
        body: 'Drill system design and staff-level grilling until the real panel is boring.',
      },
    ],
    versus: {
      them: 'Grinding LeetCode alone',
      themPoints: [
        'No one pushes back on a hand-wavy answer',
        'Silent on communication & structure',
        'You grade yourself — generously',
      ],
      us: 'Mentara',
      usPoints: [
        'An interviewer that follows up and escalates',
        'Scored on communication, not just the answer',
        'An honest report + what to fix next',
      ],
    },
  },

  steps: {
    eyebrow: 'How it works',
    heading: 'Three steps to a sweat-free loop.',
    items: [
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
    ],
  },

  pricing: {
    eyebrow: 'Pricing',
    heading: 'Free to start. Cheap next to a dropped offer.',
    flag: 'Most popular',
    cta: 'Available at launch',
    foot: 'Prices are indicative and finalized at launch.',
    tiers: [
      {
        tier: 'FREE',
        price: '$0',
        cadence: 'forever',
        blurb: 'Kick the tires on real mock interviews.',
        features: ['A few sessions / month', 'Core practice tracks', 'Live scoring', 'Basic progress'],
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
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Straight answers.',
    items: [
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
        q: 'When and where does it launch?',
        a: 'Mentara launches in 2026 on iOS, Android, and the web. The store listings and web app go live at launch — this page is the early look.',
      },
      {
        q: 'Is my session data private?',
        a: 'Your transcripts and scores are yours. They power your reports and progress and are not sold. A full privacy policy ships with the apps.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Early access',
    heading: 'Get in before the loop does.',
    sub: 'Join the waitlist — be first to know the day Mentara ships, no spam.',
    label: 'Email address',
    placeholder: 'you@work.dev',
    cta: 'Join waitlist',
    sending: 'Sending…',
    success: "You're on the list. We'll email you at launch.",
    error: 'Something broke on our end. Try again in a moment.',
    offNote: 'Opens shortly — set PUBLIC_FORMSPREE_ENDPOINT to enable the form.',
  },

  cta: {
    eyebrow: 'Launching 2026',
    titleLead: 'The next loop is coming.',
    titleAccent: 'Walk in rehearsed.',
    lede: 'Mentara lands on iOS, Android, and the web in 2026. Get the launch email — then practice until the real thing is boring.',
  },

  badges: {
    ariaGroup: 'Apps — coming soon',
    comingSoon: 'Coming soon to',
    ios: 'App Store',
    android: 'Google Play',
    web: 'the Web',
  },

  footer: {
    blurb: 'AI mock interviews for engineers — iOS, Android & web.',
    explore: 'Explore',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    blog: 'Blog',
  },

  legal: {
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Service',
    draftNotice:
      'Draft — not legal advice. To be reviewed with counsel before launch; the English version is authoritative.',
    updated: 'Last updated',
    back: 'Back to home',
  },

  notFound: {
    eyebrow: 'Error',
    message: "This route never compiled. The page you're after doesn't exist — or hasn't shipped yet.",
    back: 'Back to home',
  },
};
