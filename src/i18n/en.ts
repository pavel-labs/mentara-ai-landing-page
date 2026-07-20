import type { Dict } from './types';

export const en: Dict = {
  langName: 'English',
  ogLocale: 'en_US',
  a11ySkip: 'Skip to content',

  meta: {
    title: 'Mentara — AI mock technical interviews for software engineers',
    description:
      'Mentara runs realistic technical mock interviews with an AI interviewer that adapts, pushes back, and scores you in real time — so you walk into the real interview prepared. iOS, Android, and the web.',
    tagline: 'Practice real interviews.',
    launchLabel: 'Launching 2026',
  },

  nav: [
    { label: 'Product', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Blog', href: '/blog' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'AI mock interviews · built for engineers',
    titleLead: 'Practice technical interviews.',
    titleAccent: 'Before',
    titleTail: 'the real one happens.',
    lede: 'Mentara runs realistic technical mock interviews with an AI interviewer that adapts, pushes back, and scores you in real time — so you walk into the real interview prepared.',
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
    heading: 'The interview, on your screen.',
    lede: "One screen, one purpose: keep your attention on the interview. The question, your answer, and a live read on how you're doing — on your phone or in the browser, with nothing else competing for attention.",
    notes: [
      'Talk or type — the interviewer reacts either way',
      'The score updates while you speak, not after',
      'Your hint budget is visible, so you ration it like the real thing',
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
    heading: 'An interviewer that pushes back, not a quiz app.',
    items: [
      {
        index: '01',
        title: 'An interviewer that pushes back',
        body: 'Not a chatbot reading questions. The AI interviewer stays in character for your role, level, and persona — follows up, probes edge cases, and gets harder if you start coasting.',
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
        body: 'XP, streaks, levels, and achievements turn scattered cramming into a habit. Show up daily and watch your progress add up.',
      },
    ],
  },

  audience: {
    eyebrow: 'Who it’s for',
    heading: 'Built for engineers preparing right now.',
    groups: [
      {
        tag: 'New grads',
        body: 'Turn “I know it on paper” into “I can handle the interview” before your first onsite.',
      },
      {
        tag: 'Career switchers',
        body: 'Close the interview-experience gap fast — practice with feedback, not guesswork.',
      },
      {
        tag: 'Senior loops',
        body: 'Practice system design and tough staff-level questions until the real panel feels routine.',
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
    heading: 'How it works, in three steps.',
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
    heading: 'Free to start, with paid plans for more practice.',
    flag: 'Most popular',
    cta: 'Available at launch',
    foot: 'Prices are indicative and finalized at launch.',
    tiers: [
      {
        tier: 'FREE',
        price: '$0',
        cadence: 'forever',
        blurb: 'Try real mock interviews.',
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
        price: 'TBD',
        cadence: 'at launch',
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
    heading: 'Join the waitlist.',
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
    titleLead: 'Mentara launches in 2026.',
    titleAccent: 'Start practicing early.',
    lede: 'Mentara lands on iOS, Android, and the web in 2026. Sign up for launch updates and start practicing early.',
  },

  contentHub: {
    compare: {
      eyebrow: 'Compare',
      title: 'Pick the prep method you actually need.',
      lede: 'Comparison pages for candidates deciding between solo drills, peer mocks, voice practice, AI tools, and coaching.',
      primary: 'Explore compare pages',
      secondary: 'Browse all resources',
    },
    resources: {
      eyebrow: 'Resources',
      title: 'Structured reading paths for technical interview prep.',
      lede: 'Grouped entry points for candidates comparing tools, practicing system design, tightening behavioral answers, or preparing for senior and staff loops.',
    },
    blog: {
      eyebrow: 'Resources',
      title: 'Comparison pages, prep strategy, and product notes.',
      lede: 'Built to catch high-intent search traffic and give serious candidates a sharper way into the product than a generic landing page pitch.',
      primary: 'Browse all articles',
      pathsEyebrow: 'Reading paths',
      pathsTitle: 'Search clusters, not a random pile of posts.',
    },
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
    message: "This page doesn't exist — or hasn't been published yet.",
    back: 'Back to home',
  },
};
