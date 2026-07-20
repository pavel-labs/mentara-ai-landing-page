import type { Dict } from './types';

export const de: Dict = {
  langName: 'Deutsch',
  ogLocale: 'de_DE',
  a11ySkip: 'Zum Inhalt springen',

  meta: {
    title: 'Mentara – KI-Übungsinterviews für Software-Engineers',
    description:
      'Mentara führt realistische technische Übungsinterviews mit einem KI-Interviewer durch, der sich anpasst, nachhakt und dich in Echtzeit bewertet – damit du gut vorbereitet ins echte Interview gehst. iOS, Android und Web.',
    tagline: 'Übe echte Interviews.',
    launchLabel: 'Start 2026',
  },

  nav: [
    { label: 'Produkt', href: '#product' },
    { label: 'Funktionen', href: '#features' },
    { label: 'Blog', href: '/blog' },
    { label: 'Preise', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'KI-Übungsinterviews · für Engineers',
    titleLead: 'Übe technische Interviews.',
    titleAccent: 'Bevor',
    titleTail: 'das echte beginnt.',
    lede: 'Mentara führt realistische technische Übungsinterviews mit einem KI-Interviewer: Er passt sich an, hakt nach und bewertet dich in Echtzeit – damit du gut vorbereitet ins echte Interview gehst.',
    availability: 'Start 2026 · iOS, Android & Web',
  },

  trust: [
    'Runden auf FAANG-Niveau',
    '10+ Übungs-Tracks',
    'Bewertung in Echtzeit',
    'Adaptiver Schwierigkeitsgrad',
    'iOS · Android · Web',
  ],

  product: {
    eyebrow: 'Ein Blick in die App',
    heading: 'Das Interview, auf deinem Screen.',
    lede: 'Ein Screen, ein Zweck: deine Aufmerksamkeit beim Interview halten. Die Frage, deine Antwort und eine Live-Einschätzung, wie es läuft – am Handy oder im Browser, ohne Ablenkung.',
    notes: [
      'Sprich oder tippe – der Interviewer reagiert in beiden Fällen',
      'Die Bewertung aktualisiert sich, während du sprichst, nicht danach',
      'Dein Hinweis-Budget ist sichtbar – du teilst es dir ein wie im echten Interview',
    ],
    ui: {
      track: 'system-design · L5',
      timer: '14:22',
      interviewer: 'Interviewer',
      you: 'du',
      q: 'Dein Write-Path ist auf einem Key heiß. Wie verhinderst du, dass eine Node durchbrennt?',
      a: 'Partition-Key salzen, Reads über Replicas verteilen, ein Write-Behind davor…',
      liveScore: 'Live-Score',
      hints: 'Hinweise',
    },
  },

  panel: {
    label: 'session · system-design · L5',
    interviewer: 'Interviewer',
    you: 'du',
    aiLine: 'Erklär mir, wie du das shardest, damit ein heißer Key keine Node umlegt.',
    youLine: 'Ich salze den Partition-Key und verteile die Reads über Replicas…',
    of: '/10',
    scores: ['Technik', 'Kommunikation', 'Edge Cases', 'Problemlösung'],
  },

  features: {
    eyebrow: 'Was du bekommst',
    heading: 'Ein Interviewer, der nachfragt – keine Quiz-App.',
    items: [
      {
        index: '01',
        title: 'Ein Interviewer, der nachhakt',
        body: 'Kein Chatbot, der Fragen vorliest. Die KI bleibt in der Rolle für deine Position, dein Level und deinen Interviewer-Typ – hakt nach, geht an die Edge Cases und wird härter, sobald du dich zurücklehnst.',
      },
      {
        index: '02',
        title: 'Bewertet, während du redest',
        body: 'Live-Signal zu technischer Tiefe, Kommunikation, Edge Cases und Problemlösung – alle paar Wortwechsel aktualisiert, nicht in einer Nachbesprechung vergraben.',
      },
      {
        index: '03',
        title: 'Strukturierte Übungs-Tracks',
        body: 'Algorithmen, System Design, Behavioral und Domain-Runden mit kalibriertem Schwierigkeitsgrad. Übe genau die Runde, vor der du Schiss hast – keine Wundertüte.',
      },
      {
        index: '04',
        title: 'Fortschritt, der sich summiert',
        body: 'XP, Streaks, Level und Erfolge machen aus zerstreutem Pauken eine Gewohnheit. Sei jeden Tag dabei und sieh, wie dein Fortschritt wächst.',
      },
    ],
  },

  audience: {
    eyebrow: 'Für wen das ist',
    heading: 'Für Engineers, die sich gerade auf Interviews vorbereiten.',
    groups: [
      {
        tag: 'Berufseinsteiger',
        body: 'Aus „Ich kann’s in der Theorie“ wird „Ich schaff das Interview“ – noch vor deinem ersten Onsite.',
      },
      {
        tag: 'Quereinsteiger',
        body: 'Schließ die Interview-Erfahrungslücke schnell – Übung mit Feedback statt Rätselraten.',
      },
      {
        tag: 'Senior-Level',
        body: 'Übe System Design und harte Staff-Level-Fragen, bis das echte Panel Routine wird.',
      },
    ],
    versus: {
      them: 'Allein LeetCode durchackern',
      themPoints: [
        'Niemand hakt bei einer schwammigen Antwort nach',
        'Kein Wort zu Kommunikation und Struktur',
        'Du benotest dich selbst – großzügig',
      ],
      us: 'Mentara',
      usPoints: [
        'Ein Interviewer, der nachhakt und höher dreht',
        'Bewertet auf Kommunikation, nicht nur die Antwort',
        'Ein ehrliches Feedback plus: was als Nächstes dran ist',
      ],
    },
  },

  steps: {
    eyebrow: 'So läuft’s',
    heading: 'So funktioniert’s, in drei Schritten.',
    items: [
      {
        n: '1',
        title: 'Runde wählen',
        body: 'Track, Position und Schwierigkeit festlegen. Interviewer-Typ wählen – freundliches Screening oder Staff-Level-Grill.',
      },
      {
        n: '2',
        title: 'Live-Übung starten',
        body: 'Denk laut oder schreib Code. Der Interviewer passt sich in Echtzeit an und bewertet jeden Wortwechsel.',
      },
      {
        n: '3',
        title: 'Feedback holen',
        body: 'Eine bewertete Auswertung plus gezielter Lernplan – genau das, was du vor dem echten Gespräch noch fixen musst.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Preise',
    heading: 'Kostenlos starten, mit bezahlten Plänen für mehr Übung.',
    flag: 'Beliebt',
    cta: 'Zum Start verfügbar',
    foot: 'Preise sind Richtwerte und werden zum Start festgelegt.',
    tiers: [
      {
        tier: 'FREE',
        price: '$0',
        cadence: 'für immer',
        blurb: 'Echte Übungsinterviews ausprobieren.',
        features: [
          'Ein paar Sessions / Monat',
          'Basis-Tracks',
          'Live-Bewertung',
          'Basis-Fortschritt',
        ],
        featured: false,
      },
      {
        tier: 'PRO',
        price: 'TBD',
        cadence: 'zum Start',
        blurb: 'Für Engineers mitten in der Bewerbung.',
        features: [
          'Unbegrenzte Sessions',
          'Volles Feedback + Lernplan',
          'Alle Tracks & Interviewer-Typen',
          'Fortschritt mit Gamification',
        ],
        featured: true,
      },
      {
        tier: 'ENTERPRISE',
        price: 'Custom',
        cadence: 'sprich uns an',
        blurb: 'Bootcamps, Uni-Gruppen und Teams.',
        features: [
          'Plätze & Gruppen-Verwaltung',
          'Aggregierte Auswertung',
          'SSO & Admin-Kontrolle',
          'Priorisierter Support',
        ],
        featured: false,
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Klare Antworten.',
    items: [
      {
        q: 'Fühlt es sich wirklich wie ein echtes Interview an?',
        a: 'Genau darum geht’s. Der Interviewer bleibt in der Rolle, hakt nach, fordert schwache Antworten heraus und dreht den Schwierigkeitsgrad hoch – peinliche Pausen inklusive.',
      },
      {
        q: 'Muss ich laut coden?',
        a: 'Du entscheidest. Denk laut, schreib Code oder beides. Behavioral- und System-Design-Runden laufen übers Gespräch; in Algorithmus-Runden kannst du Code einreichen.',
      },
      {
        q: 'Welche Tracks gibt es?',
        a: 'Algorithmen, System Design, Behavioral und Domain-Runden – über Positionen und Senioritätsstufen hinweg, mit einem Schwierigkeitsgrad, der sich auf dich einstellt.',
      },
      {
        q: 'Wann und wo geht es los?',
        a: 'Mentara startet 2026 auf iOS, Android und im Web. Die Store-Einträge und die Web-App gehen zum Start live – diese Seite ist der Vorgeschmack.',
      },
      {
        q: 'Sind meine Session-Daten privat?',
        a: 'Deine Transkripte und Bewertungen gehören dir. Sie speisen dein Feedback und deinen Fortschritt und werden nicht verkauft. Eine vollständige Datenschutzerklärung kommt mit den Apps.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Früher Zugang',
    heading: 'Warteliste beitreten.',
    sub: 'Trag dich in die Warteliste ein – erfahr als Erste:r vom Start, kein Spam.',
    label: 'E-Mail-Adresse',
    placeholder: 'du@firma.dev',
    cta: 'Eintragen',
    sending: 'Wird gesendet…',
    success: 'Passt, du bist auf der Liste. Wir melden uns zum Start.',
    error: 'Bei uns ist was schiefgelaufen. Versuch’s gleich nochmal.',
    offNote: 'Öffnet bald – setze PUBLIC_FORMSPREE_ENDPOINT, um das Formular zu aktivieren.',
  },

  cta: {
    eyebrow: 'Start 2026',
    titleLead: 'Mentara startet 2026.',
    titleAccent: 'Fang früh an zu üben.',
    lede: 'Mentara kommt 2026 auf iOS, Android und ins Web. Melde dich für Neuigkeiten zum Start an und fang früh an zu üben.',
  },

  contentHub: {
    compare: {
      eyebrow: 'Vergleichen',
      title: 'Wähle die Vorbereitung, die du wirklich brauchst.',
      lede: 'Vergleichsseiten für Menschen, die zwischen Solo-Drills, Peer-Mocks, Sprachpraxis, KI-Tools und Coaching abwägen.',
      primary: 'Vergleichsseiten ansehen',
      secondary: 'Alle Ressourcen öffnen',
    },
    resources: {
      eyebrow: 'Ressourcen',
      title: 'Strukturierte Lesepfade für technische Interview-Vorbereitung.',
      lede: 'Gebündelte Einstiegspunkte für Menschen, die Tools vergleichen, System Design üben, Behavioral-Antworten schärfen oder sich auf Senior- und Staff-Runden vorbereiten.',
    },
    blog: {
      eyebrow: 'Ressourcen',
      title: 'Vergleiche, Übungsstrategie und Produktnotizen.',
      lede: 'Für Leser:innen mit klarem Suchintent gebaut, damit ernsthafte Kandidat:innen schneller zum Produkt finden als über eine generische Landingpage.',
      primary: 'Alle Artikel ansehen',
      pathsEyebrow: 'Lesepfade',
      pathsTitle: 'Themengruppen statt einem zufälligen Haufen Artikel.',
    },
  },

  badges: {
    ariaGroup: 'Apps – bald verfügbar',
    comingSoon: 'Bald verfügbar:',
    ios: 'App Store',
    android: 'Google Play',
    web: 'Web',
  },

  footer: {
    blurb: 'KI-Übungsinterviews für Engineers – iOS, Android & Web.',
    explore: 'Entdecken',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'AGB',
  },

  legal: {
    privacyTitle: 'Datenschutzerklärung',
    termsTitle: 'Nutzungsbedingungen',
    draftNotice:
      'Entwurf – keine Rechtsberatung. Vor dem Start mit Anwält:innen zu prüfen; die englische Fassung ist maßgeblich.',
    updated: 'Zuletzt aktualisiert',
    back: 'Zurück zur Startseite',
  },

  notFound: {
    eyebrow: 'Fehler',
    message: 'Diese Seite gibt es nicht – oder sie ist noch nicht veröffentlicht.',
    back: 'Zurück zur Startseite',
  },
};
