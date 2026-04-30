import { defineCollection, z } from "astro:content";

const resultsRow = z.object({
  position: z.string().min(1),
  player: z.string().min(1),
  points: z.union([z.number(), z.string()]).optional(),
  notes: z.string().optional()
});

const competition = z.object({
  title: z.string().min(1),
  subtitle: z.string().optional(),
  rows: z.array(resultsRow).default([])
});

const tours = defineCollection({
  type: "content",
  schema: z.object({
    year: z.number().int().min(1990).max(2100),
    venue: z.string().min(1),
    captain: z.string().min(1),
    dates: z.string().min(1),
    heroImage: z.string().optional(),
    highlights: z.string().optional(),
    competitions: z.array(competition).default([]),
    gallery: z.array(z.string()).default([])
  })
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    navOrder: z.number().int().optional(),
    body: z.string().optional()
  })
});

export const collections = { tours, pages };
