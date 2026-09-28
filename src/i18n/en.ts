import type { Dict } from './types';

export const en: Dict = {
  langName: 'English',
  ogLocale: 'en_US',
  a11ySkip: 'Skip to content',
  a11yMenu: 'Menu',

  meta: {
    title: 'Mentara – AI technical interview practice and coding assessments for developers',
    description:
      'Practice structured technical interviews with an AI interviewer that follows up on your answers, take coding assessments graded by hidden tests, and get a report that shows your weak areas with evidence. Free and Pro plans, plus Enterprise for teams.',
    tagline: 'Practice the interview, not just the questions.',
    launchLabel: 'Launching 2026',
  },

  nav: [
    { label: 'Interviews', href: '#interview' },
    { label: 'Assessments', href: '#assessments' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Teams', href: '/enterprise' },
    { label: 'Blog', href: '/blog' },
  ],

  hero: {
    eyebrow: 'Interview practice for developers and teams',
    titleLead: 'Practice the technical interview,',
    titleAccent: 'not just the questions.',
    lede: 'Mentara runs a structured interview for your role and stack, follows up on what you actually said, grades your code against hidden tests, and gives you a report that points to your weak areas – so the next session targets them.',
    availability: 'Launching 2026 · Web, iOS & Android',
    teamsLink: 'For engineering teams',
  },

  proof: [
    'Frontend · Backend · Algorithms',
    '19 technologies',
    'Junior to Senior',
    '15, 30 or 60 minutes',
    'Type or speak',
    '5 interview languages',
  ],

  why: {
    eyebrow: 'Why practice here',
    heading: 'Reading answers is not the same as giving them.',
    lede: 'Most prep ends with a list of questions you have read. An interview asks you to explain, gets specific about the weak part, and moves on whether you are ready or not. That is the part Mentara lets you practice.',
    them: {
      label: 'Question lists and a general chatbot',
      points: [
        'You pick the questions, so you pick the easy ones',
        'Nobody asks "why?" after a vague answer',
        'Code is never run, so "looks right" counts as right',
        'You grade yourself, and every session starts from zero',
      ],
    },
    us: {
      label: 'A Mentara session',
      points: [
        'A timed interview for your role, level and stack, with a fixed structure',
        'Follow-up questions built on your own answer',
        'Coding assessments graded by tests you cannot see',
        'A report with evidence, and weak areas that shape your next session',
      ],
    },
  },

  interview: {
    eyebrow: 'AI interviews',
    heading: 'A structured interview that reacts to your answers.',
    lede: 'Each interview moves through warm-up, technical questions, a deep dive and a wrap-up. The interviewer asks follow-ups on what you said, narrows the question when you stall, and pushes further when an answer is strong.',
    steps: [
      {
        title: 'Choose your role',
        body: 'Frontend, backend or algorithms, at junior, middle or senior level.',
      },
      {
        title: 'Pick your stack',
        body: 'Up to six technologies – React, TypeScript, Node.js, system design and more.',
      },
      {
        title: 'Set the interview',
        body: '15, 30 or 60 minutes, one of three interviewers, strict or supportive feedback, in one of five languages.',
      },
      {
        title: 'Answer out loud or in text',
        body: 'Type, or speak and have your answer transcribed. Up to three hints if you get stuck.',
      },
      {
        title: 'Get your report',
        body: 'Scores, evidence and a learning path the moment the interview ends.',
      },
    ],
    honesty:
      'It is an AI interviewer, not a person. It is built to run a consistent, structured technical interview – and your last sessions shape what it asks next.',
    mock: {
      label: 'Interview · Frontend · Senior · 30 min',
      phases: ['Warm-up', 'Technical', 'Deep dive', 'Wrap-up'],
      interviewer: 'Interviewer',
      you: 'You',
      q: 'Your list re-renders on every keystroke in the search box. How would you find out why?',
      a: 'I’d open the React Profiler, record a keystroke, and check which components rendered and why…',
      followUp:
        'Say the profiler shows the whole list re-rendering. What are the two most likely causes?',
      hints: 'Hints 2 of 3 left',
      voice: 'Tap to answer',
    },
  },

  assessment: {
    eyebrow: 'Coding assessments',
    heading: 'Write the code. Hidden tests grade it.',
    lede: 'Coding has its own place in Mentara: a separate, timed assessment with an editor, runnable examples and a real submission. The interview stays a conversation; the assessment checks the code.',
    steps: [
      {
        title: 'Read the problem',
        body: 'One to five problems, with examples. A timer, when the assessment has one, is enforced by the server.',
      },
      {
        title: 'Write your solution',
        body: 'JavaScript, TypeScript, Python, Java, Go or C++. You can switch language mid-attempt.',
      },
      {
        title: 'Run the examples',
        body: 'Run the visible examples or your own input as often as you like before you commit.',
      },
      {
        title: 'Submit',
        body: 'Your code is graded against hidden tests that never leave the server.',
      },
      {
        title: 'Read the review',
        body: 'An AI review of code quality, efficiency and readability, per problem, with strengths and weak areas.',
      },
    ],
    separate:
      'Why separate? Talking through a design and writing working code are different skills. Mixing them in one chat hides which one needs the work.',
    mock: {
      label: 'Coding assessment · 2 problems',
      timer: '38:12 left',
      problem: 'Merge overlapping intervals',
      run: 'Run examples',
      submit: 'Submit',
      examples: 'Examples',
      passed: '3 / 3 passed',
      review: 'Review',
      reviewLines: [
        'Correct on edge cases: empty input, touching intervals',
        'O(n log n) – the sort dominates',
        'Consider naming the accumulator',
      ],
    },
  },

  report: {
    eyebrow: 'Feedback',
    heading: 'Know exactly what to fix next.',
    lede: 'The interview ends with a report, not a pat on the back. Every score is tied to something you actually said, and the gaps become your next practice plan.',
    points: [
      {
        title: 'Scores you can trace',
        body: 'Overall, plus technical depth, communication, edge cases and problem solving. Scores come from evidence in your answers, not a number the model made up.',
      },
      {
        title: 'Per-competency results',
        body: 'Each skill the interview covered is marked strong, solid, developing or needs work – or "not assessed" when there was not enough evidence.',
      },
      {
        title: 'Strengths and weak areas',
        body: 'What went well, what to improve, and quotes from your own answers that show why.',
      },
      {
        title: 'A learning path',
        body: 'Prioritised topics with a time estimate. Your next interview picks up your weak areas.',
      },
    ],
    mock: {
      label: 'Your report',
      overall: 'Overall',
      categories: ['Technical', 'Communication', 'Edge cases', 'Problem solving'],
      competencyTitle: 'By competency',
      competencies: [
        { name: 'React rendering', band: 'Strong' },
        { name: 'State management', band: 'Solid' },
        { name: 'Web performance', band: 'Developing' },
      ],
      evidenceTitle: 'Evidence from your answers',
      evidence:
        '“I’d memoize the row component” – correct fix, but the cause (a new callback each render) was never named.',
      nextTitle: 'Next focus',
      next: 'Web performance · ~3 h',
    },
  },

  progress: {
    eyebrow: 'Keep going',
    heading: 'A reason to come back tomorrow.',
    lede: 'Interview skill fades without practice. Daily challenges give you a small, concrete task each day, based on your own history.',
    points: [
      {
        title: 'Daily challenges',
        body: 'Up to three a day: finish without hints, beat your last score, revisit a weak area, practice a technology.',
      },
      {
        title: 'Streaks and levels',
        body: 'XP moves you from Intern to CTO. A streak freeze covers the odd missed day.',
      },
      {
        title: 'Achievements',
        body: 'Tracks for consistency, improvement, roles and technologies – earned by practicing, not by opening the app.',
      },
      {
        title: 'Progress over time',
        body: 'Your score trend, your recurring weak areas and every past report in one place.',
      },
    ],
    mock: {
      label: 'Today’s challenge',
      challenges: [
        { title: 'Complete one interview', xp: '+30 XP', done: true },
        { title: 'Finish without hints', xp: '+50 XP', done: false },
        { title: 'Revisit Web performance', xp: '+80 XP', done: false },
      ],
      streak: '12-day streak',
      level: 'Level · Mid',
    },
  },

  pricing: {
    eyebrow: 'Pricing',
    heading: 'Start free. Upgrade when you are in an active job search.',
    flag: 'For active job searches',
    foot: 'Pro pricing is set at launch and shown in the app store and on the web before you pay.',
    tiers: [
      {
        tier: 'Free',
        price: '$0',
        cadence: 'forever',
        blurb: 'Everything you need to practice regularly.',
        features: [
          '5 text interviews every 30 days',
          '3 voice interviews every 30 days',
          'Full report after every interview',
          'All roles, levels and technologies',
          'Coding assessments',
          'Daily challenges and achievements',
        ],
        featured: false,
        cta: 'Join the waitlist',
        href: '#waitlist',
      },
      {
        tier: 'Pro',
        price: 'TBA',
        cadence: 'set at launch',
        blurb: 'For the weeks when you are interviewing for real.',
        features: [
          'Everything in Free',
          'Unlimited text interviews',
          'Unlimited voice interviews',
          'Realistic mode: shows where you got stuck and what the session was worth without outside help',
        ],
        featured: true,
        cta: 'Join the waitlist',
        href: '#waitlist',
      },
      {
        tier: 'Enterprise',
        price: 'Custom',
        cadence: 'per seat',
        blurb: 'For engineering teams and hiring.',
        features: [
          'Pro for every seat',
          'Company interviews on your stack',
          'Candidate assignments with consent',
          'Privacy-first team report',
          '14-day trial with 5 seats',
        ],
        featured: false,
        cta: 'Talk to us',
        href: '/enterprise#contact',
      },
    ],
  },

  teamsBand: {
    eyebrow: 'Mentara for teams',
    heading: 'Consistent interview practice and screening for engineering teams.',
    lede: 'Give engineers structured practice on your stack, and give candidates the same interview every time – without turning practice into surveillance.',
    points: [
      {
        title: 'Company interviews',
        body: 'Fix the role, level, stack, length and seed questions once. Everyone gets the same interview.',
      },
      {
        title: 'Candidate assignments',
        body: 'Send a single-use link. The candidate consents first; you see the report, not the transcript.',
      },
      {
        title: 'Team report',
        body: 'Activity per person, skill averages only for groups of five or more. No one reads an employee’s transcript.',
      },
    ],
    cta: 'See Mentara for teams',
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Straight answers.',
    items: [
      {
        q: 'How is this different from asking ChatGPT for interview questions?',
        a: 'A chatbot answers what you ask. Mentara runs the interview: it has a fixed structure and time limit, follows up on your weak answers, scores you from evidence against a rubric, runs your code against hidden tests, and remembers your last sessions.',
      },
      {
        q: 'Is the AI interviewer like a real person?',
        a: 'No, and we do not pretend it is. It is built to run a consistent technical interview – follow-ups, a clock and a structure. It is practice for the real thing, not a replacement for it.',
      },
      {
        q: 'Can I write code?',
        a: 'Yes, in a coding assessment: an editor, runnable examples, a timer when the assessment has one, and hidden tests on submit. The interview itself is a spoken or typed conversation.',
      },
      {
        q: 'Can I answer out loud?',
        a: 'Yes. Tap the mic, speak, and your answer is transcribed. The Free plan includes 3 voice interviews every 30 days; Pro has no limit.',
      },
      {
        q: 'What does my employer see if my company uses Mentara?',
        a: 'Only your join date, how many interviews you did in the last 30 days, and when you were last active. Team skill averages appear only when at least five people contributed. No role in an organization can read your transcripts or your individual reports.',
      },
      {
        q: 'When can I use it?',
        a: 'Mentara launches in 2026 on the web, iOS and Android. Join the waitlist and we will email you when it opens.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Early access',
    heading: 'Join the waitlist.',
    sub: 'Join the waitlist – be first to know the day Mentara ships, no spam.',
    label: 'Email address',
    placeholder: 'you@work.dev',
    cta: 'Join waitlist',
    sending: 'Sending…',
    success: "You're on the list. We'll email you at launch.",
    error: 'Something broke on our end. Try again in a moment.',
    offNote: 'Opens shortly – set PUBLIC_FORMSPREE_ENDPOINT to enable the form.',
    devBuild: 'Also send me the early dev build',
    devBuildNote:
      'Unstable, incomplete, and updated without notice - expect rough edges and reset data.',
  },

  cta: {
    eyebrow: 'Launching 2026',
    titleLead: 'Your next interview is coming.',
    titleAccent: 'Practice before it does.',
    lede: 'Mentara opens on the web, iOS and Android in 2026. Join the waitlist and we will email you the day it does.',
  },

  enterprise: {
    metaTitle: 'Mentara for teams – technical interview practice and candidate screening',
    metaDescription:
      'Structured AI interview practice and coding assessments for engineering teams: company interviews on your stack, candidate assignments with consent, and a team report that never exposes individual transcripts.',
    hero: {
      eyebrow: 'Mentara for teams',
      title: 'Structured technical interviews for your whole team.',
      lede: 'Help engineers stay sharp and screen candidates the same way every time. Mentara gives your organization company-specific interviews, coding assessments and reporting – with clear limits on what managers can see.',
      primary: 'Talk to us',
      secondary: 'Read: how teams use AI interview practice',
    },
    useCases: {
      eyebrow: 'Two ways teams use it',
      heading: 'Grow your engineers. Screen candidates consistently.',
      items: [
        {
          tag: 'Upskilling',
          title: 'Structured practice for your engineers',
          body: 'Interview skill fades between job changes and promotions. Seats give each engineer Pro-level practice on the stack your team actually uses.',
          points: [
            'Pro-level practice for every seat',
            'Company interviews on your technologies and level',
            'A team report built from aggregates, not transcripts',
          ],
        },
        {
          tag: 'Hiring',
          title: 'The same first interview for every candidate',
          body: 'A company interview fixes the role, level, stack, length, language and your seed questions, so candidates are compared on the same ground.',
          points: [
            'Single-use links that open only for the invited email',
            'The candidate sees a clear disclosure and consents first',
            'You get the report and test results – not the transcript or the code',
          ],
        },
      ],
    },
    steps: {
      eyebrow: 'How it works',
      heading: 'From first call to first interview.',
      items: [
        {
          title: 'Talk to us',
          body: 'Tell us about your team and whether you are hiring, upskilling or both.',
        },
        {
          title: 'Start a trial',
          body: 'We activate your organization: 14 days, 5 seats, 10 candidate assignments.',
        },
        {
          title: 'Invite your team',
          body: 'Share an invite link. Owners and admins manage seats and roles.',
        },
        {
          title: 'Build company interviews',
          body: 'Pick role, level and stack, add up to 30 seed questions with the concepts you expect.',
        },
        {
          title: 'Practice and assign',
          body: 'Engineers practice; recruiters send candidate assignments and read the results.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privacy by design',
      heading: 'Practice only works if people are not being watched.',
      lede: 'Engineers practice honestly when mistakes stay private. So the limits are built into the product, not left to policy.',
      sees: {
        label: 'What the organization sees',
        points: [
          'Each member’s join date, interviews in the last 30 days and last activity',
          'Team skill averages – only when at least five people contributed',
          'For candidates who consented: the report and assessment results',
        ],
      },
      never: {
        label: 'What no role can see',
        points: [
          'An employee’s interview transcript',
          'An employee’s individual report or scores',
          'A candidate’s transcript or submitted code',
        ],
      },
    },
    roles: {
      eyebrow: 'Roles',
      heading: 'Four roles, each with a clear job.',
      items: [
        { role: 'Owner', body: 'Everything, including managing other owners.' },
        {
          role: 'Admin',
          body: 'Members and invites, company interviews, candidate assignments and the team report.',
        },
        {
          role: 'Recruiter',
          body: 'Uses company interviews to send and manage candidate assignments.',
        },
        { role: 'Member', body: 'Practices, including your company interviews.' },
      ],
    },
    notYet: {
      heading: 'Not available yet',
      lede: 'We would rather tell you now than in a procurement call.',
      items: [
        'SSO and SCIM provisioning',
        'ATS integrations',
        'Custom branding',
        'Company-authored coding problems',
        'Self-serve checkout – contracts are set up with us',
      ],
    },
    article: {
      eyebrow: 'Further reading',
      title: 'AI interview practice for engineering teams: what it can and can’t do',
      cta: 'Read the article',
    },
    form: {
      eyebrow: 'Talk to us',
      heading: 'Tell us about your team.',
      sub: 'We reply by email, usually within two business days.',
      name: 'Your name',
      email: 'Work email',
      company: 'Company',
      teamSize: 'Team size',
      useCase: 'What do you need?',
      useCases: {
        upskilling: 'Practice for our engineers',
        hiring: 'Screening candidates',
        both: 'Both',
      },
      message: 'Anything else?',
      messageHint: 'Stack, timeline, number of candidates – optional.',
      submit: 'Send',
      sending: 'Sending…',
      success: 'Thanks – we have your message and will reply by email.',
      invalid: 'Please check the fields above and try again.',
      rateLimited: 'Too many requests from this network. Try again in an hour.',
      error: 'Something went wrong on our end. Try again in a moment.',
      offNote: 'The contact form opens shortly.',
      privacyNote: 'We use these details only to reply to you.',
    },
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
      lede: 'Grouped entry points for candidates comparing tools, practicing system design, tightening behavioral answers, preparing for senior and staff loops – and for teams.',
    },
    blog: {
      eyebrow: 'Resources',
      title: 'Interview prep strategy, comparisons and product notes.',
      lede: 'Practical articles on preparing for technical interviews – and how teams can run interview practice at scale.',
      primary: 'Browse all articles',
      pathsEyebrow: 'Reading paths',
      pathsTitle: 'Grouped by what you are preparing for.',
    },
  },

  badges: {
    ariaGroup: 'Apps – coming soon',
    comingSoon: 'Coming soon to',
    ios: 'App Store',
    android: 'Google Play',
    web: 'the Web',
  },

  footer: {
    blurb: 'Technical interview practice and coding assessments for developers and teams.',
    explore: 'Explore',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
  },

  legal: {
    privacyTitle: 'Privacy Policy',
    termsTitle: 'Terms of Service',
    draftNotice:
      'Draft – not legal advice. To be reviewed with counsel before launch; the English version is authoritative.',
    updated: 'Last updated',
    back: 'Back to home',
  },

  notFound: {
    eyebrow: 'Error',
    message: "This page doesn't exist – or hasn't been published yet.",
    back: 'Back to home',
  },
};
