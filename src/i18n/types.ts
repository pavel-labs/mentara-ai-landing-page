// The full translatable surface. Every locale file implements this exact shape, so a
// missing/renamed key is a TypeScript error, not a silent untranslated string.
//
// Copy rule: only describe what the product does today. Anything planned goes in a
// clearly labelled "not yet" list, never in a feature claim.

export interface NavLink {
  label: string;
  href: string;
}

/** One step of a product flow ("Choose role → … → Report"). */
export interface FlowStep {
  title: string;
  body: string;
}

/** A titled point in a feature grid. */
export interface Point {
  title: string;
  body: string;
}

export interface Tier {
  tier: string;
  price: string;
  cadence: string;
  blurb: string;
  features: string[];
  featured: boolean;
  /** Button label. */
  cta: string;
  /** '#waitlist' for pre-launch plans, '/enterprise#contact' for the sales path. */
  href: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Dict {
  /** Native language name shown in the switcher. */
  langName: string;
  /** BCP-47 / OG locale, e.g. en_US. */
  ogLocale: string;
  /** Skip-to-content link label (keyboard a11y). */
  a11ySkip: string;
  /** Accessible name of the mobile navigation toggle. */
  a11yMenu: string;

  meta: {
    title: string;
    description: string;
    tagline: string;
    launchLabel: string;
  };

  nav: NavLink[];

  hero: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lede: string;
    availability: string;
    teamsLink: string;
  };

  /** Short factual chips under the hero. No stats, no claims about users. */
  proof: string[];

  why: {
    eyebrow: string;
    heading: string;
    lede: string;
    them: { label: string; points: string[] };
    us: { label: string; points: string[] };
  };

  interview: {
    eyebrow: string;
    heading: string;
    lede: string;
    steps: FlowStep[];
    honesty: string;
    mock: {
      label: string;
      /** warm-up → technical → deep-dive → wrap-up, in that order. */
      phases: string[];
      interviewer: string;
      you: string;
      q: string;
      a: string;
      followUp: string;
      hints: string;
      voice: string;
    };
  };

  assessment: {
    eyebrow: string;
    heading: string;
    lede: string;
    steps: FlowStep[];
    separate: string;
    mock: {
      label: string;
      timer: string;
      problem: string;
      run: string;
      submit: string;
      examples: string;
      passed: string;
      review: string;
      reviewLines: string[];
    };
  };

  report: {
    eyebrow: string;
    heading: string;
    lede: string;
    points: Point[];
    mock: {
      label: string;
      overall: string;
      categories: string[];
      competencyTitle: string;
      competencies: { name: string; band: string }[];
      evidenceTitle: string;
      evidence: string;
      nextTitle: string;
      next: string;
    };
  };

  progress: {
    eyebrow: string;
    heading: string;
    lede: string;
    points: Point[];
    mock: {
      label: string;
      challenges: { title: string; xp: string; done: boolean }[];
      streak: string;
      level: string;
    };
  };

  pricing: {
    eyebrow: string;
    heading: string;
    flag: string;
    foot: string;
    tiers: Tier[];
  };

  teamsBand: {
    eyebrow: string;
    heading: string;
    lede: string;
    points: Point[];
    cta: string;
  };

  faq: { eyebrow: string; heading: string; items: Faq[] };

  waitlist: {
    eyebrow: string;
    heading: string;
    sub: string;
    label: string;
    placeholder: string;
    cta: string;
    sending: string;
    success: string;
    error: string;
    offNote: string;
    /** Opt-in for the unstable early/dev build, and the warning under it. */
    devBuild: string;
    devBuildNote: string;
  };

  cta: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lede: string;
  };

  enterprise: {
    metaTitle: string;
    metaDescription: string;
    hero: {
      eyebrow: string;
      title: string;
      lede: string;
      primary: string;
      secondary: string;
    };
    useCases: {
      eyebrow: string;
      heading: string;
      items: { tag: string; title: string; body: string; points: string[] }[];
    };
    steps: { eyebrow: string; heading: string; items: FlowStep[] };
    privacy: {
      eyebrow: string;
      heading: string;
      lede: string;
      sees: { label: string; points: string[] };
      never: { label: string; points: string[] };
    };
    roles: {
      eyebrow: string;
      heading: string;
      items: { role: string; body: string }[];
    };
    notYet: { heading: string; lede: string; items: string[] };
    article: { eyebrow: string; title: string; cta: string };
    form: {
      eyebrow: string;
      heading: string;
      sub: string;
      name: string;
      email: string;
      company: string;
      teamSize: string;
      useCase: string;
      useCases: { upskilling: string; hiring: string; both: string };
      message: string;
      messageHint: string;
      submit: string;
      sending: string;
      success: string;
      invalid: string;
      rateLimited: string;
      error: string;
      offNote: string;
      privacyNote: string;
    };
  };

  contentHub: {
    compare: {
      eyebrow: string;
      title: string;
      lede: string;
      primary: string;
      secondary: string;
    };
    resources: {
      eyebrow: string;
      title: string;
      lede: string;
    };
    blog: {
      eyebrow: string;
      title: string;
      lede: string;
      primary: string;
      pathsEyebrow: string;
      pathsTitle: string;
    };
  };

  badges: {
    ariaGroup: string;
    comingSoon: string;
    ios: string;
    android: string;
    web: string;
  };

  footer: {
    blurb: string;
    explore: string;
    legal: string;
    privacy: string;
    terms: string;
  };

  legal: {
    privacyTitle: string;
    termsTitle: string;
    draftNotice: string;
    updated: string;
    back: string;
  };

  notFound: {
    eyebrow: string;
    message: string;
    back: string;
  };
}
