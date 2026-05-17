import { generateOpenGraphImage } from 'astro-og-canvas';
import type { APIRoute } from 'astro';

// Build-time generated 1200×630 social card (real raster — SVG OG doesn't render on
// Slack / iMessage / LinkedIn / X). Output: <base>/og.png.
export const GET: APIRoute = async () => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call
  const png = await generateOpenGraphImage({
    title: 'Rehearse the room.',
    description: 'AI mock technical interviews that push back — and score you live. Coming 2026.',
    bgGradient: [
      [16, 15, 18],
      [11, 11, 13],
    ],
    border: { color: [255, 106, 43], width: 10, side: 'inline-start' },
    padding: 80,
    font: {
      title: { color: [236, 231, 221], size: 88, weight: 'Bold', lineHeight: 1.1 },
      description: { color: [165, 160, 151], size: 34, lineHeight: 1.35 },
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
