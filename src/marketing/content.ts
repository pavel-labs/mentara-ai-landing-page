import { API } from '../consts';
import { getDict, type Locale } from '../i18n';
import snapshot from './snapshot.generated.json';
import type { IMarketingLanding, IMarketingLinks, IMarketingSnapshot } from './types.generated';

export type MarketingSnapshot = Omit<IMarketingSnapshot, 'pricing'> & {
  pricing: IMarketingSnapshot['pricing'] | null;
};
// The prebuild fetch validates this JSON against the generated shared contract.
export const marketingSnapshot = snapshot as MarketingSnapshot;
export const safeUrl = (value: string | undefined): string | null => {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
  } catch {
    return null;
  }
};
export const storeUrl = (value: string | undefined, store: 'apple' | 'google'): string | null => {
  const url = safeUrl(value);
  if (!url) return null;
  return (store === 'apple'
    ? /^https:\/\/apps\.apple\.com\/(?:[a-z]{2}\/)?app\/(?:[^/?#]+\/)?id\d+(?:[/?#].*)?$/
    : /^https:\/\/play\.google\.com\/store\/apps\/details\?(?:[^#]*&)?id=[a-zA-Z0-9._-]+(?:[&#].*)?$/
  ).test(url)
    ? url
    : null;
};
export const marketingLinks = (locale: Locale): IMarketingLinks =>
  marketingSnapshot.landing.find((page) => page.locale === locale)?.links ?? {
    webAppUrl: safeUrl(import.meta.env.PUBLIC_WEB_APP_URL),
    appStoreUrl: storeUrl(import.meta.env.PUBLIC_APP_STORE_URL, 'apple'),
    googlePlayUrl: storeUrl(import.meta.env.PUBLIC_GOOGLE_PLAY_URL, 'google'),
    social: [],
  };
export const marketingLanding = (locale: Locale) =>
  marketingSnapshot.landing.find((page) => page.locale === locale) ?? null;
const quickPractice = {
  en: {
    title: 'Quick Practice',
    description:
      'Short developer exercises with immediate explanations. Practice a focused topic between mock interviews.',
  },
  de: {
    title: 'Quick Practice',
    description:
      'Kurze Entwickleraufgaben mit direkten Erklärungen. Übe einzelne Themen zwischen Probeinterviews.',
  },
  es: {
    title: 'Quick Practice',
    description:
      'Ejercicios breves con explicaciones inmediatas. Practica un tema entre simulaciones de entrevistas.',
  },
  ru: {
    title: 'Quick Practice',
    description:
      'Короткие задания для разработчиков с пояснениями. Тренируйте отдельные темы между пробными интервью.',
  },
  pl: {
    title: 'Quick Practice',
    description:
      'Krótkie zadania z natychmiastowym wyjaśnieniem. Ćwicz wybrany temat między próbnymi rozmowami.',
  },
};
export const defaultLanding = (locale: Locale): IMarketingLanding => {
  const t = getDict(locale);
  return {
    locale,
    hero: {
      eyebrow: t.hero.eyebrow,
      heading: `${t.hero.titleLead} ${t.hero.titleAccent}`,
      description: t.hero.lede,
      ctaLabel: marketingLabels(locale).open,
      image: null,
    },
    features: [
      {
        id: 'mock-interviews',
        title: t.interview.heading,
        description: t.interview.lede,
        enabled: true,
        image: null,
      },
      { id: 'quick-practice', ...quickPractice[locale], enabled: true, image: null },
      {
        id: 'coding-assessments',
        title: t.assessment.heading,
        description: t.assessment.lede,
        enabled: true,
        image: null,
      },
      {
        id: 'progress',
        title: t.progress.heading,
        description: t.progress.lede,
        enabled: true,
        image: null,
      },
      {
        id: 'enterprise',
        title: t.teamsBand.heading,
        description: t.teamsBand.lede,
        enabled: true,
        image: null,
      },
    ],
    pricing: {
      heading: t.pricing.heading,
      description: t.pricing.foot,
      freeDescription: t.pricing.tiers[0]?.blurb ?? '',
      proDescription: t.pricing.tiers[1]?.blurb ?? '',
      enterpriseDescription: t.pricing.tiers[2]?.blurb ?? '',
    },
    faq: t.faq.items.map((item) => ({ question: item.q, answer: item.a, enabled: true })),
    links: marketingLinks(locale),
    seo: { title: t.meta.title, description: t.meta.description, image: null },
    footerDescription: t.footer.blurb,
  };
};
const labels = {
  en: {
    open: 'Open web app',
    articles: 'Articles',
    read: 'Read article',
    prices: 'See prices in the app',
    contact: 'Talk to us',
    month: '/ month · USD reference',
    coming: 'Coming soon',
    available: 'Available now',
    products: 'Build your next step',
    faq: 'Questions, answered',
  },
  de: {
    open: 'Web-App öffnen',
    articles: 'Artikel',
    read: 'Artikel lesen',
    prices: 'Preise in der App',
    contact: 'Kontakt aufnehmen',
    month: '/ Monat · USD-Richtpreis',
    coming: 'Demnächst',
    available: 'Jetzt verfügbar',
    products: 'Dein nächster Schritt',
    faq: 'Fragen und Antworten',
  },
  es: {
    open: 'Abrir aplicación web',
    articles: 'Artículos',
    read: 'Leer artículo',
    prices: 'Ver precios en la app',
    contact: 'Contactar',
    month: '/ mes · referencia USD',
    coming: 'Próximamente',
    available: 'Disponible',
    products: 'Tu próximo paso',
    faq: 'Preguntas frecuentes',
  },
  ru: {
    open: 'Открыть веб-приложение',
    articles: 'Статьи',
    read: 'Читать статью',
    prices: 'Цены в приложении',
    contact: 'Связаться с нами',
    month: '/ месяц · цена в USD',
    coming: 'Скоро',
    available: 'Уже доступно',
    products: 'Следующий шаг в развитии',
    faq: 'Вопросы и ответы',
  },
  pl: {
    open: 'Otwórz aplikację web',
    articles: 'Artykuły',
    read: 'Czytaj artykuł',
    prices: 'Ceny w aplikacji',
    contact: 'Porozmawiaj z nami',
    month: '/ miesiąc · cena w USD',
    coming: 'Wkrótce',
    available: 'Dostępne',
    products: 'Twój następny krok',
    faq: 'Pytania i odpowiedzi',
  },
};
export const marketingLabels = (locale: Locale) => labels[locale];
export const publishedArticles = (locale: Locale) =>
  marketingSnapshot.articles
    .filter((article) => article.locale === locale)
    .toSorted((a, b) => b.publishedAt.localeCompare(a.publishedAt));
export { API };
