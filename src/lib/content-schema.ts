import { z } from "zod";

const cardSchema = z.object({
  id: z.string().min(1),
  productId: z.string().startsWith("/").optional(),
  title: z.string().min(1),
  subtitle: z.string().optional(),
  price: z.string().optional(),
  href: z.string().startsWith("/").optional(),
  image: z.string().startsWith("/assets/").optional(),
});

const tableSchema = z.object({
  headings: z.array(z.string()),
  rows: z.array(z.array(z.string())),
});

export const articleBlockSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("paragraph"), text: z.string() }),
  z.object({ type: z.literal("heading"), level: z.union([z.literal(2), z.literal(3), z.literal(4)]), text: z.string() }),
  z.object({ type: z.literal("list"), ordered: z.boolean().default(false), items: z.array(z.string()) }),
  z.object({ type: z.literal("quote"), text: z.string(), attribution: z.string().optional() }),
  z.object({ type: z.literal("image"), src: z.string().startsWith("/assets/"), alt: z.string(), caption: z.string().optional() }),
  z.object({ type: z.literal("table"), table: tableSchema }),
]);

export const sectionSchema = z.discriminatedUnion("type", [
  z.object({ type: z.literal("text"), heading: z.string().optional(), paragraphs: z.array(z.string()) }),
  z.object({ type: z.literal("cards"), heading: z.string().optional(), cards: z.array(cardSchema) }),
  z.object({ type: z.literal("faq"), heading: z.string().optional(), items: z.array(z.object({ question: z.string(), answer: z.string() })) }),
  z.object({ type: z.literal("list"), heading: z.string().optional(), ordered: z.boolean().default(false), items: z.array(z.string()) }),
  z.object({ type: z.literal("table"), heading: z.string().optional(), table: tableSchema }),
  z.object({ type: z.literal("media"), heading: z.string().optional(), src: z.string().startsWith("/assets/"), alt: z.string(), caption: z.string().optional() }),
]);

export const pageSourceSchema = z.object({
  url: z.string().url(),
  capturedAt: z.string().min(1),
  evidencePaths: z.array(z.string()).default([]),
  verifiedFields: z.array(z.string()).default([]),
  unverifiedFields: z.array(z.string()).default([]),
  notes: z.array(z.string()).default([]),
});

const priceCycleSchema = z.object({
  quantity: z.number().positive(),
  unit: z.enum(["hour", "day", "week", "month", "year"]),
  label: z.string().min(1),
});

const vndPriceSchema = z.object({
  amountVND: z.number().nonnegative(),
  sourceLabel: z.string().min(1),
  cycle: priceCycleSchema.optional(),
});

export const productSchema = z.object({
  id: z.string().startsWith("/"),
  code: z.string().min(1),
  subscription: z.enum(["general", "postpaid", "unspecified"]).default("unspecified"),
  price: vndPriceSchema.optional(),
  regionalPrices: z.array(z.object({ regionLabel: z.string(), amountVND: z.number().nonnegative(), periodLabel: z.string() })).optional(),
  dataAllowances: z.array(z.object({ value: z.number().nonnegative(), unit: z.string(), period: z.string(), sourceLabel: z.string() })).optional(),
  speedLabel: z.string().optional(),
  benefits: z.array(z.string()).optional(),
  conditions: z.array(z.string()).optional(),
  registration: z.object({ smsText: z.string().optional(), shortcode: z.string().optional(), note: z.string().optional() }).optional(),
  heroImage: z.string().startsWith("/assets/").optional(),
});

export const articleSchema = z.object({
  publishedLabel: z.string().optional(),
  author: z.string().optional(),
  category: z.string().optional(),
  coverImage: z.string().startsWith("/assets/").optional(),
  blocks: z.array(articleBlockSchema),
});

export const pageSchema = z.object({
  status: z.enum(["draft", "ready"]),
  kind: z.enum(["home", "package", "internet", "news-list", "news-article", "collection"]),
  title: z.string().min(1),
  description: z.string().min(1),
  heading: z.string().min(1),
  intro: z.string().optional(),
  sections: z.array(sectionSchema),
  source: pageSourceSchema.optional(),
  product: productSchema.optional(),
  article: articleSchema.optional(),
  heroImage: z.string().startsWith("/assets/").optional(),
});
export type PageContent = z.infer<typeof pageSchema>;
export type ProductContent = z.infer<typeof productSchema>;
export type ArticleContent = z.infer<typeof articleSchema>;
export type ArticleBlock = z.infer<typeof articleBlockSchema>;
export type SectionContent = z.infer<typeof sectionSchema>;
export type PageSource = z.infer<typeof pageSourceSchema>;
