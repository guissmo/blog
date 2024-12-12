// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().optional().default(false),
    tags: z.array(z.string()).optional(),
    category: z.string().optional().default("Unclassified"),
    description: z.string().optional(),
    // optional dictionary of nearby posts
    nearbyPosts: z
      .object({
        withinCategory: z
          .object({
            next: z
              .object({
                title: z.string().optional(),
                slug: z.string().optional(),
              })
              .optional(),
            previous: z
              .object({
                title: z.string().optional(),
                slug: z.string().optional(),
              })
              .optional(),
          })
          .optional(),
        next: z
          .object({
            title: z.string().optional(),
            slug: z.string().optional(),
          })
          .optional(),
        previous: z
          .object({
            title: z.string().optional(),
            slug: z.string().optional(),
          })
          .optional(),
      })
      .optional(),
  }),
});

const workCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    position: z.string(),
    company: z.string(),
    month_s: z.number().gte(1).lte(12).optional(),
    year_s: z.number().gte(1992),
    month_e: z.number().gte(1).lte(12).optional(),
    year_e: z.number().gte(1992).optional(),
    url: z.string().optional(),
  }),
});

const cvCollection = defineCollection({
  type: "data",
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  blog: blogCollection,
  work: workCollection,
};
