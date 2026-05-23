import type { Dict } from './types';

export const de: Dict = {
  langName: 'Deutsch',
  ogLocale: 'de_DE',
  a11ySkip: 'Zum Inhalt springen',

  meta: {
    title: 'Mentara — KI-Übungsinterviews für Software-Engineers',
    description:
      'Mentara führt realistische technische Übungsinterviews mit einem KI-Interviewer, der sich anpasst, nachhakt und dich in Echtzeit bewertet — damit sich das echte Gespräch wie eine Wiederholung anfühlt. iOS, Android und Web.',
    tagline: 'Probe den Ernstfall.',
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
    titleLead: 'Probe den Ernstfall.',
    titleAccent: 'Bevor er',
    titleTail: 'dich rannimmt.',
    lede: 'Mentara führt realistische technische Übungsinterviews mit einem KI-Interviewer: Er passt sich an, hakt nach und bewertet dich in Echtzeit — damit sich das echte Gespräch wie eine Wiederholung anfühlt.',
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
    heading: 'Das Gespräch, auf jedem Screen.',
    lede: 'Ein Screen, eine Aufgabe: dich im Gespräch halten. Die Frage, deine Antwort und das Live-Feedback, wie es ankommt — am Handy oder im Browser, ohne Ablenkung.',
    notes: [
      'Sprich oder tippe — der Interviewer reagiert so wie so',
      'Die Bewertung bewegt sich, während du sprichst, nicht danach',
      'Das Hinweis-Budget ist sichtbar — du teilst es dir ein wie im Ernstfall',
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
    heading: 'Ein Sparringspartner, keine Quiz-App.',
    items: [
      {
        index: '01',
        title: 'Ein Interviewer, der zurückgibt',
        body: 'Kein Chatbot, der Fragen vorliest. Die KI bleibt in der Rolle für deine Position, dein Level und deinen Interviewer-Typ — hakt nach, geht an die Edge Cases und wird härter, sobald du dich zurücklehnst.',
      },
      {
        index: '02',
        title: 'Bewertet, während du redest',
        body: 'Live-Signal zu technischer Tiefe, Kommunikation, Edge Cases und Problemlösung — alle paar Wortwechsel aktualisiert, nicht in einer Nachbesprechung vergraben.',
      },
      {
        index: '03',
        title: 'Strukturierte Übungs-Tracks',
        body: 'Algorithmen, System Design, Behavioral und Domain-Runden mit kalibriertem Schwierigkeitsgrad. Übe genau die Runde, vor der du Schiss hast — keine Wundertüte.',
      },
      {
        index: '04',
        title: 'Fortschritt, der sich summiert',
        body: 'XP, Streaks, Level und Erfolge machen aus zerstreutem Pauken eine Gewohnheit. Sei jeden Tag dabei — und sieh zu, wie die Kurve kippt.',
      },
    ],
  },

  audience: {
    eyebrow: 'Für wen das ist',
    heading: 'Gemacht für Engineers, die gerade mittendrin sind.',
    groups: [
      {
        tag: 'Berufseinsteiger',
        body: 'Aus „auf dem Papier kann ich das“ wird „ich führe das Gespräch“ — vor deinem ersten Onsite.',
      },
      {
        tag: 'Quereinsteiger',
        body: 'Schließ die Lücke beim Interview-Können schnell — Wiederholungen mit Feedback statt Raten.',
      },
      {
        tag: 'Senior-Level',
        body: 'Trainier System Design und den Staff-Level-Grill, bis das echte Panel langweilig wirkt.',
      },
    ],
    versus: {
      them: 'Allein LeetCode durchackern',
      themPoints: [
        'Niemand hakt bei einer schwammigen Antwort nach',
        'Kein Wort zu Kommunikation und Struktur',
        'Du benotest dich selbst — großzügig',
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
    heading: 'Drei Schritte zum souveränen Gespräch.',
    items: [
      {
        n: '1',
        title: 'Runde wählen',
        body: 'Track, Position und Schwierigkeit festlegen. Interviewer-Typ wählen — freundliches Screening oder Staff-Level-Grill.',
      },
      {
        n: '2',
        title: 'Live-Übung starten',
        body: 'Denk laut oder schreib Code. Der Interviewer passt sich in Echtzeit an und bewertet jeden Wortwechsel.',
      },
      {
        n: '3',
        title: 'Feedback holen',
        body: 'Eine bewertete Auswertung plus gezielter Lernplan — genau das, was du vor dem echten Gespräch noch fixen musst.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Preise',
    heading: 'Gratis starten. Ein Witz neben einem geplatzten Angebot.',
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
        price: '$19',
        cadence: '/ Monat',
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
        a: 'Genau darum geht’s. Der Interviewer bleibt in der Rolle, hakt nach, fordert schwache Antworten heraus und dreht den Schwierigkeitsgrad hoch — peinliche Pausen inklusive.',
      },
      {
        q: 'Muss ich laut coden?',
        a: 'Du entscheidest. Denk laut, schreib Code oder beides. Behavioral- und System-Design-Runden laufen übers Gespräch; in Algorithmus-Runden kannst du Code einreichen.',
      },
      {
        q: 'Welche Tracks gibt es?',
        a: 'Algorithmen, System Design, Behavioral und Domain-Runden — über Positionen und Senioritätsstufen hinweg, mit einem Schwierigkeitsgrad, der sich auf dich einstellt.',
      },
      {
        q: 'Wann und wo geht es los?',
        a: 'Mentara startet 2026 auf iOS, Android und im Web. Die Store-Einträge und die Web-App gehen zum Start live — diese Seite ist der Vorgeschmack.',
      },
      {
        q: 'Sind meine Session-Daten privat?',
        a: 'Deine Transkripte und Bewertungen gehören dir. Sie speisen dein Feedback und deinen Fortschritt und werden nicht verkauft. Eine vollständige Datenschutzerklärung kommt mit den Apps.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Früher Zugang',
    heading: 'Sei dabei, bevor’s alle sind.',
    sub: 'Trag dich in die Warteliste ein — erfahr als Erste:r vom Start, kein Spam.',
    label: 'E-Mail-Adresse',
    placeholder: 'du@firma.dev',
    cta: 'Eintragen',
    sending: 'Wird gesendet…',
    success: 'Passt, du bist auf der Liste. Wir melden uns zum Start.',
    error: 'Bei uns ist was schiefgelaufen. Versuch’s gleich nochmal.',
    offNote: 'Öffnet bald — setze PUBLIC_FORMSPREE_ENDPOINT, um das Formular zu aktivieren.',
  },

  cta: {
    eyebrow: 'Start 2026',
    titleLead: 'Das nächste Gespräch kommt.',
    titleAccent: 'Geh vorbereitet rein.',
    lede: 'Mentara kommt 2026 auf iOS, Android und ins Web. Hol dir die Start-Mail — und üb, bis das echte Gespräch langweilig ist.',
  },

  contentHub: {
    compare: {
      eyebrow: 'Vergleichen',
      title: 'Wähle den Übungsmodus, den du wirklich brauchst.',
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
    ariaGroup: 'Apps — bald verfügbar',
    comingSoon: 'Bald verfügbar:',
    ios: 'App Store',
    android: 'Google Play',
    web: 'Web',
  },

  footer: {
    blurb: 'KI-Übungsinterviews für Engineers — iOS, Android & Web.',
    explore: 'Entdecken',
    legal: 'Rechtliches',
    privacy: 'Datenschutz',
    terms: 'AGB',
    blog: 'Blog',
  },

  legal: {
    privacyTitle: 'Datenschutzerklärung',
    termsTitle: 'Nutzungsbedingungen',
    draftNotice:
      'Entwurf — keine Rechtsberatung. Vor dem Start mit Anwält:innen zu prüfen; die englische Fassung ist maßgeblich.',
    updated: 'Zuletzt aktualisiert',
    back: 'Zurück zur Startseite',
  },

  notFound: {
    eyebrow: 'Fehler',
    message:
      'Diese Route wurde nie kompiliert. Die gesuchte Seite gibt es nicht — oder noch nicht.',
    back: 'Zurück zur Startseite',
  },
};
