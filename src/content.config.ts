import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    institution: z.string(),
    period: z.string(),
    question: z.string(),
    summary: z.string(),
    featured: z.boolean().default(false),
    order: z.number(),
    methods: z.array(z.string()),
    collaborators: z.array(z.string()).default([]),
    figure: z.enum(['paleomag', 'moma', 'wetlab', 'exoplanets']),
    figureCaption: z.string(),
    statusLabel: z.string().optional(),
  }),
});

export const collections = { research };
