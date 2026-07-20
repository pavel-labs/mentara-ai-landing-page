// The full translatable surface. Every locale file implements this exact shape, so a
// missing/renamed key is a TypeScript error, not a silent untranslated string.

export interface NavLink {
  label: string;
  href: string;
}

export interface Feature {
  index: string;
  title: string;
  body: string;
}

export interface Step {
  n: string;
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
}

export interface Faq {
  q: string;
  a: string;
}

export interface Badge {
  small: string;
  strong: string;
}

export interface Dict {
  /** Native language name shown in the switcher. */
  langName: string;
  /** BCP-47 / OG locale, e.g. en_US. */
  ogLocale: string;
  /** Skip-to-content link label (keyboard a11y). */
  a11ySkip: string;

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
    titleTail: string;
    lede: string;
    availability: string;
  };

  trust: string[];

  product: {
    eyebrow: string;
    heading: string;
    lede: string;
    notes: string[];
    ui: {
      track: string;
      timer: string;
      interviewer: string;
      you: string;
      q: string;
      a: string;
      liveScore: string;
      hints: string;
    };
  };

  panel: {
    label: string;
    interviewer: string;
    you: string;
    aiLine: string;
    youLine: string;
    of: string;
    scores: string[];
  };

  features: { eyebrow: string; heading: string; items: Feature[] };

  audience: {
    eyebrow: string;
    heading: string;
    groups: { tag: string; body: string }[];
    versus: {
      them: string;
      themPoints: string[];
      us: string;
      usPoints: string[];
    };
  };

  steps: { eyebrow: string; heading: string; items: Step[] };

  pricing: {
    eyebrow: string;
    heading: string;
    flag: string;
    cta: string;
    foot: string;
    tiers: Tier[];
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
  };

  cta: {
    eyebrow: string;
    titleLead: string;
    titleAccent: string;
    lede: string;
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
