export interface BlogClusterDefinition {
  id: 'compare' | 'system-design' | 'behavioral' | 'senior';
  title: string;
  lede: string;
  cta: {
    eyebrow: string;
    title: string;
    body: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  slugs: string[];
}

export const BLOG_CLUSTERS: BlogClusterDefinition[] = [
  {
    id: 'compare',
    title: 'Comparison Pages',
    lede: 'For high-intent readers comparing prep methods, formats, and tool categories.',
    cta: {
      eyebrow: 'Where Mentara fits',
      title: 'Move from comparing prep tools to practicing with pressure.',
      body: 'If the gap is not more content but more realistic interview reps, Mentara is being built for that exact jump.',
      primaryLabel: 'Join the waitlist',
      primaryHref: '/#waitlist',
      secondaryLabel: 'Browse compare hub',
      secondaryHref: '/compare',
    },
    slugs: [
      'ai-mock-interview-vs-leetcode',
      'peer-mock-interviews-vs-ai',
      'human-coach-vs-ai-interview-practice',
      'text-vs-voice-mock-interviews',
      'best-ai-tools-for-technical-interview-prep',
    ],
  },
  {
    id: 'system-design',
    title: 'System Design and Technical Rounds',
    lede: 'For candidates who need sharper technical loops than random practice question volume.',
    cta: {
      eyebrow: 'Practice the room',
      title: 'Turn solo prep into a defended technical conversation.',
      body: 'Mentara is aimed at candidates who need follow-up pressure, not just another pile of prompts or solved examples.',
      primaryLabel: 'Get launch access',
      primaryHref: '/#waitlist',
      secondaryLabel: 'See all resources',
      secondaryHref: '/resources',
    },
    slugs: [
      'how-to-practice-system-design-alone',
      'system-design-vs-coding-interviews',
      'inside-an-ai-interview-simulator',
    ],
  },
  {
    id: 'behavioral',
    title: 'Behavioral and Positioning',
    lede: 'For candidates who want stronger communication signal, not just stronger solutions.',
    cta: {
      eyebrow: 'Sharper delivery',
      title: 'Practice answers until they sound clear, not rehearsed.',
      body: 'The right prep loop should pressure-test structure, ownership, and follow-up handling before the real interview does.',
      primaryLabel: 'Join the waitlist',
      primaryHref: '/#waitlist',
      secondaryLabel: 'Browse resources',
      secondaryHref: '/resources',
    },
    slugs: [
      'behavioral-interview-prep-for-software-engineers',
      'how-to-answer-tell-me-about-yourself-engineering',
    ],
  },
  {
    id: 'senior',
    title: 'Senior and Staff Preparation',
    lede: 'For engineers preparing beyond the mid-level loop, where judgment and leverage dominate.',
    cta: {
      eyebrow: 'Built for higher-stakes loops',
      title: 'Prepare for judgment-heavy interviews, not just harder coding screens.',
      body: 'Mentara is designed to make trade-offs, communication, and pressure visible earlier, which matters much more in senior and staff loops.',
      primaryLabel: 'Get launch access',
      primaryHref: '/#waitlist',
      secondaryLabel: 'Read more strategy',
      secondaryHref: '/resources',
    },
    slugs: ['senior-software-engineer-interview-prep', 'staff-engineer-interview-preparation'],
  },
];

export function findClusterBySlug(slug: string): BlogClusterDefinition | null {
  return BLOG_CLUSTERS.find((cluster) => cluster.slugs.includes(slug)) ?? null;
}
