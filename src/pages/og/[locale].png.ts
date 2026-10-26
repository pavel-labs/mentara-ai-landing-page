import type { APIRoute, GetStaticPaths } from 'astro';
import { generateOpenGraphImage } from 'astro-og-canvas';
import { SITE } from '../../consts';
import { LOCALES, getDict, type Locale } from '../../i18n';

// One build-time social card per locale → /og/<locale>.png. Shared links render a
// native-language card (SVG OG doesn't render on Slack/iMessage/LinkedIn/X).
export const getStaticPaths: GetStaticPaths = () =>
  LOCALES.map((locale) => ({ params: { locale } }));

export const GET: APIRoute = async ({ params }) => {
  const locale = params.locale as Locale;
  const t = getDict(locale).meta;

  const png = await generateOpenGraphImage({
    title: `${SITE.name} · ${t.tagline}`,
    description: t.description,
    bgGradient: [
      [247, 248, 244],
      [238, 241, 233],
    ],
    border: { color: [43, 97, 59], width: 10, side: 'inline-start' },
    padding: 80,
    font: {
      title: { color: [24, 32, 25], size: 80, weight: 'Bold', lineHeight: 1.1 },
      description: { color: [83, 95, 83], size: 32, lineHeight: 1.35 },
    },
    format: 'PNG',
  });

  return new Response(png, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=86400',
    },
  });
};
