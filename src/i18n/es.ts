import type { Dict } from './types';

export const es: Dict = {
  langName: 'Español',
  ogLocale: 'es_ES',
  a11ySkip: 'Saltar al contenido',

  meta: {
    title: 'Mentara — entrevistas técnicas simuladas con IA para ingenieros',
    description:
      'Mentara hace entrevistas técnicas simuladas realistas con un entrevistador de IA que se adapta, te aprieta y te puntúa en tiempo real — para que la entrevista real se sienta como una repetición. iOS, Android y web.',
    tagline: 'Ensaya la sala.',
    launchLabel: 'Disponible en 2026',
  },

  nav: [
    { label: 'Producto', href: '#product' },
    { label: 'Funciones', href: '#features' },
    { label: 'Precios', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],

  hero: {
    eyebrow: 'Entrevistas simuladas con IA · hecho para ingenieros',
    titleLead: 'Ensaya la sala.',
    titleAccent: 'Antes de que',
    titleTail: 'te ensaye a ti.',
    lede: 'Mentara hace entrevistas técnicas simuladas realistas con un entrevistador de IA que se adapta, te aprieta y te puntúa en tiempo real — para que la entrevista real se sienta como una repetición.',
    availability: 'Disponible en 2026 · iOS, Android y web',
  },

  trust: [
    'Loops estilo FAANG',
    '10+ tracks de práctica',
    'Puntuación en tiempo real',
    'Dificultad adaptativa',
    'iOS · Android · Web',
  ],

  product: {
    eyebrow: 'Un vistazo a la app',
    heading: 'La sala, en cualquier pantalla.',
    lede: 'Una pantalla, una tarea: mantenerte en la entrevista. La pregunta, tu respuesta y la señal en vivo de cómo va — en el móvil o en el navegador, sin nada que distraiga.',
    notes: [
      'Habla o escribe — el entrevistador reacciona igual',
      'La puntuación se mueve mientras hablas, no después',
      'El presupuesto de pistas es visible: lo racionas como en la entrevista real',
    ],
    ui: {
      track: 'system-design · L5',
      timer: '14:22',
      interviewer: 'entrevistador',
      you: 'tú',
      q: 'Tu ruta de escritura está caliente en una clave. ¿Cómo evitas que un nodo se funda?',
      a: 'Saltear la partition key, repartir lecturas entre réplicas y añadir un write-behind…',
      liveScore: 'puntuación',
      hints: 'pistas',
    },
  },

  panel: {
    label: 'session · system-design · L5',
    interviewer: 'entrevistador',
    you: 'tú',
    aiLine: 'Explícame cómo lo shardearías para que una clave caliente no funda un nodo.',
    youLine: 'Añadiría sal a la partition key y repartiría lecturas entre réplicas…',
    of: '/10',
    scores: ['Técnica', 'Comunicación', 'Casos límite', 'Resolución'],
  },

  features: {
    eyebrow: 'Lo que obtienes',
    heading: 'Un sparring, no una app de quiz.',
    items: [
      {
        index: '01',
        title: 'Un entrevistador que contraataca',
        body: 'No un chatbot que lee preguntas. El entrevistador de IA se mantiene en personaje para tu rol, nivel y persona — repregunta, sondea casos límite y aprieta más cuando te relajas.',
      },
      {
        index: '02',
        title: 'Puntuado mientras hablas',
        body: 'Señal en vivo de profundidad técnica, comunicación, casos límite y resolución de problemas — actualizada cada pocos turnos, no enterrada en un análisis posterior.',
      },
      {
        index: '03',
        title: 'Tracks de práctica estructurados',
        body: 'Rondas de Algoritmos, System Design, Behavioral y de Dominio con dificultad calibrada. Entrena la ronda que de verdad temes, no una bolsa al azar.',
      },
      {
        index: '04',
        title: 'Progreso que se acumula',
        body: 'XP, rachas, niveles y logros convierten el empollar disperso en un hábito. Aparece a diario; mira cómo se dobla la curva.',
      },
    ],
  },

  audience: {
    eyebrow: 'Para quién es',
    heading: 'Hecho para el ingeniero en pleno proceso.',
    groups: [
      {
        tag: 'Recién graduados',
        body: 'Convierte el “lo sé en teoría” en “controlo la sala” antes de tu primer onsite.',
      },
      {
        tag: 'Cambios de carrera',
        body: 'Cierra rápido la brecha de fluidez en entrevistas — reps con feedback, no a ciegas.',
      },
      {
        tag: 'Loops senior',
        body: 'Machaca System Design y el interrogatorio nivel staff hasta que el panel real aburra.',
      },
    ],
    versus: {
      them: 'Grindear LeetCode en solitario',
      themPoints: [
        'Nadie aprieta una respuesta vaga',
        'Cero sobre comunicación y estructura',
        'Te calificas tú mismo — con generosidad',
      ],
      us: 'Mentara',
      usPoints: [
        'Un entrevistador que repregunta y escala',
        'Puntúa la comunicación, no solo la respuesta',
        'Un informe honesto + qué arreglar después',
      ],
    },
  },

  steps: {
    eyebrow: 'Cómo funciona',
    heading: 'Tres pasos a un loop sin sudores.',
    items: [
      {
        n: '1',
        title: 'Elige la ronda',
        body: 'Elige track, rol y dificultad. Fija la persona — screening amable o interrogatorio nivel staff.',
      },
      {
        n: '2',
        title: 'Lanza el simulacro en vivo',
        body: 'Razónalo en voz alta o escribe código. El entrevistador se adapta en tiempo real y puntúa cada intercambio.',
      },
      {
        n: '3',
        title: 'Recibe el informe',
        body: 'Un desglose puntuado más un plan de estudio enfocado — justo lo que arreglar antes del loop real.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Precios',
    heading: 'Gratis para empezar. Barato al lado de una oferta perdida.',
    flag: 'Más popular',
    cta: 'Disponible en el lanzamiento',
    foot: 'Los precios son orientativos y se fijan en el lanzamiento.',
    tiers: [
      {
        tier: 'FREE',
        price: '$0',
        cadence: 'para siempre',
        blurb: 'Prueba entrevistas simuladas de verdad.',
        features: [
          'Unas pocas sesiones / mes',
          'Tracks de práctica básicos',
          'Puntuación en vivo',
          'Progreso básico',
        ],
        featured: false,
      },
      {
        tier: 'PRO',
        price: '$19',
        cadence: '/ mes',
        blurb: 'Para el ingeniero en pleno proceso.',
        features: [
          'Sesiones ilimitadas',
          'Informes completos + plan de estudio',
          'Todos los tracks y personas',
          'Progreso gamificado',
        ],
        featured: true,
      },
      {
        tier: 'ENTERPRISE',
        price: 'Custom',
        cadence: 'hablemos',
        blurb: 'Bootcamps, cohortes universitarias y equipos.',
        features: [
          'Asientos y gestión de cohortes',
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
        a: 'Ese es justo el objetivo. El entrevistador mantiene una persona, repregunta, desafía respuestas flojas y escala la dificultad — silencios incómodos incluidos.',
      },
      {
        q: '¿Tengo que programar en voz alta?',
        a: 'Tú decides. Razona en voz alta, escribe código o ambas. Las rondas behavioral y de system design son conversación primero; las de algoritmos te dejan enviar código.',
      },
      {
        q: '¿Qué tracks cubre?',
        a: 'Rondas de Algoritmos, System Design, Behavioral y de Dominio, por roles y niveles de seniority, con una dificultad que se calibra a ti.',
      },
      {
        q: '¿Cuándo y dónde se lanza?',
        a: 'Mentara se lanza en 2026 en iOS, Android y web. Las fichas en las tiendas y la app web salen en el lanzamiento — esta página es el adelanto.',
      },
      {
        q: '¿Los datos de mi sesión son privados?',
        a: 'Tus transcripciones y puntuaciones son tuyas. Alimentan tus informes y tu progreso y no se venden. Una política de privacidad completa llega con las apps.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Acceso anticipado',
    heading: 'Entra antes de que lo haga el loop.',
    sub: 'Únete a la lista de espera — entérate del lanzamiento el primero, sin spam.',
    label: 'Correo electrónico',
    placeholder: 'tu@empresa.dev',
    cta: 'Unirme a la lista',
    sending: 'Enviando…',
    success: 'Estás en la lista. Te escribiremos en el lanzamiento.',
    error: 'Algo falló de nuestro lado. Inténtalo de nuevo en un momento.',
    offNote: 'Abre pronto — define PUBLIC_FORMSPREE_ENDPOINT para activar el formulario.',
  },

  cta: {
    eyebrow: 'Disponible en 2026',
    titleLead: 'El próximo loop ya viene.',
    titleAccent: 'Entra ensayado.',
    lede: 'Mentara llega en 2026 a iOS, Android y web. Consigue el email de lanzamiento — y practica hasta que lo real aburra.',
  },

  badges: {
    ariaGroup: 'Apps — próximamente',
    comingSoon: 'Próximamente en',
    ios: 'App Store',
    android: 'Google Play',
    web: 'la Web',
  },

  footer: {
    blurb: 'Entrevistas simuladas con IA para ingenieros — iOS, Android y web.',
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
    message: 'Esta ruta nunca compiló. La página que buscas no existe — o aún no se ha publicado.',
    back: 'Volver al inicio',
  },
};
