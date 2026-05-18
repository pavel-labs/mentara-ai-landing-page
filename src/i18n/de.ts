import type { Dict } from './types';

export const de: Dict = {
  langName: 'Deutsch',
  ogLocale: 'de_DE',
  a11ySkip: 'Zum Inhalt springen',

  meta: {
    title: 'Mentara — KI-Mock-Interviews für Software-Engineers',
    description:
      'Mentara führt realistische technische Mock-Interviews mit einem KI-Interviewer, der sich anpasst, nachhakt und dich in Echtzeit bewertet — damit sich das echte Interview wie eine Wiederholung anfühlt. iOS, Android und Web.',
    tagline: 'Probe den Ernstfall.',
    launchLabel: 'Start 2026',
  },

  nav: [
    { label: 'Produkt', href: '#product' },
    { label: 'Features', href: '#features' },
    { label: 'Preise', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'KI-Mock-Interviews · für Engineers gebaut',
    titleLead: 'Probe den Ernstfall.',
    titleAccent: 'Bevor er',
    titleTail: 'dich probt.',
    lede: 'Mentara führt realistische technische Mock-Interviews mit einem KI-Interviewer, der sich anpasst, nachhakt und dich in Echtzeit bewertet — damit sich das echte Interview wie eine Wiederholung anfühlt.',
    availability: 'Start 2026 · iOS, Android & Web',
  },

  trust: [
    'Loops auf FAANG-Niveau',
    '10+ Übungs-Tracks',
    'Bewertung in Echtzeit',
    'Adaptiver Schwierigkeitsgrad',
    'iOS · Android · Web',
  ],

  product: {
    eyebrow: 'Ein Blick in die App',
    heading: 'Der Ernstfall, auf jedem Screen.',
    lede: 'Ein Screen, eine Aufgabe: dich im Interview halten. Die Frage, deine Antwort und das Live-Signal, wie es ankommt — am Handy oder im Browser, ohne Ablenkung.',
    notes: [
      'Sprechen oder tippen — der Interviewer reagiert so oder so',
      'Der Score bewegt sich, während du sprichst, nicht danach',
      'Das Hinweis-Budget ist sichtbar — du rationierst es wie im Ernstfall',
    ],
    ui: {
      track: 'system-design · L5',
      timer: '14:22',
      interviewer: 'Interviewer',
      you: 'du',
      q: 'Dein Write-Path ist auf einem Key heiß. Wie verhinderst du, dass ein Node durchbrennt?',
      a: 'Partition-Key salten, Reads über Replicas verteilen und ein Write-Behind ergänzen…',
      liveScore: 'Live-Score',
      hints: 'Hinweise',
    },
  },

  panel: {
    label: 'session · system-design · L5',
    interviewer: 'Interviewer',
    you: 'du',
    aiLine: 'Erklär mir, wie du das shardest, damit ein heißer Key nicht einen Node grillt.',
    youLine: 'Ich salte den Partition-Key und verteile Reads über Replicas…',
    of: '/10',
    scores: ['Technik', 'Kommunikation', 'Edge Cases', 'Problemlösung'],
  },

  features: {
    eyebrow: 'Was du bekommst',
    heading: 'Ein Sparringspartner, keine Quiz-App.',
    items: [
      {
        index: '01',
        title: 'Ein Interviewer, der kontert',
        body: 'Kein Chatbot, der Fragen vorliest. Der KI-Interviewer bleibt in der Rolle für deine Position, dein Level und deine Persona — hakt nach, prüft Edge Cases und wird härter, wenn du es dir bequem machst.',
      },
      {
        index: '02',
        title: 'Bewertet, während du sprichst',
        body: 'Live-Signal zu technischer Tiefe, Kommunikation, Edge Cases und Problemlösung — aktualisiert im Minutentakt, nicht vergraben in einer Nachbesprechung.',
      },
      {
        index: '03',
        title: 'Strukturierte Übungs-Tracks',
        body: 'Algorithmen, System Design, Behavioral und Domain-Runden mit kalibriertem Schwierigkeitsgrad. Trainier die Runde, vor der du dich wirklich fürchtest — keine Wundertüte.',
      },
      {
        index: '04',
        title: 'Fortschritt, der sich aufbaut',
        body: 'XP, Streaks, Level und Achievements machen aus verstreutem Pauken eine Gewohnheit. Tauch täglich auf; sieh die Kurve kippen.',
      },
    ],
  },

  audience: {
    eyebrow: 'Für wen es ist',
    heading: 'Gebaut für den Engineer im Loop.',
    groups: [
      {
        tag: 'Absolvent:innen',
        body: 'Aus „auf dem Papier kann ich das“ wird „ich führe den Raum“ — vor deinem ersten Onsite.',
      },
      {
        tag: 'Quereinsteiger:innen',
        body: 'Schließ die Interview-Lücke schnell — Wiederholungen mit Feedback statt Raten.',
      },
      {
        tag: 'Senior-Loops',
        body: 'Drill System Design und Staff-Level-Grillen, bis das echte Panel langweilig ist.',
      },
    ],
    versus: {
      them: 'Allein LeetCode grinden',
      themPoints: [
        'Niemand kontert eine schwammige Antwort',
        'Kein Wort zu Kommunikation & Struktur',
        'Du benotest dich selbst — großzügig',
      ],
      us: 'Mentara',
      usPoints: [
        'Ein Interviewer, der nachhakt und eskaliert',
        'Bewertet auf Kommunikation, nicht nur die Antwort',
        'Ein ehrlicher Report + was als Nächstes zu fixen ist',
      ],
    },
  },

  steps: {
    eyebrow: 'So funktioniert’s',
    heading: 'Drei Schritte zum schweißfreien Loop.',
    items: [
      {
        n: '1',
        title: 'Wähl die Runde',
        body: 'Track, Position und Schwierigkeit wählen. Persona setzen — freundliches Screening oder Staff-Level-Grillen.',
      },
      {
        n: '2',
        title: 'Live-Mock starten',
        body: 'Sprich es durch oder schreib Code. Der Interviewer passt sich in Echtzeit an und bewertet jeden Austausch.',
      },
      {
        n: '3',
        title: 'Report holen',
        body: 'Eine bewertete Aufschlüsselung plus fokussierter Lernpfad — genau das, was vor dem echten Loop zu fixen ist.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Preise',
    heading: 'Kostenlos starten. Günstig neben einem geplatzten Angebot.',
    flag: 'Beliebt',
    cta: 'Zum Launch verfügbar',
    foot: 'Preise sind indikativ und werden zum Launch finalisiert.',
    tiers: [
      {
        tier: 'FREE',
        price: '0 $',
        cadence: 'für immer',
        blurb: 'Echte Mock-Interviews ausprobieren.',
        features: [
          'Ein paar Sessions / Monat',
          'Kern-Übungs-Tracks',
          'Live-Bewertung',
          'Basis-Fortschritt',
        ],
        featured: false,
      },
      {
        tier: 'PRO',
        price: '19 $',
        cadence: '/ Monat',
        blurb: 'Für den Engineer im aktiven Loop.',
        features: [
          'Unbegrenzte Sessions',
          'Volle Reports + Lernpfad',
          'Alle Tracks & Personas',
          'Gamifizierter Fortschritt',
        ],
        featured: true,
      },
      {
        tier: 'ENTERPRISE',
        price: 'Custom',
        cadence: 'sprich mit uns',
        blurb: 'Bootcamps, Uni-Kohorten und Teams.',
        features: [
          'Seats & Kohorten-Verwaltung',
          'Aggregierte Analytik',
          'SSO & Admin-Kontrollen',
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
        a: 'Genau das ist der Punkt. Der Interviewer hält eine Persona, hakt nach, fordert schwache Antworten heraus und eskaliert den Schwierigkeitsgrad — peinliche Pausen inklusive.',
      },
      {
        q: 'Muss ich laut coden?',
        a: 'Du entscheidest. Erklär deine Überlegung, schreib Code oder beides. Behavioral- und System-Design-Runden sind dialogorientiert; Algorithmus-Runden lassen dich Code einreichen.',
      },
      {
        q: 'Welche Tracks gibt es?',
        a: 'Algorithmen, System Design, Behavioral und Domain-Runden, über Positionen und Senioritätsstufen hinweg, mit einem Schwierigkeitsgrad, der sich an dich kalibriert.',
      },
      {
        q: 'Wann und wo startet es?',
        a: 'Mentara startet 2026 auf iOS, Android und im Web. Store-Listings und Web-App gehen zum Launch live — diese Seite ist der frühe Blick.',
      },
      {
        q: 'Sind meine Session-Daten privat?',
        a: 'Deine Transkripte und Scores gehören dir. Sie speisen deine Reports und deinen Fortschritt und werden nicht verkauft. Eine vollständige Datenschutzerklärung kommt mit den Apps.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Early Access',
    heading: 'Sei drin, bevor der Loop es ist.',
    sub: 'Trag dich in die Warteliste ein — erfahr als Erste:r vom Launch, kein Spam.',
    label: 'E-Mail-Adresse',
    placeholder: 'du@firma.dev',
    cta: 'Auf die Warteliste',
    sending: 'Senden…',
    success: 'Du bist auf der Liste. Wir mailen dich zum Launch.',
    error: 'Bei uns ist etwas schiefgelaufen. Versuch es gleich nochmal.',
    offNote: 'Öffnet bald — setze PUBLIC_FORMSPREE_ENDPOINT, um das Formular zu aktivieren.',
  },

  cta: {
    eyebrow: 'Start 2026',
    titleLead: 'Der nächste Loop kommt.',
    titleAccent: 'Geh vorbereitet rein.',
    lede: 'Mentara kommt 2026 auf iOS, Android und ins Web. Hol dir die Launch-Mail — und üb, bis der Ernstfall langweilig ist.',
  },

  badges: {
    ariaGroup: 'Apps — bald verfügbar',
    comingSoon: 'Bald verfügbar:',
    ios: 'App Store',
    android: 'Google Play',
    web: 'Web',
  },

  footer: {
    blurb: 'KI-Mock-Interviews für Engineers — iOS, Android & Web.',
    explore: 'Entdecken',
    legal: 'Rechtliches',
    legalMuted: 'AGB & Datenschutz kommen mit den Apps',
  },

  notFound: {
    eyebrow: 'Fehler',
    message: 'Diese Route wurde nie kompiliert. Die gesuchte Seite existiert nicht — oder ist noch nicht live.',
    back: 'Zurück zur Startseite',
  },
};
