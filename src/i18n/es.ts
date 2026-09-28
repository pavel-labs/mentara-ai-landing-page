import type { Dict } from './types';

export const es: Dict = {
  langName: 'Español',
  ogLocale: 'es_ES',
  a11ySkip: 'Saltar al contenido',
  a11yMenu: 'Menú',

  meta: {
    title:
      'Mentara – práctica de entrevistas técnicas con IA y evaluaciones de código para desarrolladores',
    description:
      'Practica entrevistas técnicas estructuradas con un entrevistador de IA que repregunta sobre tus respuestas, resuelve evaluaciones de código calificadas con tests ocultos y recibe un informe que muestra tus puntos débiles con evidencia. Planes Free y Pro, y Enterprise para equipos.',
    tagline: 'Practica la entrevista, no solo las preguntas.',
    launchLabel: 'Disponible en 2026',
  },

  nav: [
    { label: 'Entrevistas', href: '#interview' },
    { label: 'Evaluaciones', href: '#assessments' },
    { label: 'Precios', href: '#pricing' },
    { label: 'Equipos', href: '/enterprise' },
    { label: 'Blog', href: '/blog' },
  ],

  hero: {
    eyebrow: 'Práctica de entrevistas para desarrolladores y equipos',
    titleLead: 'Practica la entrevista técnica,',
    titleAccent: 'no solo las preguntas.',
    lede: 'Mentara hace una entrevista estructurada para tu rol y tu stack, repregunta sobre lo que realmente dijiste, califica tu código con tests ocultos y te da un informe que señala tus puntos débiles – para que la siguiente sesión vaya a por ellos.',
    availability: 'Disponible en 2026 · Web, iOS y Android',
    teamsLink: 'Para equipos de ingeniería',
  },

  proof: [
    'Frontend · Backend · Algoritmos',
    '19 tecnologías',
    'De junior a senior',
    '15, 30 o 60 minutos',
    'Escribe o habla',
    '5 idiomas de entrevista',
  ],

  why: {
    eyebrow: 'Por qué practicar aquí',
    heading: 'Leer respuestas no es lo mismo que darlas.',
    lede: 'Casi toda la preparación acaba en una lista de preguntas leídas. Una entrevista te pide explicar, aprieta en la parte débil y sigue adelante estés listo o no. Eso es lo que Mentara te deja practicar.',
    them: {
      label: 'Listas de preguntas y un chatbot genérico',
      points: [
        'Tú eliges las preguntas, así que eliges las fáciles',
        'Nadie pregunta «¿por qué?» tras una respuesta vaga',
        'El código nunca se ejecuta: «parece correcto» cuenta como correcto',
        'Te calificas tú, y cada sesión empieza de cero',
      ],
    },
    us: {
      label: 'Una sesión de Mentara',
      points: [
        'Una entrevista cronometrada para tu rol, nivel y stack, con estructura fija',
        'Repreguntas construidas sobre tu propia respuesta',
        'Evaluaciones de código calificadas con tests que no ves',
        'Un informe con evidencia, y puntos débiles que guían tu próxima sesión',
      ],
    },
  },

  interview: {
    eyebrow: 'Entrevistas con IA',
    heading: 'Una entrevista estructurada que reacciona a tus respuestas.',
    lede: 'Cada entrevista pasa por calentamiento, preguntas técnicas, una inmersión a fondo y un cierre. El entrevistador repregunta sobre lo que dijiste, acota la pregunta cuando te atascas y va más allá cuando la respuesta es buena.',
    steps: [
      {
        title: 'Elige tu rol',
        body: 'Frontend, backend o algoritmos, en nivel junior, middle o senior.',
      },
      {
        title: 'Elige tu stack',
        body: 'Hasta seis tecnologías: React, TypeScript, Node.js, system design y más.',
      },
      {
        title: 'Configura la entrevista',
        body: '15, 30 o 60 minutos, uno de tres entrevistadores, feedback estricto o de apoyo, en uno de cinco idiomas.',
      },
      {
        title: 'Responde en voz alta o por escrito',
        body: 'Escribe, o habla y tu respuesta se transcribe. Hasta tres pistas si te atascas.',
      },
      {
        title: 'Recibe tu informe',
        body: 'Puntuaciones, evidencia y una ruta de aprendizaje en cuanto termina la entrevista.',
      },
    ],
    honesty:
      'Es un entrevistador de IA, no una persona. Está hecho para llevar una entrevista técnica consistente y estructurada – y tus últimas sesiones influyen en lo que pregunta después.',
    mock: {
      label: 'Entrevista · Frontend · Senior · 30 min',
      phases: ['Calentamiento', 'Técnica', 'A fondo', 'Cierre'],
      interviewer: 'Entrevistador',
      you: 'Tú',
      q: 'Tu lista se vuelve a renderizar con cada tecla en el buscador. ¿Cómo averiguarías por qué?',
      a: 'Abriría el React Profiler, grabaría una pulsación y miraría qué componentes se renderizaron y por qué…',
      followUp:
        'Supón que el profiler muestra que se renderiza toda la lista. ¿Cuáles son las dos causas más probables?',
      hints: 'Quedan 2 de 3 pistas',
      voice: 'Toca para responder',
    },
  },

  assessment: {
    eyebrow: 'Evaluaciones de código',
    heading: 'Escribe el código. Los tests ocultos lo califican.',
    lede: 'El código tiene su propio espacio en Mentara: una evaluación aparte, con tiempo, editor, ejemplos ejecutables y un envío real. La entrevista sigue siendo una conversación; la evaluación comprueba el código.',
    steps: [
      {
        title: 'Lee el problema',
        body: 'De uno a cinco problemas, con ejemplos. Si la evaluación tiene temporizador, lo aplica el servidor.',
      },
      {
        title: 'Escribe tu solución',
        body: 'JavaScript, TypeScript, Python, Java, Go o C++. Puedes cambiar de lenguaje a mitad del intento.',
      },
      {
        title: 'Ejecuta los ejemplos',
        body: 'Ejecuta los ejemplos visibles o tu propia entrada tantas veces como quieras antes de enviar.',
      },
      {
        title: 'Envía',
        body: 'Tu código se califica con tests ocultos que nunca salen del servidor.',
      },
      {
        title: 'Lee la revisión',
        body: 'Una revisión con IA de calidad del código, eficiencia y legibilidad, por problema, con puntos fuertes y débiles.',
      },
    ],
    separate:
      '¿Por qué por separado? Explicar un diseño y escribir código que funciona son habilidades distintas. Mezclarlas en un chat oculta cuál necesita trabajo.',
    mock: {
      label: 'Evaluación de código · 2 problemas',
      timer: 'quedan 38:12',
      problem: 'Fusionar intervalos solapados',
      run: 'Ejecutar ejemplos',
      submit: 'Enviar',
      examples: 'Ejemplos',
      passed: '3 / 3 superados',
      review: 'Revisión',
      reviewLines: [
        'Correcto en casos límite: entrada vacía, intervalos que se tocan',
        'O(n log n): domina la ordenación',
        'Conviene dar un nombre más claro al acumulador',
      ],
    },
  },

  report: {
    eyebrow: 'Feedback',
    heading: 'Sabe exactamente qué mejorar después.',
    lede: 'La entrevista termina con un informe, no con una palmadita en la espalda. Cada puntuación está ligada a algo que dijiste, y las carencias se convierten en tu próximo plan de práctica.',
    points: [
      {
        title: 'Puntuaciones que puedes rastrear',
        body: 'Global, más profundidad técnica, comunicación, casos límite y resolución de problemas. Salen de la evidencia en tus respuestas, no de un número que se inventa el modelo.',
      },
      {
        title: 'Resultados por competencia',
        body: 'Cada habilidad que cubrió la entrevista se marca como fuerte, sólida, en desarrollo o a mejorar – o «no evaluada» cuando no hubo evidencia suficiente.',
      },
      {
        title: 'Puntos fuertes y débiles',
        body: 'Qué fue bien, qué mejorar, y citas de tus propias respuestas que muestran por qué.',
      },
      {
        title: 'Una ruta de aprendizaje',
        body: 'Temas priorizados con una estimación de tiempo. Tu próxima entrevista retoma tus puntos débiles.',
      },
    ],
    mock: {
      label: 'Tu informe',
      overall: 'Global',
      categories: ['Técnica', 'Comunicación', 'Casos límite', 'Resolución'],
      competencyTitle: 'Por competencia',
      competencies: [
        { name: 'Renderizado en React', band: 'Fuerte' },
        { name: 'Gestión de estado', band: 'Sólida' },
        { name: 'Rendimiento web', band: 'En desarrollo' },
      ],
      evidenceTitle: 'Evidencia de tus respuestas',
      evidence:
        '«Memoizaría el componente de fila»: arreglo correcto, pero nunca se nombró la causa (un callback nuevo en cada render).',
      nextTitle: 'Siguiente foco',
      next: 'Rendimiento web · ~3 h',
    },
  },

  progress: {
    eyebrow: 'Sigue adelante',
    heading: 'Un motivo para volver mañana.',
    lede: 'La habilidad para entrevistas se pierde sin práctica. Los retos diarios te dan una tarea pequeña y concreta cada día, basada en tu propio historial.',
    points: [
      {
        title: 'Retos diarios',
        body: 'Hasta tres al día: terminar sin pistas, superar tu última puntuación, repasar un punto débil, practicar una tecnología.',
      },
      {
        title: 'Rachas y niveles',
        body: 'La XP te lleva de Intern a CTO. Una congelación de racha cubre algún día perdido.',
      },
      {
        title: 'Logros',
        body: 'Recorridos de constancia, mejora, roles y tecnologías – se ganan practicando, no abriendo la app.',
      },
      {
        title: 'Progreso en el tiempo',
        body: 'Tu evolución de puntuación, tus puntos débiles recurrentes y todos tus informes en un solo lugar.',
      },
    ],
    mock: {
      label: 'Reto de hoy',
      challenges: [
        { title: 'Completa una entrevista', xp: '+30 XP', done: true },
        { title: 'Termina sin pistas', xp: '+50 XP', done: false },
        { title: 'Repasa Rendimiento web', xp: '+80 XP', done: false },
      ],
      streak: 'Racha de 12 días',
      level: 'Nivel · Mid',
    },
  },

  pricing: {
    eyebrow: 'Precios',
    heading: 'Empieza gratis. Mejora cuando estés buscando trabajo en serio.',
    flag: 'Para búsquedas activas',
    foot: 'El precio de Pro se fija en el lanzamiento y se muestra en la tienda de apps y en la web antes de pagar.',
    tiers: [
      {
        tier: 'Free',
        price: '0 $',
        cadence: 'para siempre',
        blurb: 'Todo lo que necesitas para practicar con regularidad.',
        features: [
          '5 entrevistas de texto cada 30 días',
          '3 entrevistas de voz cada 30 días',
          'Informe completo tras cada entrevista',
          'Todos los roles, niveles y tecnologías',
          'Evaluaciones de código',
          'Retos diarios y logros',
        ],
        featured: false,
        cta: 'Apuntarme a la lista',
        href: '#waitlist',
      },
      {
        tier: 'Pro',
        price: 'TBA',
        cadence: 'precio al lanzamiento',
        blurb: 'Para las semanas en que te estás entrevistando de verdad.',
        features: [
          'Todo lo de Free',
          'Entrevistas de texto ilimitadas',
          'Entrevistas de voz ilimitadas',
          'Modo realista: muestra dónde te atascaste y cuánto valdría la sesión sin ayuda externa',
        ],
        featured: true,
        cta: 'Apuntarme a la lista',
        href: '#waitlist',
      },
      {
        tier: 'Enterprise',
        price: 'A medida',
        cadence: 'por puesto',
        blurb: 'Para equipos de ingeniería y contratación.',
        features: [
          'Pro para cada puesto',
          'Entrevistas de empresa con vuestro stack',
          'Invitaciones a candidatos con consentimiento',
          'Informe de equipo respetuoso con la privacidad',
          'Prueba de 14 días con 5 puestos',
        ],
        featured: false,
        cta: 'Hablemos',
        href: '/enterprise#contact',
      },
    ],
  },

  teamsBand: {
    eyebrow: 'Mentara para equipos',
    heading: 'Práctica de entrevistas y cribado consistentes para equipos de ingeniería.',
    lede: 'Da a tus ingenieros práctica estructurada con vuestro stack, y a los candidatos la misma entrevista siempre – sin convertir la práctica en vigilancia.',
    points: [
      {
        title: 'Entrevistas de empresa',
        body: 'Fija una vez el rol, nivel, stack, duración y preguntas semilla. Todos reciben la misma entrevista.',
      },
      {
        title: 'Invitaciones a candidatos',
        body: 'Envía un enlace de un solo uso. El candidato consiente primero; tú ves el informe, no la transcripción.',
      },
      {
        title: 'Informe de equipo',
        body: 'Actividad por persona y medias de habilidad solo para grupos de cinco o más. Nadie lee la transcripción de un empleado.',
      },
    ],
    cta: 'Ver Mentara para equipos',
  },

  faq: {
    eyebrow: 'FAQ',
    heading: 'Respuestas claras.',
    items: [
      {
        q: '¿En qué se diferencia de pedirle preguntas de entrevista a ChatGPT?',
        a: 'Un chatbot responde lo que le preguntas. Mentara dirige la entrevista: tiene estructura fija y límite de tiempo, repregunta cuando tu respuesta es débil, te puntúa con evidencia según una rúbrica, ejecuta tu código contra tests ocultos y recuerda tus últimas sesiones.',
      },
      {
        q: '¿El entrevistador de IA es como una persona real?',
        a: 'No, y no fingimos que lo sea. Está hecho para llevar una entrevista técnica consistente: repreguntas, reloj y estructura. Es práctica para la de verdad, no un sustituto.',
      },
      {
        q: '¿Puedo escribir código?',
        a: 'Sí, en una evaluación de código: editor, ejemplos ejecutables, temporizador si la evaluación lo tiene y tests ocultos al enviar. La entrevista en sí es una conversación hablada o escrita.',
      },
      {
        q: '¿Puedo responder en voz alta?',
        a: 'Sí. Toca el micrófono, habla y tu respuesta se transcribe. El plan Free incluye 3 entrevistas de voz cada 30 días; Pro no tiene límite.',
      },
      {
        q: '¿Qué ve mi empresa si usa Mentara?',
        a: 'Solo tu fecha de alta, cuántas entrevistas hiciste en los últimos 30 días y cuándo estuviste activo por última vez. Las medias de habilidad del equipo aparecen solo cuando han contribuido al menos cinco personas. Ningún rol de una organización puede leer tus transcripciones ni tus informes individuales.',
      },
      {
        q: '¿Cuándo puedo usarlo?',
        a: 'Mentara se lanza en 2026 en la web, iOS y Android. Apúntate a la lista de espera y te escribiremos cuando abra.',
      },
    ],
  },

  waitlist: {
    eyebrow: 'Acceso anticipado',
    heading: 'Apúntate a la lista de espera.',
    sub: 'Apúntate a la lista – entérate del lanzamiento el primero, sin spam.',
    label: 'Correo electrónico',
    placeholder: 'tu@empresa.dev',
    cta: 'Apuntarme',
    sending: 'Enviando…',
    success: 'Listo, estás en la lista. Te escribimos en el lanzamiento.',
    error: 'Algo se rompió por nuestro lado. Vuelve a intentarlo en un momento.',
    offNote: 'Abre pronto – define PUBLIC_FORMSPREE_ENDPOINT para activar el formulario.',
    devBuild: 'Enviadme también la compilación de desarrollo',
    devBuildNote:
      'Inestable, incompleta y actualizada sin aviso: espera fallos y datos que se borran.',
  },

  cta: {
    eyebrow: 'Disponible en 2026',
    titleLead: 'Tu próxima entrevista se acerca.',
    titleAccent: 'Practica antes de que llegue.',
    lede: 'Mentara abre en la web, iOS y Android en 2026. Apúntate a la lista de espera y te escribiremos ese mismo día.',
  },

  enterprise: {
    metaTitle: 'Mentara para equipos – práctica de entrevistas técnicas y cribado de candidatos',
    metaDescription:
      'Práctica de entrevistas con IA y evaluaciones de código para equipos de ingeniería: entrevistas de empresa con vuestro stack, invitaciones a candidatos con consentimiento y un informe de equipo que nunca expone transcripciones individuales.',
    hero: {
      eyebrow: 'Mentara para equipos',
      title: 'Entrevistas técnicas estructuradas para todo tu equipo.',
      lede: 'Ayuda a tus ingenieros a mantenerse en forma y evalúa a los candidatos siempre igual. Mentara da a tu organización entrevistas específicas de la empresa, evaluaciones de código e informes – con límites claros sobre lo que pueden ver los responsables.',
      primary: 'Hablemos',
      secondary: 'Lee: cómo usan los equipos la práctica de entrevistas con IA',
    },
    useCases: {
      eyebrow: 'Dos usos',
      heading: 'Haz crecer a tus ingenieros. Evalúa candidatos de forma consistente.',
      items: [
        {
          tag: 'Formación',
          title: 'Práctica estructurada para tus ingenieros',
          body: 'La habilidad para entrevistas se pierde entre cambios de trabajo y ascensos. Los puestos dan a cada ingeniero práctica de nivel Pro con el stack que vuestro equipo usa de verdad.',
          points: [
            'Práctica de nivel Pro para cada puesto',
            'Entrevistas de empresa con vuestras tecnologías y nivel',
            'Un informe de equipo hecho de agregados, no de transcripciones',
          ],
        },
        {
          tag: 'Contratación',
          title: 'La misma primera entrevista para cada candidato',
          body: 'Una entrevista de empresa fija el rol, nivel, stack, duración, idioma y vuestras preguntas semilla, para comparar a los candidatos en igualdad de condiciones.',
          points: [
            'Enlaces de un solo uso que solo se abren con el correo invitado',
            'El candidato ve un aviso claro y consiente primero',
            'Recibes el informe y los resultados de los tests – no la transcripción ni el código',
          ],
        },
      ],
    },
    steps: {
      eyebrow: 'Cómo funciona',
      heading: 'De la primera llamada a la primera entrevista.',
      items: [
        {
          title: 'Hablemos',
          body: 'Cuéntanos sobre tu equipo y si buscáis contratar, formar o ambas cosas.',
        },
        {
          title: 'Empieza la prueba',
          body: 'Activamos vuestra organización: 14 días, 5 puestos, 10 invitaciones a candidatos.',
        },
        {
          title: 'Invita a tu equipo',
          body: 'Comparte un enlace de invitación. Owners y admins gestionan puestos y roles.',
        },
        {
          title: 'Crea entrevistas de empresa',
          body: 'Elige rol, nivel y stack, y añade hasta 30 preguntas semilla con los conceptos que esperas.',
        },
        {
          title: 'Practica e invita',
          body: 'Los ingenieros practican; los reclutadores envían invitaciones a candidatos y leen los resultados.',
        },
      ],
    },
    privacy: {
      eyebrow: 'Privacidad desde el diseño',
      heading: 'Practicar solo funciona si nadie te está vigilando.',
      lede: 'Los ingenieros practican con honestidad cuando sus errores son privados. Por eso los límites están dentro del producto, no en una política.',
      sees: {
        label: 'Lo que ve la organización',
        points: [
          'Fecha de alta, entrevistas de los últimos 30 días y última actividad de cada miembro',
          'Medias de habilidad del equipo – solo si han contribuido al menos cinco personas',
          'De candidatos que consintieron: el informe y los resultados de la evaluación',
        ],
      },
      never: {
        label: 'Lo que ningún rol puede ver',
        points: [
          'La transcripción de la entrevista de un empleado',
          'El informe o las puntuaciones individuales de un empleado',
          'La transcripción o el código enviado por un candidato',
        ],
      },
    },
    roles: {
      eyebrow: 'Roles',
      heading: 'Cuatro roles, cada uno con una tarea clara.',
      items: [
        { role: 'Owner', body: 'Todo, incluida la gestión de otros owners.' },
        {
          role: 'Admin',
          body: 'Miembros e invitaciones, entrevistas de empresa, invitaciones a candidatos e informe de equipo.',
        },
        {
          role: 'Recruiter',
          body: 'Usa las entrevistas de empresa para enviar y gestionar invitaciones a candidatos.',
        },
        { role: 'Member', body: 'Practica, también con vuestras entrevistas de empresa.' },
      ],
    },
    notYet: {
      heading: 'Todavía no disponible',
      lede: 'Preferimos decirlo ahora que en una reunión de compras.',
      items: [
        'SSO y aprovisionamiento SCIM',
        'Integraciones con ATS',
        'Marca personalizada',
        'Problemas de código creados por la empresa',
        'Compra self-service – los contratos se acuerdan con nosotros',
      ],
    },
    article: {
      eyebrow: 'Para leer más',
      title:
        'Práctica de entrevistas con IA para equipos de ingeniería: qué puede y qué no (en inglés)',
      cta: 'Leer el artículo',
    },
    form: {
      eyebrow: 'Hablemos',
      heading: 'Cuéntanos sobre tu equipo.',
      sub: 'Respondemos por correo, normalmente en dos días laborables.',
      name: 'Tu nombre',
      email: 'Correo del trabajo',
      company: 'Empresa',
      teamSize: 'Tamaño del equipo',
      useCase: '¿Qué necesitáis?',
      useCases: {
        upskilling: 'Práctica para nuestros ingenieros',
        hiring: 'Cribado de candidatos',
        both: 'Ambas cosas',
      },
      message: '¿Algo más?',
      messageHint: 'Stack, plazos, número de candidatos – opcional.',
      submit: 'Enviar',
      sending: 'Enviando…',
      success: 'Gracias – hemos recibido tu mensaje y te responderemos por correo.',
      invalid: 'Revisa los campos de arriba y vuelve a intentarlo.',
      rateLimited: 'Demasiadas solicitudes desde esta red. Inténtalo de nuevo en una hora.',
      error: 'Algo falló por nuestro lado. Vuelve a intentarlo en un momento.',
      offNote: 'El formulario de contacto abrirá en breve.',
      privacyNote: 'Solo usamos estos datos para responderte.',
    },
  },

  contentHub: {
    compare: {
      eyebrow: 'Comparar',
      title: 'Elige el método de preparación que de verdad necesitas.',
      lede: 'Páginas de comparación para quienes dudan entre drills en solitario, mocks con otra persona, práctica por voz, herramientas de IA y coaching.',
      primary: 'Ver páginas de comparación',
      secondary: 'Ver todos los recursos',
    },
    resources: {
      eyebrow: 'Recursos',
      title: 'Rutas de lectura estructuradas para preparar entrevistas técnicas.',
      lede: 'Puntos de entrada agrupados para quienes comparan herramientas, practican system design, afinan respuestas behavioral, se preparan para loops senior y staff – y para equipos.',
    },
    blog: {
      eyebrow: 'Recursos',
      title: 'Estrategia de preparación, comparativas y notas de producto.',
      lede: 'Artículos prácticos para preparar entrevistas técnicas – y sobre cómo los equipos pueden organizar la práctica de entrevistas a escala.',
      primary: 'Ver todos los artículos',
      pathsEyebrow: 'Rutas de lectura',
      pathsTitle: 'Agrupados según lo que estás preparando.',
    },
  },

  badges: {
    ariaGroup: 'Apps – próximamente',
    comingSoon: 'Próximamente en',
    ios: 'App Store',
    android: 'Google Play',
    web: 'la Web',
  },

  footer: {
    blurb:
      'Práctica de entrevistas técnicas y evaluaciones de código para desarrolladores y equipos.',
    explore: 'Explorar',
    legal: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
  },

  legal: {
    privacyTitle: 'Política de privacidad',
    termsTitle: 'Términos del servicio',
    draftNotice:
      'Borrador – no es asesoramiento legal. Se revisará con asesoría jurídica antes del lanzamiento; la versión en inglés es la auténtica.',
    updated: 'Última actualización',
    back: 'Volver al inicio',
  },

  notFound: {
    eyebrow: 'Error',
    message: 'Esta página no existe – o todavía no se ha publicado.',
    back: 'Volver al inicio',
  },
};
