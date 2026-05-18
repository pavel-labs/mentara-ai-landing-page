import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// Changelog / launch-updates collection. English-only by design (a pre-launch
// single-language changelog; localizing posts is deliberate non-scope for now).
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
