import type { Dict } from './types';

export const de: Dict = {
  langName: 'Deutsch',
  ogLocale: 'de_DE',
  a11ySkip: 'Zum Inhalt springen',
  a11yMenu: 'Menü',

  meta: {
    title: 'Mentara – technische Interviews mit KI üben und Coding-Assessments für Entwickler',
    description:
      'Übe strukturierte technische Interviews mit einem KI-Interviewer, der bei deinen Antworten nachhakt, löse Coding-Assessments, die mit versteckten Tests bewertet werden, und erhalte einen Bericht, der deine Schwächen mit Belegen zeigt. Free- und Pro-Plan, dazu Enterprise für Teams.',
    tagline: 'Übe das Interview, nicht nur die Fragen.',
    launchLabel: 'Start 2026',
  },

  nav: [
    { label: 'Interviews', href: '#interview' },
    { label: 'Assessments', href: '#assessments' },
    { label: 'Preise', href: '#pricing' },
    { label: 'Teams', href: '/enterprise' },
    { label: 'Blog', href: '/blog' },
  ],

  hero: {
    eyebrow: 'Interview-Training für Entwickler und Teams',
    titleLead: 'Übe das technische Interview,',
    titleAccent: 'nicht nur die Fragen.',
    lede: 'Mentara führt ein strukturiertes Interview für deine Rolle und deinen Stack, hakt bei dem nach, was du wirklich gesagt hast, prüft deinen Code mit versteckten Tests und gibt dir einen Bericht, der auf deine Schwächen zeigt – damit die nächste Session genau dort ansetzt.',
    availability: 'Start 2026 · Web, iOS & Android',
    teamsLink: 'Für Engineering-Teams',
  },

  proof: [
    'Frontend · Backend · Algorithmen',
    '19 Technologien',
    'Junior bis Senior',
    '15, 30 oder 60 Minuten',
    'Tippen oder sprechen',
    '5 Interview-Sprachen',
  ],

  why: {
    eyebrow: 'Warum hier üben',
    heading: 'Antworten lesen ist nicht dasselbe wie Antworten geben.',
    lede: 'Die meiste Vorbereitung endet mit einer Liste gelesener Fragen. Ein Interview verlangt, dass du erklärst, bohrt beim schwachen Punkt nach und geht weiter, ob du bereit bist oder nicht. Genau das kannst du mit Mentara üben.',
    them: {
      label: 'Fragenlisten und ein allgemeiner Chatbot',
      points: [
        'Du wählst die Fragen aus – also die leichten',
        'Niemand fragt „warum?“ nach einer vagen Antwort',
        'Code wird nie ausgeführt, „sieht richtig aus“ zählt als richtig',
        'Du bewertest dich selbst, und jede Session beginnt bei null',
      ],
    },
    us: {
      label: 'Eine Mentara-Session',
      points: [
        'Ein getimtes Interview für Rolle, Level und Stack, mit fester Struktur',
        'Nachfragen, die auf deiner eigenen Antwort aufbauen',
        'Coding-Assessments, bewertet mit Tests, die du nicht siehst',
        'Ein Bericht mit Belegen – deine Schwächen prägen die nächste Session',
      ],
    },
  },

  interview: {
    eyebrow: 'KI-Interviews',
    heading: 'Ein strukturiertes Interview, das auf deine Antworten reagiert.',
    lede: 'Jedes Interview läuft durch Warm-up, technische Fragen, einen Deep Dive und einen Abschluss. Der Interviewer hakt bei deinen Aussagen nach, macht die Frage enger, wenn du hängst, und geht tiefer, wenn eine Antwort stark ist.',
    steps: [
      {
        title: 'Wähle deine Rolle',
        body: 'Frontend, Backend oder Algorithmen, auf Junior-, Middle- oder Senior-Level.',
      },
      {
        title: 'Wähle deinen Stack',
        body: 'Bis zu sechs Technologien – React, TypeScript, Node.js, System Design und mehr.',
      },
      {
        title: 'Stell das Interview ein',
        body: '15, 30 oder 60 Minuten, einer von drei Interviewern, strenges oder unterstützendes Feedback, in einer von fünf Sprachen.',
      },
      {
        title: 'Antworte laut oder schriftlich',
        body: 'Tippe, oder sprich und lass deine Antwort transkribieren. Bis zu drei Hinweise, wenn du feststeckst.',
      },
      {
        title: 'Hol dir deinen Bericht',
        body: 'Bewertungen, Belege und ein Lernpfad, sobald das Interview endet.',
      },
    ],
    honesty:
      'Es ist ein KI-Interviewer, kein Mensch. Er ist dafür gebaut, ein konsistentes, strukturiertes technisches Interview zu führen – und deine letzten Sessions bestimmen, was er als Nächstes fragt.',
    mock: {
      label: 'Interview · Frontend · Senior · 30 Min.',
      phases: ['Warm-up', 'Technisch', 'Deep Dive', 'Abschluss'],
      interviewer: 'Interviewer',
      you: 'Du',
      q: 'Deine Liste rendert bei jedem Tastendruck im Suchfeld neu. Wie findest du heraus, warum?',
      a: 'Ich öffne den React Profiler, zeichne einen Tastendruck auf und schaue, welche Komponenten warum gerendert haben…',
      followUp:
        'Angenommen, der Profiler zeigt, dass die ganze Liste neu rendert. Was sind die zwei wahrscheinlichsten Ursachen?',
      hints: 'Noch 2 von 3 Hinweisen',
      voice: 'Tippen zum Antworten',
    },
  },

  assessment: {
    eyebrow: 'Coding-Assessments',
    heading: 'Schreib den Code. Versteckte Tests bewerten ihn.',
    lede: 'Coding hat bei Mentara seinen eigenen Platz: ein separates, getimtes Assessment mit Editor, ausführbaren Beispielen und echter Abgabe. Das Interview bleibt ein Gespräch; das Assessment prüft den Code.',
    steps: [
      {
        title: 'Lies die Aufgabe',
        body: 'Eine bis fünf Aufgaben mit Beispielen. Ein Timer, falls das Assessment einen hat, wird vom Server durchgesetzt.',
      },
      {
        title: 'Schreib deine Lösung',
        body: 'JavaScript, TypeScript, Python, Java, Go oder C++. Die Sprache kannst du mittendrin wechseln.',
      },
      {
        title: 'Führ die Beispiele aus',
        body: 'Starte die sichtbaren Beispiele oder eigene Eingaben so oft du willst, bevor du abgibst.',
      },
      {
        title: 'Gib ab',
        body: 'Dein Code wird gegen versteckte Tests geprüft, die den Server nie verlassen.',
      },
      {
        title: 'Lies das Review',
        body: 'Ein KI-Review zu Codequalität, Effizienz und Lesbarkeit, pro Aufgabe, mit Stärken und Schwächen.',
      },
    ],
    separate:
      'Warum getrennt? Ein Design erklären und funktionierenden Code schreiben sind verschiedene Fähigkeiten. Mischt man beides in einem Chat, sieht man nicht, welche davon Arbeit braucht.',
    mock: {
      label: 'Coding-Assessment · 2 Aufgaben',
      timer: 'noch 38:12',
      problem: 'Überlappende Intervalle zusammenführen',
      run: 'Beispiele ausführen',
      submit: 'Abgeben',
      examples: 'Beispiele',
      passed: '3 / 3 bestanden',
      review: 'Review',
      reviewLines: [
        'Korrekt bei Randfällen: leere Eingabe, sich berührende Intervalle',
        'O(n log n) – das Sortieren dominiert',
        'Den Akkumulator sprechender benennen',
      ],
    },
  },

  report: {
    eyebrow: 'Feedback',
    heading: 'Wisse genau, was du als Nächstes verbessern musst.',
    lede: 'Am Ende des Interviews steht ein Bericht, kein Schulterklopfen. Jede Bewertung hängt an etwas, das du tatsächlich gesagt hast, und die Lücken werden zu deinem nächsten Übungsplan.',
    points: [
      {
        title: 'Nachvollziehbare Bewertungen',
        body: 'Gesamt, dazu technische Tiefe, Kommunikation, Randfälle und Problemlösung. Die Werte kommen aus Belegen in deinen Antworten, nicht aus einer Zahl, die sich das Modell ausdenkt.',
      },
      {
        title: 'Ergebnisse pro Kompetenz',
        body: 'Jede abgefragte Fähigkeit wird als stark, solide, in Entwicklung oder ausbaufähig eingestuft – oder als „nicht bewertet“, wenn die Belege nicht reichen.',
      },
      {
        title: 'Stärken und Schwächen',
        body: 'Was gut lief, was besser werden muss, und Zitate aus deinen eigenen Antworten, die zeigen, warum.',
      },
      {
        title: 'Ein Lernpfad',
        body: 'Priorisierte Themen mit Zeitschätzung. Dein nächstes Interview greift deine Schwächen auf.',
      },
    ],
    mock: {
      label: 'Dein Bericht',
      overall: 'Gesamt',
      categories: ['Technisch', 'Kommunikation', 'Randfälle', 'Problemlösung'],
      competencyTitle: 'Nach Kompetenz',
      competencies: [
        { name: 'React-Rendering', band: 'Stark' },
        { name: 'State-Management', band: 'Solide' },
        { name: 'Web-Performance', band: 'In Entwicklung' },
      ],
      evidenceTitle: 'Belege aus deinen Antworten',
      evidence:
        '„Ich würde die Zeilen-Komponente memoizen“ – richtiger Fix, aber die Ursache (ein neuer Callback bei jedem Render) wurde nie genannt.',
      nextTitle: 'Nächster Fokus',
      next: 'Web-Performance · ~3 Std.',
    },
  },

  progress: {
    eyebrow: 'Dranbleiben',
    heading: 'Ein Grund, morgen wiederzukommen.',
    lede: 'Interview-Können verblasst ohne Übung. Tägliche Challenges geben dir jeden Tag eine kleine, konkrete Aufgabe auf Basis deiner eigenen Historie.',
    points: [
      {
        title: 'Tägliche Challenges',
        body: 'Bis zu drei pro Tag: ohne Hinweise fertig werden, deinen letzten Score schlagen, eine Schwäche wiederholen, eine Technologie üben.',
      },
      {
        title: 'Streaks und Level',
        body: 'XP bringen dich vom Intern bis zum CTO. Ein Streak-Freeze fängt den einen oder anderen verpassten Tag ab.',
      },
      {
        title: 'Achievements',
        body: 'Pfade für Beständigkeit, Verbesserung, Rollen und Technologien – verdient durch Üben, nicht durch das Öffnen der App.',
      },
      {
        title: 'Fortschritt über Zeit',
        body: 'Dein Score-Verlauf, wiederkehrende Schwächen und alle bisherigen Berichte an einem Ort.',
      },
    ],
    mock: {
      label: 'Challenge des Tages',
      challenges: [
        { title: 'Ein Interview abschließen', xp: '+30 XP', done: true },
        { title: 'Ohne Hinweise fertig werden', xp: '+50 XP', done: false },
        { title: 'Web-Performance wiederholen', xp: '+80 XP', done: false },
      ],
      streak: '12 Tage in Folge',
      level: 'Level · Mid',
    },
  },

  pricing: {
    eyebrow: 'Preise',
    heading: 'Kostenlos starten. Upgraden, wenn du aktiv auf Jobsuche bist.',
    flag: 'Für die aktive Jobsuche',
    foot: 'Der Pro-Preis wird zum Start festgelegt und vor dem Bezahlen im App Store und im Web angezeigt.',
    tiers: [
      {
        tier: 'Free',
        price: '0 $',
        cadence: 'für immer',
        blurb: 'Alles, was du zum regelmäßigen Üben brauchst.',
        features: [
          '5 Text-Interviews alle 30 Tage',
          '3 Voice-Interviews alle 30 Tage',
          'Vollständiger Bericht nach jedem Interview',
          'Alle Rollen, Level und Technologien',
          'Coding-Assessments',
          'Tägliche Challenges und Achievements',
        ],
        featured: false,
        cta: 'Auf die Warteliste',
        href: '#waitlist',
      },
      {
        tier: 'Pro',
        price: 'TBA',
        cadence: 'Preis zum Start',
        blurb: 'Für die Wochen, in denen du wirklich interviewst.',
        features: [
          'Alles aus Free',
          'Unbegrenzte Text-Interviews',
          'Unbegrenzte Voice-Interviews',
          'Realistischer Modus: zeigt, wo du hängen geblieben bist und was die Session ohne fremde Hilfe wert gewesen wäre',
        ],
        featured: true,
        cta: 'Auf die Warteliste',
        href: '#waitlist',
      },
      {
        tier: 'Enterprise',
        price: 'Individuell',
        cadence: 'pro Platz',
        blurb: 'Für Engineering-Teams und Recruiting.',
        features: [
          'Pro für jeden Platz',
          'Firmen-Interviews auf eurem Stack',
          'Kandidaten-Einladungen mit Einwilligung',
          'Datenschutzfreundlicher Team-Bericht',
          '14 Tage Testphase mit 5 Plätzen',
        ],
        featured: false,
        cta: 'Kontakt aufnehmen',
        href: '/enterprise#contact',
      },
    ],
  },

  teamsBand: {
    eyebrow: 'Mentara für Teams',
    heading: 'Einheitliches Interview-Training und Screening für Engineering-Teams.',
    lede: 'Gib Entwicklern strukturierte Übung auf eurem Stack und Kandidaten jedes Mal dasselbe Interview – ohne Übung in Überwachung zu verwandeln.',
    points: [
      {
        title: 'Firmen-Interviews',
        body: 'Rolle, Level, Stack, Dauer und Startfragen einmal festlegen. Alle bekommen dasselbe Interview.',
      },
      {
        title: 'Kandidaten-Einladungen',
        body: 'Schick einen Einmal-Link. Der Kandidat willigt zuerst ein; du siehst den Bericht, nicht das Transkript.',
      },
      {
        title: 'Team-Bericht',
        body: 'Aktivität pro Person, Skill-Durchschnitte nur für Gruppen ab fünf Personen. Niemand liest das Transkript eines Mitarbeiters.',
      },
    ],
    cta: 'Mentara für Teams ansehen',
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Klare Antworten.',
    items: [
      {
        q: 'Was ist anders, als ChatGPT nach Interviewfragen zu fragen?',
        a: 'Ein Chatbot beantwortet, was du fragst. Mentara führt das Interview: mit fester Struktur und Zeitlimit, Nachfragen bei schwachen Antworten, Bewertung aus Belegen nach einem Raster, Code-Prüfung mit versteckten Tests – und es erinnert sich an deine letzten Sessions.',
      },
      {
        q: 'Ist der KI-Interviewer wie ein echter Mensch?',
        a: 'Nein, und wir tun auch nicht so. Er ist dafür gebaut, ein konsistentes technisches Interview zu führen – mit Nachfragen, Uhr und Struktur. Es ist Training für das echte Interview, kein Ersatz dafür.',
      },
      {
        q: 'Kann ich Code schreiben?',
        a: 'Ja, in einem Coding-Assessment: Editor, ausführbare Beispiele, ein Timer, falls vorgesehen, und versteckte Tests bei der Abgabe. Das Interview selbst ist ein gesprochenes oder getipptes Gespräch.',
      },
      {
        q: 'Kann ich laut antworten?',
        a: 'Ja. Tippe aufs Mikrofon, sprich, und deine Antwort wird transkribiert. Der Free-Plan enthält 3 Voice-Interviews alle 30 Tage; Pro hat kein Limit.',
      },
      {
        q: 'Was sieht mein Arbeitgeber, wenn meine Firma Mentara nutzt?',
        a: 'Nur dein Beitrittsdatum, wie viele Interviews du in den letzten 30 Tagen gemacht hast und wann du zuletzt aktiv warst. Team-Skill-Durchschnitte erscheinen erst, wenn mindestens fünf Personen beigetragen haben. Keine Rolle in einer Organisation kann deine Transkripte oder deine persönlichen Berichte lesen.',
      },
      {
        q: 'Wann kann ich es nutzen?',
        a: 'Mentara startet 2026 im Web, auf iOS und Android. Trag dich in die Warteliste ein, und wir schreiben dir, sobald es losgeht.',
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
    devBuild: 'Schick mir auch den frühen Dev-Build',
    devBuildNote:
      'Instabil, unfertig und ohne Ankündigung aktualisiert - rechne mit Fehlern und zurückgesetzten Daten.',
  },

  cta: {
    eyebrow: 'Start 2026',
    titleLead: 'Dein nächstes Interview kommt.',
    titleAccent: 'Übe, bevor es so weit ist.',
    lede: 'Mentara startet 2026 im Web, auf iOS und Android. Trag dich in die Warteliste ein, und wir schreiben dir am ersten Tag.',
  },

  enterprise: {
    metaTitle: 'Mentara für Teams – technisches Interview-Training und Kandidaten-Screening',
    metaDescription:
      'Strukturiertes KI-Interview-Training und Coding-Assessments für Engineering-Teams: Firmen-Interviews auf eurem Stack, Kandidaten-Einladungen mit Einwilligung und ein Team-Bericht, der nie einzelne Transkripte offenlegt.',
    hero: {
      eyebrow: 'Mentara für Teams',
      title: 'Strukturierte technische Interviews für dein ganzes Team.',
      lede: 'Halte Entwickler in Form und prüfe Kandidaten jedes Mal auf dieselbe Weise. Mentara gibt deiner Organisation firmenspezifische Interviews, Coding-Assessments und Reporting – mit klaren Grenzen dafür, was Manager sehen können.',
      primary: 'Kontakt aufnehmen',
      secondary: 'Lesen: wie Teams KI-Interview-Training nutzen',
    },
    useCases: {
      eyebrow: 'Zwei Einsatzzwecke',
      heading: 'Entwickler weiterbringen. Kandidaten einheitlich prüfen.',
      items: [
        {
          tag: 'Weiterbildung',
          title: 'Strukturierte Übung für deine Entwickler',
          body: 'Interview-Können verblasst zwischen Jobwechseln und Beförderungen. Plätze geben jedem Entwickler Übung auf Pro-Niveau auf dem Stack, den euer Team wirklich nutzt.',
          points: [
            'Übung auf Pro-Niveau für jeden Platz',
            'Firmen-Interviews zu euren Technologien und eurem Level',
            'Ein Team-Bericht aus Aggregaten, nicht aus Transkripten',
          ],
        },
        {
          tag: 'Recruiting',
          title: 'Dasselbe erste Interview für jeden Kandidaten',
          body: 'Ein Firmen-Interview legt Rolle, Level, Stack, Dauer, Sprache und eure Startfragen fest – so werden Kandidaten auf gleicher Grundlage verglichen.',
          points: [
            'Einmal-Links, die sich nur für die eingeladene E-Mail öffnen',
            'Der Kandidat sieht einen klaren Hinweis und willigt zuerst ein',
            'Du bekommst Bericht und Testergebnisse – nicht Transkript oder Code',
          ],
        },
      ],
    },
    steps: {
      eyebrow: 'So funktioniert es',
      heading: 'Vom ersten Gespräch zum ersten Interview.',
      items: [
        {
          title: 'Sprich mit uns',
          body: 'Erzähl uns von deinem Team und ob ihr rekrutiert, weiterbildet oder beides.',
        },
        {
          title: 'Testphase starten',
          body: 'Wir aktivieren eure Organisation: 14 Tage, 5 Plätze, 10 Kandidaten-Einladungen.',
        },
        {
          title: 'Team einladen',
          body: 'Teile einen Einladungslink. Owner und Admins verwalten Plätze und Rollen.',
        },
        {
          title: 'Firmen-Interviews bauen',
          body: 'Rolle, Level und Stack wählen, bis zu 30 Startfragen mit den erwarteten Konzepten hinzufügen.',
        },
        {
          title: 'Üben und einladen',
          body: 'Entwickler üben; Recruiter verschicken Kandidaten-Einladungen und lesen die Ergebnisse.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Datenschutz by Design',
      heading: 'Üben funktioniert nur, wenn niemand zuschaut.',
      lede: 'Entwickler üben ehrlich, wenn Fehler privat bleiben. Deshalb sind die Grenzen ins Produkt eingebaut, nicht einer Richtlinie überlassen.',
      sees: {
        label: 'Was die Organisation sieht',
        points: [
          'Beitrittsdatum, Interviews der letzten 30 Tage und letzte Aktivität jedes Mitglieds',
          'Team-Skill-Durchschnitte – nur wenn mindestens fünf Personen beigetragen haben',
          'Bei Kandidaten mit Einwilligung: Bericht und Assessment-Ergebnisse',
        ],
      },
      never: {
        label: 'Was keine Rolle sehen kann',
        points: [
          'Das Interview-Transkript eines Mitarbeiters',
          'Den persönlichen Bericht oder die Scores eines Mitarbeiters',
          'Das Transkript oder den eingereichten Code eines Kandidaten',
        ],
      },
    },
    roles: {
      eyebrow: 'Rollen',
      heading: 'Vier Rollen, jede mit klarer Aufgabe.',
      items: [
        { role: 'Owner', body: 'Alles, einschließlich der Verwaltung anderer Owner.' },
        {
          role: 'Admin',
          body: 'Mitglieder und Einladungen, Firmen-Interviews, Kandidaten-Einladungen und Team-Bericht.',
        },
        {
          role: 'Recruiter',
          body: 'Nutzt Firmen-Interviews, um Kandidaten-Einladungen zu verschicken und zu verwalten.',
        },
        { role: 'Member', body: 'Übt, auch mit euren Firmen-Interviews.' },
      ],
    },
    notYet: {
      heading: 'Noch nicht verfügbar',
      lede: 'Lieber sagen wir es jetzt als im Einkaufsgespräch.',
      items: [
        'SSO und SCIM-Provisioning',
        'ATS-Integrationen',
        'Eigenes Branding',
        'Eigene Coding-Aufgaben des Unternehmens',
        'Self-Service-Checkout – Verträge schließt ihr mit uns',
      ],
    },
    article: {
      eyebrow: 'Weiterlesen',
      title: 'KI-Interview-Training für Engineering-Teams: was es kann und was nicht (Englisch)',
      cta: 'Artikel lesen',
    },
    form: {
      eyebrow: 'Kontakt',
      heading: 'Erzähl uns von deinem Team.',
      sub: 'Wir antworten per E-Mail, meist innerhalb von zwei Werktagen.',
      name: 'Dein Name',
      email: 'Geschäftliche E-Mail',
      company: 'Unternehmen',
      teamSize: 'Teamgröße',
      useCase: 'Was braucht ihr?',
      useCases: {
        upskilling: 'Übung für unsere Entwickler',
        hiring: 'Kandidaten-Screening',
        both: 'Beides',
      },
      message: 'Noch etwas?',
      messageHint: 'Stack, Zeitplan, Anzahl Kandidaten – optional.',
      submit: 'Senden',
      sending: 'Wird gesendet…',
      success: 'Danke – wir haben deine Nachricht und antworten per E-Mail.',
      invalid: 'Bitte prüf die Felder oben und versuch es erneut.',
      rateLimited: 'Zu viele Anfragen aus diesem Netzwerk. Versuch es in einer Stunde erneut.',
      error: 'Bei uns ist etwas schiefgelaufen. Versuch es gleich noch einmal.',
      offNote: 'Das Kontaktformular öffnet in Kürze.',
      privacyNote: 'Wir nutzen diese Angaben nur, um dir zu antworten.',
    },
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
      lede: 'Gebündelte Einstiegspunkte für Menschen, die Tools vergleichen, System Design üben, Behavioral-Antworten schärfen, sich auf Senior- und Staff-Runden vorbereiten – und für Teams.',
    },
    blog: {
      eyebrow: 'Ressourcen',
      title: 'Strategie für Interview-Vorbereitung, Vergleiche und Produktnotizen.',
      lede: 'Praktische Artikel zur Vorbereitung auf technische Interviews – und dazu, wie Teams Interview-Training im großen Stil umsetzen.',
      primary: 'Alle Artikel ansehen',
      pathsEyebrow: 'Lesepfade',
      pathsTitle: 'Gruppiert danach, worauf du dich vorbereitest.',
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
    blurb: 'Technisches Interview-Training und Coding-Assessments für Entwickler und Teams.',
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
