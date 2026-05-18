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
      [16, 15, 18],
      [11, 11, 13],
    ],
    border: { color: [255, 106, 43], width: 10, side: 'inline-start' },
    padding: 80,
    font: {
      title: { color: [236, 231, 221], size: 80, weight: 'Bold', lineHeight: 1.1 },
      description: { color: [165, 160, 151], size: 32, lineHeight: 1.35 },
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
