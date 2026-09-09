import type { Dict } from './types';

export const pl: Dict = {
  langName: 'Polski',
  ogLocale: 'pl_PL',
  a11ySkip: 'Przejdź do treści',
  a11yMenu: 'Menu',

  meta: {
    title: 'Mentara – próbne rozmowy techniczne z AI dla programistów',
    description:
      'Mentara prowadzi realistyczne próbne rozmowy techniczne z rekruterem AI, który dostosowuje się, dopytuje i ocenia cię na bieżąco – żebyś na prawdziwą rozmowę wszedł przygotowany. iOS, Android i przeglądarka.',
    tagline: 'Ćwicz prawdziwe rozmowy.',
    launchLabel: 'Start w 2026',
  },

  nav: [
    { label: 'Produkt', href: '#product' },
    { label: 'Funkcje', href: '#features' },
    { label: 'Blog', href: '/blog' },
    { label: 'Cennik', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'Próbne rozmowy z AI · dla inżynierów',
    titleLead: 'Ćwicz rozmowy techniczne.',
    titleAccent: 'Zanim',
    titleTail: 'dojdzie do tej prawdziwej.',
    lede: 'Mentara prowadzi realistyczne próbne rozmowy techniczne z rekruterem AI, który dostosowuje się, dopytuje i ocenia cię na bieżąco – żebyś na prawdziwą rozmowę wszedł przygotowany.',
    availability: 'Start w 2026 · iOS, Android i przeglądarka',
  },

  trust: [
    'Ścieżki w stylu FAANG',
    'Ponad 10 ścieżek ćwiczeń',
    'Ocena na żywo',
    'Adaptacyjna trudność',
    'iOS · Android · Web',
  ],

  product: {
    eyebrow: 'Rzut oka na aplikację',
    heading: 'Rozmowa na twoim ekranie.',
    lede: 'Jeden ekran, jeden cel: utrzymać uwagę na rozmowie. Pytanie, twoja odpowiedź i bieżąca informacja o tym, jak ci idzie – na telefonie albo w przeglądarce, bez niczego, co rozprasza.',
    notes: [
      'Mów albo pisz – rekruter zareaguje tak czy inaczej',
      'Ocena zmienia się w trakcie mówienia, a nie po wszystkim',
      'Widzisz limit podpowiedzi, więc oszczędzasz je jak na prawdziwej rozmowie',
    ],
    ui: {
      track: 'system-design · L5',
      timer: '14:22',
      interviewer: 'rekruter',
      you: 'ty',
      q: 'Twoje zapisy uderzają w jeden gorący klucz. Jak nie dopuścisz do przeciążenia węzła?',
      a: 'Dodałbym sól do klucza partycjonowania, rozłożył odczyty na repliki i dorzucił write-behind…',
      liveScore: 'ocena na żywo',
      hints: 'podpowiedzi',
    },
  },

  panel: {
    label: 'sesja · system-design · L5',
    interviewer: 'rekruter',
    you: 'ty',
    aiLine: 'Opowiedz, jak podzieliłbyś to na shardy, żeby gorący klucz nie położył jednego węzła.',
    youLine: 'Dodałbym sól do klucza partycjonowania i rozłożył odczyty na repliki…',
    of: '/10',
    scores: ['Technika', 'Komunikacja', 'Przypadki brzegowe', 'Rozwiązywanie problemów'],
  },

  features: {
    eyebrow: 'Co dostajesz',
    heading: 'Rekruter, który dopytuje – a nie aplikacja z quizem.',
    items: [
      {
        index: '01',
        title: 'Rekruter, który dopytuje',
        body: 'To nie chatbot czytający pytania. Rekruter AI trzyma się roli, poziomu i charakteru rozmowy – dopytuje, drąży przypadki brzegowe i podkręca trudność, gdy zaczynasz jechać na luzie.',
      },
      {
        index: '02',
        title: 'Ocena w trakcie mówienia',
        body: 'Bieżący sygnał o głębi technicznej, komunikacji, przypadkach brzegowych i sposobie rozwiązywania problemów – aktualizowany co kilka wymian zdań, a nie ukryty w podsumowaniu.',
      },
      {
        index: '03',
        title: 'Uporządkowane ścieżki ćwiczeń',
        body: 'Algorytmy, system design, rozmowy behawioralne i rundy domenowe ze skalibrowaną trudnością. Trenuj tę rundę, której naprawdę się boisz, a nie przypadkowy zestaw.',
      },
      {
        index: '04',
        title: 'Postęp, który się kumuluje',
        body: 'XP, serie dni, poziomy i osiągnięcia zamieniają chaotyczne zrywy w nawyk. Wracaj codziennie i patrz, jak postęp się sumuje.',
      },
    ],
  },

  audience: {
    eyebrow: 'Dla kogo to jest',
    heading: 'Dla inżynierów, którzy przygotowują się właśnie teraz.',
    groups: [
      {
        tag: 'Po studiach',
        body: 'Zamień „znam to z teorii” na „poradzę sobie na rozmowie”, zanim pójdziesz na pierwszy onsite.',
      },
      {
        tag: 'Po zmianie branży',
        body: 'Szybko nadrób brak doświadczenia w rozmowach – ćwicz z informacją zwrotną, a nie na wyczucie.',
      },
      {
        tag: 'Rozmowy na seniora',
        body: 'Ćwicz system design i trudne pytania na poziomie staff, aż prawdziwy panel stanie się rutyną.',
      },
    ],
    versus: {
      them: 'Samotne katowanie LeetCode',
      themPoints: [
        'Nikt nie drąży odpowiedzi rzuconej ogólnikami',
        'Zero informacji o komunikacji i strukturze',
        'Oceniasz się sam – i to hojnie',
      ],
      us: 'Mentara',
      usPoints: [
        'Rekruter, który dopytuje i podkręca poziom',
        'Ocena za komunikację, nie tylko za odpowiedź',
        'Uczciwy raport i lista tego, co poprawić',
      ],
    },
  },

  steps: {
    eyebrow: 'Jak to działa',
    heading: 'Jak to działa – w trzech krokach.',
    items: [
      {
        n: '1',
        title: 'Wybierz rundę',
        body: 'Wybierz ścieżkę, rolę i poziom trudności. Ustaw charakter rozmowy – życzliwy screening albo przesłuchanie na poziomie staff.',
      },
      {
        n: '2',
        title: 'Przeprowadź próbną rozmowę',
        body: 'Tłumacz na głos albo pisz kod. Rekruter dostosowuje się na bieżąco i ocenia każdą wymianę zdań.',
      },
      {
        n: '3',
        title: 'Odbierz raport',
        body: 'Rozpisana ocena plus konkretny plan nauki – dokładnie to, co poprawić przed prawdziwą rozmową.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Cennik',
    heading: 'Start za darmo, płatne plany na więcej ćwiczeń.',
    flag: 'Najpopularniejszy',
    cta: 'Dostępne na starcie',
    foot: 'Ceny są orientacyjne i zostaną ustalone na premierę.',
    tiers: [
      {
        tier: 'FREE',
        price: '0 zł',
        cadence: 'na zawsze',
        blurb: 'Sprawdź prawdziwe próbne rozmowy.',
        features: [
          'Kilka sesji w miesiącu',
          'Podstawowe ścieżki ćwiczeń',
          'Ocena na żywo',
          'Podstawowy postęp',
        ],
        featured: false,
      },
      {
        tier: 'PRO',
        price: 'Wkrótce',
        cadence: 'na premierę',
        blurb: 'Dla inżyniera w trakcie rekrutacji.',
        features: [
          'Sesje bez limitu',
          'Pełne raporty z oceną i plan nauki',
          'Wszystkie ścieżki i charaktery rozmów',
          'Grywalizacja postępów',
        ],
        featured: true,
      },
      {
        tier: 'ENTERPRISE',
        price: 'Indywidualnie',
        cadence: 'porozmawiajmy',
        blurb: 'Bootcampy, grupy studenckie i zespoły.',
        features: [
          'Zarządzanie miejscami i grupami',
          'Analityka zbiorcza',
          'SSO i panel administratora',
          'Priorytetowe wsparcie',
        ],
        featured: false,
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Konkretne odpowiedzi.',
    items: [
      {
        q: 'Czy to naprawdę przypomina prawdziwą rozmowę?',
        a: 'O to właśnie chodzi. Rekruter trzyma się swojej roli, dopytuje, podważa słabe odpowiedzi i podnosi poprzeczkę – łącznie z niezręcznymi chwilami ciszy.',
      },
      {
        q: 'Czy muszę programować na głos?',
        a: 'Ty decydujesz. Możesz tłumaczyć tok rozumowania, pisać kod albo jedno i drugie. Rundy behawioralne i system design opierają się na rozmowie, w algorytmicznych wysyłasz kod.',
      },
      {
        q: 'Jakie ścieżki są dostępne?',
        a: 'Algorytmy, system design, rozmowy behawioralne i rundy domenowe – dla różnych ról i poziomów, z trudnością dopasowaną do ciebie.',
      },
      {
        q: 'Kiedy i gdzie będzie premiera?',
        a: 'Mentara startuje w 2026 roku na iOS, Androidzie i w przeglądarce. Wpisy w sklepach i aplikacja webowa ruszają na premierę – ta strona to wcześniejszy podgląd.',
      },
      {
        q: 'Czy dane z sesji są prywatne?',
        a: 'Twoje transkrypcje i oceny należą do ciebie. Zasilają twoje raporty i postępy i nie są sprzedawane. Pełna polityka prywatności trafi razem z aplikacjami.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Wczesny dostęp',
    heading: 'Zapisz się na listę.',
    sub: 'Zapisz się na listę – dowiesz się pierwszy w dniu premiery, bez spamu.',
    label: 'Adres e-mail',
    placeholder: 'ty@praca.dev',
    cta: 'Zapisz mnie',
    sending: 'Wysyłanie…',
    success: 'Jesteś na liście. Napiszemy do ciebie na premierę.',
    error: 'Coś poszło nie tak po naszej stronie. Spróbuj za chwilę.',
    offNote: 'Wkrótce ruszamy – ustaw PUBLIC_FORMSPREE_ENDPOINT, aby włączyć formularz.',
    devBuild: 'Wyślijcie mi też wczesną wersję deweloperską',
    devBuildNote:
      'Niestabilna, niekompletna i aktualizowana bez uprzedzenia - licz się z błędami i kasowaniem danych.',
  },

  cta: {
    eyebrow: 'Start w 2026',
    titleLead: 'Mentara startuje w 2026 roku.',
    titleAccent: 'Zacznij ćwiczyć wcześniej.',
    lede: 'Mentara trafia na iOS, Androida i do przeglądarki w 2026 roku. Zapisz się po informacje o premierze i zacznij ćwiczyć wcześniej.',
  },

  contentHub: {
    compare: {
      eyebrow: 'Porównania',
      title: 'Wybierz metodę przygotowań, której naprawdę potrzebujesz.',
      lede: 'Strony porównawcze dla kandydatów, którzy wybierają między samodzielnymi ćwiczeniami, rozmowami z kolegami, ćwiczeniem na głos, narzędziami AI i coachingiem.',
      primary: 'Zobacz porównania',
      secondary: 'Przeglądaj wszystkie materiały',
    },
    resources: {
      eyebrow: 'Materiały',
      title: 'Uporządkowane ścieżki lektur do przygotowań na rozmowy techniczne.',
      lede: 'Pogrupowane punkty wyjścia dla kandydatów, którzy porównują narzędzia, ćwiczą system design, dopracowują odpowiedzi behawioralne albo przygotowują się na rozmowy senior i staff.',
    },
    blog: {
      eyebrow: 'Materiały',
      title: 'Porównania, strategia przygotowań i notatki o produkcie.',
      lede: 'Tworzone po to, by trafiać do osób szukających konkretów i dać poważnym kandydatom lepsze wejście w produkt niż ogólnikowa strona reklamowa.',
      primary: 'Przeglądaj wszystkie artykuły',
      pathsEyebrow: 'Ścieżki lektur',
      pathsTitle: 'Tematyczne zestawy, a nie przypadkowa sterta wpisów.',
    },
  },

  badges: {
    ariaGroup: 'Aplikacje – wkrótce',
    comingSoon: 'Wkrótce w',
    ios: 'App Store',
    android: 'Google Play',
    web: 'przeglądarce',
  },

  footer: {
    blurb: 'Próbne rozmowy z AI dla inżynierów – iOS, Android i przeglądarka.',
    explore: 'Nawigacja',
    legal: 'Informacje prawne',
    privacy: 'Prywatność',
    terms: 'Regulamin',
  },

  legal: {
    privacyTitle: 'Polityka prywatności',
    termsTitle: 'Regulamin',
    draftNotice:
      'Wersja robocza – to nie jest porada prawna. Do weryfikacji z prawnikiem przed premierą; wiążąca jest wersja angielska.',
    updated: 'Ostatnia aktualizacja',
    back: 'Powrót na stronę główną',
  },

  notFound: {
    eyebrow: 'Błąd',
    message: 'Ta strona nie istnieje – albo nie została jeszcze opublikowana.',
    back: 'Powrót na stronę główną',
  },
};
