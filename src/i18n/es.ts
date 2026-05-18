import type { Dict } from './types';

export const es: Dict = {
  langName: 'Español',
  ogLocale: 'es_ES',
  a11ySkip: 'Saltar al contenido',

  meta: {
    title: 'Mentara — entrevistas técnicas de práctica con IA para ingenieros',
    description:
      'Mentara hace entrevistas técnicas de práctica realistas con un entrevistador de IA que se adapta, te aprieta y te puntúa en tiempo real — para que la entrevista de verdad se sienta como una repetición. iOS, Android y web.',
    tagline: 'Ensaya la entrevista.',
    launchLabel: 'Disponible en 2026',
  },

  nav: [
    { label: 'Producto', href: '#product' },
    { label: 'Funciones', href: '#features' },
    { label: 'Precios', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'Entrevistas de práctica con IA · para ingenieros',
    titleLead: 'Ensaya la entrevista.',
    titleAccent: 'Antes de que',
    titleTail: 'te examine a ti.',
    lede: 'Mentara hace entrevistas técnicas de práctica realistas con un entrevistador de IA: se adapta, te aprieta y te puntúa en tiempo real — para que la de verdad se sienta como una repetición.',
    availability: 'Disponible en 2026 · iOS, Android y web',
  },

  trust: [
    'Procesos al nivel de FAANG',
    '10+ tracks de práctica',
    'Puntuación en tiempo real',
    'Dificultad adaptativa',
    'iOS · Android · Web',
  ],

  product: {
    eyebrow: 'Un vistazo a la app',
    heading: 'La entrevista, en cualquier pantalla.',
    lede: 'Una pantalla, una tarea: mantenerte en la entrevista. La pregunta, tu respuesta y la señal en directo de cómo está sonando — en el móvil o en el navegador, sin nada que distraiga.',
    notes: [
      'Habla o escribe — el entrevistador reacciona igual',
      'La puntuación se mueve mientras hablas, no después',
      'El presupuesto de pistas está a la vista: lo racionas como en la de verdad',
    ],
    ui: {
      track: 'system-design · L5',
      timer: '14:22',
      interviewer: 'entrevistador',
      you: 'tú',
      q: 'La escritura está caliente en una sola clave. ¿Cómo evitas que un nodo se funda?',
      a: 'Le pongo sal a la clave de partición, reparto lecturas entre réplicas y meto un write-behind…',
      liveScore: 'puntuación',
      hints: 'pistas',
    },
  },

  panel: {
    label: 'session · system-design · L5',
    interviewer: 'entrevistador',
    you: 'tú',
    aiLine: 'Cuéntame cómo lo repartirías en shards para que una clave caliente no tumbe un nodo.',
    youLine: 'Le añado sal a la clave de partición y reparto las lecturas entre réplicas…',
    of: '/10',
    scores: ['Técnica', 'Comunicación', 'Casos límite', 'Resolución'],
  },

  features: {
    eyebrow: 'Lo que te llevas',
    heading: 'Un sparring, no una app de tipo test.',
    items: [
      {
        index: '01',
        title: 'Un entrevistador que te devuelve la bola',
        body: 'No un chatbot que lee preguntas. La IA se mantiene en el papel según tu rol, tu nivel y el tipo de entrevistador — repregunta, va a los casos límite y aprieta más cuando te relajas.',
      },
      {
        index: '02',
        title: 'Puntuado mientras hablas',
        body: 'Señal en directo de profundidad técnica, comunicación, casos límite y resolución — actualizada cada pocos turnos, no enterrada en un análisis posterior.',
      },
      {
        index: '03',
        title: 'Tracks de práctica con estructura',
        body: 'Rondas de Algoritmos, System Design, Behavioral y de Dominio con dificultad calibrada. Practica justo la ronda que te da miedo, no un saco de preguntas al azar.',
      },
      {
        index: '04',
        title: 'Un progreso que se acumula',
        body: 'XP, rachas, niveles y logros convierten el estudio disperso en un hábito. Aparece cada día y mira cómo se dobla la curva.',
      },
    ],
  },

  audience: {
    eyebrow: 'Para quién es',
    heading: 'Hecho para el ingeniero que está en ello ahora mismo.',
    groups: [
      {
        tag: 'Recién graduados',
        body: 'Pasa del “en teoría me lo sé” al “llevo yo la entrevista” antes de tu primer onsite.',
      },
      {
        tag: 'Cambio de carrera',
        body: 'Cierra rápido la brecha en soltura de entrevista — repeticiones con feedback, no a ciegas.',
      },
      {
        tag: 'Nivel senior',
        body: 'Practica System Design y el interrogatorio de nivel staff hasta que el panel real aburra.',
      },
    ],
    versus: {
      them: 'Machacar LeetCode en solitario',
      themPoints: [
        'Nadie aprieta una respuesta vaga',
        'Ni una palabra sobre comunicación y estructura',
        'Te calificas tú mismo — con la mano blanda',
      ],
      us: 'Mentara',
      usPoints: [
        'Un entrevistador que repregunta y sube el listón',
        'Puntúa la comunicación, no solo la respuesta',
        'Un informe honesto y qué arreglar después',
      ],
    },
  },

  steps: {
    eyebrow: 'Cómo funciona',
    heading: 'Tres pasos a una entrevista sin sudores.',
    items: [
      {
        n: '1',
        title: 'Elige la ronda',
        body: 'Track, rol y dificultad. Fija el tipo de entrevistador — screening amable o interrogatorio de nivel staff.',
      },
      {
        n: '2',
        title: 'Lanza la simulación en directo',
        body: 'Razona en voz alta o escribe código. El entrevistador se adapta sobre la marcha y puntúa cada intercambio.',
      },
      {
        n: '3',
        title: 'Recibe el informe',
        body: 'Un desglose puntuado y un plan de estudio enfocado — justo lo que pulir antes de la entrevista de verdad.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Precios',
    heading: 'Gratis para empezar. Calderilla al lado de una oferta perdida.',
    flag: 'El más elegido',
    cta: 'Disponible en el lanzamiento',
    foot: 'Los precios son orientativos y se fijan en el lanzamiento.',
    tiers: [
      {
        tier: 'FREE',
        price: '$0',
        cadence: 'para siempre',
        blurb: 'Prueba entrevistas de práctica de verdad.',
        features: [
          'Unas pocas sesiones / mes',
          'Tracks básicos',
          'Puntuación en directo',
          'Progreso básico',
        ],
        featured: false,
      },
      {
        tier: 'PRO',
        price: '$19',
        cadence: '/ mes',
        blurb: 'Para el ingeniero metido en plena búsqueda.',
        features: [
          'Sesiones ilimitadas',
          'Informe completo + plan de estudio',
          'Todos los tracks y tipos de entrevistador',
          'Progreso con gamificación',
        ],
        featured: true,
      },
      {
        tier: 'ENTERPRISE',
        price: 'Custom',
        cadence: 'hablamos',
        blurb: 'Bootcamps, grupos universitarios y equipos.',
        features: [
          'Plazas y gestión de grupos',
          'Analítica agregada',
          'SSO y controles de admin',
          'Soporte prioritario',
        ],
        featured: false,
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Respuestas directas.',
    items: [
      {
        q: '¿De verdad se siente como una entrevista real?',
        a: 'De eso va justo. El entrevistador mantiene un papel, repregunta, pone en aprietos las respuestas flojas y sube la dificultad — silencios incómodos incluidos.',
      },
      {
        q: '¿Tengo que programar en voz alta?',
        a: 'Tú decides. Razona en voz alta, escribe código o las dos cosas. Las rondas behavioral y de system design van de conversar; en las de algoritmos puedes enviar código.',
      },
      {
        q: '¿Qué tracks hay?',
        a: 'Rondas de Algoritmos, System Design, Behavioral y de Dominio — por roles y niveles de seniority, con una dificultad que se ajusta a ti.',
      },
      {
        q: '¿Cuándo y dónde se lanza?',
        a: 'Mentara se lanza en 2026 en iOS, Android y web. Las fichas en las tiendas y la app web salen en el lanzamiento — esta página es el adelanto.',
      },
      {
        q: '¿Los datos de mi sesión son privados?',
        a: 'Tus transcripciones y puntuaciones son tuyas. Alimentan tus informes y tu progreso, y no se venden. Una política de privacidad completa llega con las apps.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Acceso anticipado',
    heading: 'Métete antes que nadie.',
    sub: 'Apúntate a la lista — entérate del lanzamiento el primero, sin spam.',
    label: 'Correo electrónico',
    placeholder: 'tu@empresa.dev',
    cta: 'Apuntarme',
    sending: 'Enviando…',
    success: 'Listo, estás en la lista. Te escribimos en el lanzamiento.',
    error: 'Algo se rompió por nuestro lado. Vuelve a intentarlo en un momento.',
    offNote: 'Abre pronto — define PUBLIC_FORMSPREE_ENDPOINT para activar el formulario.',
  },

  cta: {
    eyebrow: 'Disponible en 2026',
    titleLead: 'La próxima entrevista ya llega.',
    titleAccent: 'Entra con los deberes hechos.',
    lede: 'Mentara llega en 2026 a iOS, Android y web. Pilla el email de lanzamiento — y practica hasta que la de verdad aburra.',
  },

  badges: {
    ariaGroup: 'Apps — próximamente',
    comingSoon: 'Próximamente en',
    ios: 'App Store',
    android: 'Google Play',
    web: 'la Web',
  },

  footer: {
    blurb: 'Entrevistas de práctica con IA para ingenieros — iOS, Android y web.',
    explore: 'Explorar',
    legal: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
    blog: 'Blog',
  },

  legal: {
    privacyTitle: 'Política de privacidad',
    termsTitle: 'Términos del servicio',
    draftNotice:
      'Borrador — no es asesoramiento legal. Se revisará con asesoría jurídica antes del lanzamiento; la versión en inglés es la auténtica.',
    updated: 'Última actualización',
    back: 'Volver al inicio',
  },

  notFound: {
    eyebrow: 'Error',
    message: 'Esta ruta no compiló nunca. La página que buscas no existe — o todavía no ha salido.',
    back: 'Volver al inicio',
  },
};
