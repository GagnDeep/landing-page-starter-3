import { z } from "zod"

export const FactSchema = z.object({
  value: z.union([z.string(), z.number()]),
  source: z.string().min(1, "Source is required for verification"),
  verificationDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD"),
})

export type Fact = z.infer<typeof FactSchema>

export const VendorSchema = z.object({
  slug: z.string(),
  name: z.string(),
  description: z.string(),
  fundingAmount: FactSchema,
  category: z.string(),
  pros: z.array(z.string()),
  cons: z.array(z.string()),
  coreFeatures: z.array(z.string()),
})

export type Vendor = z.infer<typeof VendorSchema>

export const TopicSchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string(),
  relatedTopics: z.array(z.string()), // slugs of siblings
})

export type Topic = z.infer<typeof TopicSchema>

export const IssueSchema = z.object({
  id: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  title: z.string(),
  excerpt: z.string(),
  tags: z.array(z.string()),
  content: z.string(),
})

export type Issue = z.infer<typeof IssueSchema>

export const JobSchema = z.object({
  id: z.string(),
  title: z.string(),
  company: z.string(),
  location: z.string(),
  salaryRange: FactSchema,
  postedDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
})

export type Job = z.infer<typeof JobSchema>
