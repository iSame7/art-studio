import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			// tags: z.array(z.string()),
			img: z.string(),
			img_2: z.string(),
			img_3: z.string(),
			img_4: z.string(),
			img_5: z.string(),
			img_alt: z.string().optional(),
		}),
	}),


	blog: defineCollection({
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z
			  .string()
			  .or(z.date())
			  .transform((val) =>
				new Date(val).toLocaleDateString("en-US", {
				  year: "numeric",
				  month: "long",
				  day: "numeric",
				}),
			  ),
			tags: z.array(z.string()).optional(),
			cover: z.string().optional(),
		  }),
	}),


};