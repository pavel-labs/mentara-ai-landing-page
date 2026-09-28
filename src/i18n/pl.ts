import type { Dict } from './types';

export const pl: Dict = {
  langName: 'Polski',
  ogLocale: 'pl_PL',
  a11ySkip: 'Przejdź do treści',
  a11yMenu: 'Menu',

  meta: {
    title:
      'Mentara – ćwiczenie rozmów technicznych z AI i zadania programistyczne dla programistów',
    description:
      'Ćwicz ustrukturyzowane rozmowy techniczne z rekruterem AI, który dopytuje o twoje odpowiedzi, rozwiązuj zadania programistyczne oceniane ukrytymi testami i dostawaj raport, który pokazuje twoje słabe strony wraz z dowodami. Plany Free i Pro oraz Enterprise dla zespołów.',
    tagline: 'Ćwicz rozmowę, nie tylko pytania.',
    launchLabel: 'Start w 2026',
  },

  nav: [
    { label: 'Rozmowy', href: '#interview' },
    { label: 'Zadania', href: '#assessments' },
    { label: 'Cennik', href: '#pricing' },
    { label: 'Zespoły', href: '/enterprise' },
    { label: 'Blog', href: '/blog' },
  ],

  hero: {
    eyebrow: 'Trening rozmów dla programistów i zespołów',
    titleLead: 'Ćwicz rozmowę techniczną,',
    titleAccent: 'nie tylko pytania.',
    lede: 'Mentara prowadzi ustrukturyzowaną rozmowę dla twojej roli i stacku, dopytuje o to, co naprawdę powiedziałeś, ocenia twój kod ukrytymi testami i daje raport, który wskazuje słabe strony – żeby kolejna sesja celowała właśnie w nie.',
    availability: 'Start w 2026 · przeglądarka, iOS i Android',
    teamsLink: 'Dla zespołów inżynierskich',
  },

  proof: [
    'Frontend · Backend · Algorytmy',
    '19 technologii',
    'Od juniora do seniora',
    '15, 30 lub 60 minut',
    'Pisz albo mów',
    '5 języków rozmowy',
  ],

  why: {
    eyebrow: 'Dlaczego ćwiczyć tutaj',
    heading: 'Czytanie odpowiedzi to nie to samo, co ich udzielanie.',
    lede: 'Większość przygotowań kończy się listą przeczytanych pytań. Na rozmowie musisz wyjaśniać, ktoś drąży słaby punkt i idzie dalej, czy jesteś gotowy, czy nie. Właśnie to pozwala ćwiczyć Mentara.',
    them: {
      label: 'Listy pytań i zwykły chatbot',
      points: [
        'Sam wybierasz pytania, więc wybierasz łatwe',
        'Nikt nie zapyta „dlaczego?” po mglistej odpowiedzi',
        'Kod nigdy nie jest uruchamiany, więc „wygląda dobrze” liczy się jako dobrze',
        'Oceniasz się sam, a każda sesja zaczyna się od zera',
      ],
    },
    us: {
      label: 'Sesja w Mentara',
      points: [
        'Rozmowa na czas dla twojej roli, poziomu i stacku, o stałej strukturze',
        'Pytania uzupełniające zbudowane na twojej własnej odpowiedzi',
        'Zadania programistyczne oceniane testami, których nie widzisz',
        'Raport z dowodami, a słabe strony kształtują kolejną sesję',
      ],
    },
  },

  interview: {
    eyebrow: 'Rozmowy z AI',
    heading: 'Ustrukturyzowana rozmowa, która reaguje na twoje odpowiedzi.',
    lede: 'Każda rozmowa przechodzi przez rozgrzewkę, pytania techniczne, pogłębienie i podsumowanie. Rekruter dopytuje o to, co powiedziałeś, zawęża pytanie, gdy utkniesz, i idzie dalej, gdy odpowiedź jest mocna.',
    steps: [
      {
        title: 'Wybierz rolę',
        body: 'Frontend, backend lub algorytmy, na poziomie junior, middle lub senior.',
      },
      {
        title: 'Wybierz stack',
        body: 'Do sześciu technologii – React, TypeScript, Node.js, system design i więcej.',
      },
      {
        title: 'Ustaw rozmowę',
        body: '15, 30 lub 60 minut, jeden z trzech rekruterów, surowy lub wspierający feedback, w jednym z pięciu języków.',
      },
      {
        title: 'Odpowiadaj na głos lub pisemnie',
        body: 'Pisz albo mów, a odpowiedź zostanie przepisana. Do trzech podpowiedzi, gdy utkniesz.',
      },
      {
        title: 'Odbierz raport',
        body: 'Oceny, dowody i ścieżka nauki zaraz po zakończeniu rozmowy.',
      },
    ],
    honesty:
      'To rekruter AI, nie człowiek. Został zbudowany, by prowadzić spójną, ustrukturyzowaną rozmowę techniczną – a twoje ostatnie sesje wpływają na to, o co zapyta dalej.',
    mock: {
      label: 'Rozmowa · Frontend · Senior · 30 min',
      phases: ['Rozgrzewka', 'Technika', 'Pogłębienie', 'Podsumowanie'],
      interviewer: 'Rekruter',
      you: 'Ty',
      q: 'Twoja lista renderuje się ponownie przy każdym naciśnięciu klawisza w wyszukiwarce. Jak sprawdzisz dlaczego?',
      a: 'Otworzę React Profiler, nagram jedno naciśnięcie i sprawdzę, które komponenty się wyrenderowały i dlaczego…',
      followUp:
        'Załóżmy, że profiler pokazuje ponowne renderowanie całej listy. Jakie są dwie najbardziej prawdopodobne przyczyny?',
      hints: 'Zostały 2 z 3 podpowiedzi',
      voice: 'Dotknij, by odpowiedzieć',
    },
  },

  assessment: {
    eyebrow: 'Zadania programistyczne',
    heading: 'Napisz kod. Ocenią go ukryte testy.',
    lede: 'Kod ma w Mentara swoje miejsce: osobne zadanie na czas z edytorem, uruchamialnymi przykładami i prawdziwym zgłoszeniem rozwiązania. Rozmowa pozostaje rozmową; zadanie sprawdza kod.',
    steps: [
      {
        title: 'Przeczytaj treść',
        body: 'Od jednego do pięciu problemów z przykładami. Jeśli zadanie ma limit czasu, pilnuje go serwer.',
      },
      {
        title: 'Napisz rozwiązanie',
        body: 'JavaScript, TypeScript, Python, Java, Go lub C++. Język możesz zmienić w trakcie podejścia.',
      },
      {
        title: 'Uruchom przykłady',
        body: 'Uruchamiaj widoczne przykłady lub własne dane wejściowe dowolnie często przed wysłaniem.',
      },
      {
        title: 'Wyślij',
        body: 'Twój kod jest oceniany ukrytymi testami, które nigdy nie opuszczają serwera.',
      },
      {
        title: 'Przeczytaj recenzję',
        body: 'Recenzja AI jakości kodu, wydajności i czytelności, dla każdego problemu, z mocnymi i słabymi stronami.',
      },
    ],
    separate:
      'Dlaczego osobno? Omówienie projektu i napisanie działającego kodu to różne umiejętności. Wymieszane w jednym czacie ukrywają, która z nich wymaga pracy.',
    mock: {
      label: 'Zadanie programistyczne · 2 problemy',
      timer: 'zostało 38:12',
      problem: 'Scal nachodzące na siebie przedziały',
      run: 'Uruchom przykłady',
      submit: 'Wyślij',
      examples: 'Przykłady',
      passed: '3 / 3 zaliczone',
      review: 'Recenzja',
      reviewLines: [
        'Poprawne w przypadkach brzegowych: puste dane, stykające się przedziały',
        'O(n log n) – dominuje sortowanie',
        'Warto nadać akumulatorowi czytelną nazwę',
      ],
    },
  },

  report: {
    eyebrow: 'Feedback',
    heading: 'Wiesz dokładnie, co poprawić dalej.',
    lede: 'Rozmowa kończy się raportem, a nie poklepaniem po plecach. Każda ocena jest powiązana z czymś, co naprawdę powiedziałeś, a luki stają się twoim kolejnym planem ćwiczeń.',
    points: [
      {
        title: 'Oceny, które da się prześledzić',
        body: 'Ogólna oraz głębia techniczna, komunikacja, przypadki brzegowe i rozwiązywanie problemów. Oceny wynikają z dowodów w twoich odpowiedziach, a nie z liczby wymyślonej przez model.',
      },
      {
        title: 'Wyniki według kompetencji',
        body: 'Każda umiejętność sprawdzona w rozmowie dostaje ocenę: mocna, solidna, rozwijana lub do poprawy – albo „nieoceniona”, gdy zabrakło dowodów.',
      },
      {
        title: 'Mocne i słabe strony',
        body: 'Co poszło dobrze, co poprawić i cytaty z twoich odpowiedzi, które pokazują dlaczego.',
      },
      {
        title: 'Ścieżka nauki',
        body: 'Tematy według priorytetu z szacowanym czasem. Kolejna rozmowa wraca do twoich słabych stron.',
      },
    ],
    mock: {
      label: 'Twój raport',
      overall: 'Ogólnie',
      categories: ['Technika', 'Komunikacja', 'Przypadki brzegowe', 'Rozwiązywanie'],
      competencyTitle: 'Według kompetencji',
      competencies: [
        { name: 'Renderowanie w React', band: 'Mocna' },
        { name: 'Zarządzanie stanem', band: 'Solidna' },
        { name: 'Wydajność webowa', band: 'Rozwijana' },
      ],
      evidenceTitle: 'Dowody z twoich odpowiedzi',
      evidence:
        '„Zmemoizowałbym komponent wiersza” – poprawna poprawka, ale przyczyna (nowy callback przy każdym renderze) nie padła.',
      nextTitle: 'Następny cel',
      next: 'Wydajność webowa · ~3 h',
    },
  },

  progress: {
    eyebrow: 'Nie zwalniaj',
    heading: 'Powód, żeby wrócić jutro.',
    lede: 'Umiejętność przechodzenia rozmów zanika bez ćwiczeń. Codzienne wyzwania dają ci każdego dnia małe, konkretne zadanie oparte na twojej historii.',
    points: [
      {
        title: 'Codzienne wyzwania',
        body: 'Do trzech dziennie: skończ bez podpowiedzi, pobij swój ostatni wynik, wróć do słabej strony, poćwicz technologię.',
      },
      {
        title: 'Serie i poziomy',
        body: 'XP prowadzą cię od Intern do CTO. Zamrożenie serii ratuje pojedynczy opuszczony dzień.',
      },
      {
        title: 'Osiągnięcia',
        body: 'Ścieżki za regularność, postępy, role i technologie – zdobywane ćwiczeniem, a nie samym otwarciem aplikacji.',
      },
      {
        title: 'Postępy w czasie',
        body: 'Trend twoich wyników, powracające słabe strony i wszystkie dawne raporty w jednym miejscu.',
      },
    ],
    mock: {
      label: 'Wyzwanie dnia',
      challenges: [
        { title: 'Ukończ jedną rozmowę', xp: '+30 XP', done: true },
        { title: 'Skończ bez podpowiedzi', xp: '+50 XP', done: false },
        { title: 'Wróć do wydajności webowej', xp: '+80 XP', done: false },
      ],
      streak: 'Seria 12 dni',
      level: 'Poziom · Mid',
    },
  },

  pricing: {
    eyebrow: 'Cennik',
    heading: 'Zacznij za darmo. Przejdź na Pro, gdy aktywnie szukasz pracy.',
    flag: 'Na aktywne szukanie pracy',
    foot: 'Cena Pro zostanie ustalona na premierę i pokazana w sklepie z aplikacjami oraz w przeglądarce przed zapłatą.',
    tiers: [
      {
        tier: 'Free',
        price: '0 $',
        cadence: 'na zawsze',
        blurb: 'Wszystko, czego potrzebujesz do regularnych ćwiczeń.',
        features: [
          '5 rozmów tekstowych co 30 dni',
          '3 rozmowy głosowe co 30 dni',
          'Pełny raport po każdej rozmowie',
          'Wszystkie role, poziomy i technologie',
          'Zadania programistyczne',
          'Codzienne wyzwania i osiągnięcia',
        ],
        featured: false,
        cta: 'Zapisz się na listę',
        href: '#waitlist',
      },
      {
        tier: 'Pro',
        price: 'TBA',
        cadence: 'cena na premierę',
        blurb: 'Na tygodnie, w których naprawdę chodzisz na rozmowy.',
        features: [
          'Wszystko z Free',
          'Nielimitowane rozmowy tekstowe',
          'Nielimitowane rozmowy głosowe',
          'Tryb realistyczny: pokazuje, gdzie utknąłeś i ile sesja byłaby warta bez pomocy z zewnątrz',
        ],
        featured: true,
        cta: 'Zapisz się na listę',
        href: '#waitlist',
      },
      {
        tier: 'Enterprise',
        price: 'Wycena',
        cadence: 'za miejsce',
        blurb: 'Dla zespołów inżynierskich i rekrutacji.',
        features: [
          'Pro dla każdego miejsca',
          'Rozmowy firmowe na waszym stacku',
          'Zaproszenia kandydatów za ich zgodą',
          'Raport zespołu z poszanowaniem prywatności',
          '14 dni próbnych z 5 miejscami',
        ],
        featured: false,
        cta: 'Porozmawiajmy',
        href: '/enterprise#contact',
      },
    ],
  },

  teamsBand: {
    eyebrow: 'Mentara dla zespołów',
    heading: 'Spójny trening rozmów i selekcja kandydatów dla zespołów inżynierskich.',
    lede: 'Daj inżynierom ustrukturyzowane ćwiczenia na waszym stacku, a kandydatom za każdym razem tę samą rozmowę – bez zamieniania ćwiczeń w nadzór.',
    points: [
      {
        title: 'Rozmowy firmowe',
        body: 'Raz ustal rolę, poziom, stack, długość i pytania startowe. Każdy dostaje tę samą rozmowę.',
      },
      {
        title: 'Zaproszenia kandydatów',
        body: 'Wyślij jednorazowy link. Kandydat najpierw wyraża zgodę; ty widzisz raport, nie transkrypcję.',
      },
      {
        title: 'Raport zespołu',
        body: 'Aktywność na osobę, średnie umiejętności tylko dla grup od pięciu osób. Nikt nie czyta transkrypcji pracownika.',
      },
    ],
    cta: 'Zobacz Mentara dla zespołów',
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Konkretne odpowiedzi.',
    items: [
      {
        q: 'Czym to się różni od pytania ChatGPT o pytania rekrutacyjne?',
        a: 'Chatbot odpowiada na to, o co pytasz. Mentara prowadzi rozmowę: ma stałą strukturę i limit czasu, dopytuje przy słabych odpowiedziach, ocenia na podstawie dowodów według rubryki, uruchamia twój kod na ukrytych testach i pamięta twoje ostatnie sesje.',
      },
      {
        q: 'Czy rekruter AI jest jak prawdziwy człowiek?',
        a: 'Nie, i nie udajemy, że jest. Został zbudowany, by prowadzić spójną rozmowę techniczną – z dopytywaniem, zegarem i strukturą. To trening przed prawdziwą rozmową, a nie jej zamiennik.',
      },
      {
        q: 'Czy mogę pisać kod?',
        a: 'Tak, w zadaniu programistycznym: edytor, uruchamialne przykłady, limit czasu, jeśli zadanie go ma, i ukryte testy po wysłaniu. Sama rozmowa to konwersacja głosowa lub pisemna.',
      },
      {
        q: 'Czy mogę odpowiadać na głos?',
        a: 'Tak. Dotknij mikrofonu, mów, a odpowiedź zostanie przepisana. Plan Free obejmuje 3 rozmowy głosowe co 30 dni; Pro nie ma limitu.',
      },
      {
        q: 'Co widzi mój pracodawca, jeśli firma korzysta z Mentara?',
        a: 'Tylko datę dołączenia, liczbę rozmów z ostatnich 30 dni i czas ostatniej aktywności. Średnie umiejętności zespołu pojawiają się dopiero, gdy wkład wniosło co najmniej pięć osób. Żadna rola w organizacji nie może czytać twoich transkrypcji ani indywidualnych raportów.',
      },
      {
        q: 'Kiedy będę mógł z tego korzystać?',
        a: 'Mentara startuje w 2026 roku w przeglądarce, na iOS i Androidzie. Zapisz się na listę, a napiszemy, gdy ruszymy.',
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
    titleLead: 'Twoja kolejna rozmowa nadchodzi.',
    titleAccent: 'Poćwicz, zanim nadejdzie.',
    lede: 'Mentara startuje w przeglądarce, na iOS i Androidzie w 2026 roku. Zapisz się na listę, a napiszemy tego samego dnia.',
  },

  enterprise: {
    metaTitle: 'Mentara dla zespołów – trening rozmów technicznych i selekcja kandydatów',
    metaDescription:
      'Ustrukturyzowany trening rozmów z AI i zadania programistyczne dla zespołów inżynierskich: rozmowy firmowe na waszym stacku, zaproszenia kandydatów za zgodą i raport zespołu, który nigdy nie ujawnia indywidualnych transkrypcji.',
    hero: {
      eyebrow: 'Mentara dla zespołów',
      title: 'Ustrukturyzowane rozmowy techniczne dla całego zespołu.',
      lede: 'Pomóż inżynierom trzymać formę i oceniaj kandydatów za każdym razem tak samo. Mentara daje twojej organizacji rozmowy firmowe, zadania programistyczne i raporty – z jasnymi granicami tego, co widzą menedżerowie.',
      primary: 'Porozmawiajmy',
      secondary: 'Przeczytaj: jak zespoły korzystają z treningu rozmów z AI',
    },
    useCases: {
      eyebrow: 'Dwa zastosowania',
      heading: 'Rozwijaj inżynierów. Oceniaj kandydatów spójnie.',
      items: [
        {
          tag: 'Rozwój',
          title: 'Ustrukturyzowane ćwiczenia dla twoich inżynierów',
          body: 'Umiejętność rozmów zanika między zmianami pracy a awansami. Miejsca dają każdemu inżynierowi ćwiczenia na poziomie Pro na stacku, którego zespół naprawdę używa.',
          points: [
            'Ćwiczenia na poziomie Pro dla każdego miejsca',
            'Rozmowy firmowe z waszych technologii i na waszym poziomie',
            'Raport zespołu z danych zbiorczych, nie z transkrypcji',
          ],
        },
        {
          tag: 'Rekrutacja',
          title: 'Ta sama pierwsza rozmowa dla każdego kandydata',
          body: 'Rozmowa firmowa ustala rolę, poziom, stack, długość, język i wasze pytania startowe, więc kandydaci są porównywani na równych zasadach.',
          points: [
            'Jednorazowe linki, które otwierają się tylko dla zaproszonego adresu e-mail',
            'Kandydat widzi jasną informację i najpierw wyraża zgodę',
            'Dostajesz raport i wyniki testów – nie transkrypcję ani kod',
          ],
        },
      ],
    },
    steps: {
      eyebrow: 'Jak to działa',
      heading: 'Od pierwszej rozmowy do pierwszego wywiadu.',
      items: [
        {
          title: 'Porozmawiajmy',
          body: 'Opowiedz o zespole i o tym, czy rekrutujecie, rozwijacie ludzi, czy jedno i drugie.',
        },
        {
          title: 'Rozpocznij okres próbny',
          body: 'Aktywujemy waszą organizację: 14 dni, 5 miejsc, 10 zaproszeń kandydatów.',
        },
        {
          title: 'Zaproś zespół',
          body: 'Udostępnij link z zaproszeniem. Owner i Admin zarządzają miejscami i rolami.',
        },
        {
          title: 'Zbuduj rozmowy firmowe',
          body: 'Wybierz rolę, poziom i stack, dodaj do 30 pytań startowych z oczekiwanymi pojęciami.',
        },
        {
          title: 'Ćwicz i zapraszaj',
          body: 'Inżynierowie ćwiczą; rekruterzy wysyłają zaproszenia kandydatom i czytają wyniki.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Prywatność w projekcie',
      heading: 'Ćwiczenia działają tylko wtedy, gdy nikt nie patrzy.',
      lede: 'Inżynierowie ćwiczą uczciwie, gdy ich błędy pozostają prywatne. Dlatego ograniczenia są wbudowane w produkt, a nie zostawione polityce.',
      sees: {
        label: 'Co widzi organizacja',
        points: [
          'Datę dołączenia, liczbę rozmów z ostatnich 30 dni i ostatnią aktywność każdego członka',
          'Średnie umiejętności zespołu – tylko gdy wkład wniosło co najmniej pięć osób',
          'U kandydatów, którzy wyrazili zgodę: raport i wyniki zadań',
        ],
      },
      never: {
        label: 'Czego nie widzi żadna rola',
        points: [
          'Transkrypcji rozmowy pracownika',
          'Indywidualnego raportu ani ocen pracownika',
          'Transkrypcji ani wysłanego kodu kandydata',
        ],
      },
    },
    roles: {
      eyebrow: 'Role',
      heading: 'Cztery role, każda z jasnym zadaniem.',
      items: [
        { role: 'Owner', body: 'Wszystko, łącznie z zarządzaniem innymi właścicielami.' },
        {
          role: 'Admin',
          body: 'Członkowie i zaproszenia, rozmowy firmowe, zaproszenia kandydatów i raport zespołu.',
        },
        {
          role: 'Recruiter',
          body: 'Korzysta z rozmów firmowych, by wysyłać zaproszenia kandydatom i nimi zarządzać.',
        },
        { role: 'Member', body: 'Ćwiczy, także na waszych rozmowach firmowych.' },
      ],
    },
    notYet: {
      heading: 'Jeszcze niedostępne',
      lede: 'Wolimy powiedzieć to teraz niż na spotkaniu z działem zakupów.',
      items: [
        'SSO i provisioning SCIM',
        'Integracje z ATS',
        'Własny branding',
        'Zadania programistyczne tworzone przez firmę',
        'Samodzielny zakup – umowy zawierane są z nami',
      ],
    },
    article: {
      eyebrow: 'Więcej do czytania',
      title:
        'Trening rozmów z AI dla zespołów inżynierskich: co potrafi, a czego nie (po angielsku)',
      cta: 'Przeczytaj artykuł',
    },
    form: {
      eyebrow: 'Porozmawiajmy',
      heading: 'Opowiedz nam o swoim zespole.',
      sub: 'Odpowiadamy e-mailem, zwykle w ciągu dwóch dni roboczych.',
      name: 'Imię i nazwisko',
      email: 'Służbowy e-mail',
      company: 'Firma',
      teamSize: 'Wielkość zespołu',
      useCase: 'Czego potrzebujecie?',
      useCases: {
        upskilling: 'Ćwiczeń dla naszych inżynierów',
        hiring: 'Selekcji kandydatów',
        both: 'Jednego i drugiego',
      },
      message: 'Coś jeszcze?',
      messageHint: 'Stack, terminy, liczba kandydatów – opcjonalnie.',
      submit: 'Wyślij',
      sending: 'Wysyłanie…',
      success: 'Dziękujemy – mamy twoją wiadomość i odpowiemy e-mailem.',
      invalid: 'Sprawdź pola powyżej i spróbuj ponownie.',
      rateLimited: 'Zbyt wiele zapytań z tej sieci. Spróbuj ponownie za godzinę.',
      error: 'Coś poszło nie tak po naszej stronie. Spróbuj za chwilę.',
      offNote: 'Formularz kontaktowy wkrótce ruszy.',
      privacyNote: 'Używamy tych danych wyłącznie, by ci odpowiedzieć.',
    },
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
      lede: 'Pogrupowane punkty wyjścia dla kandydatów, którzy porównują narzędzia, ćwiczą system design, dopracowują odpowiedzi behawioralne, przygotowują się na rozmowy senior i staff – oraz dla zespołów.',
    },
    blog: {
      eyebrow: 'Materiały',
      title: 'Strategia przygotowań do rozmów, porównania i notatki o produkcie.',
      lede: 'Praktyczne artykuły o przygotowaniu do rozmów technicznych – i o tym, jak zespoły mogą prowadzić trening rozmów na dużą skalę.',
      primary: 'Przeglądaj wszystkie artykuły',
      pathsEyebrow: 'Ścieżki lektur',
      pathsTitle: 'Pogrupowane według tego, do czego się przygotowujesz.',
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
    blurb: 'Trening rozmów technicznych i zadania programistyczne dla programistów i zespołów.',
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
