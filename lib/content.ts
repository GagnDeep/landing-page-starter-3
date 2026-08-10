import { z } from 'zod';

export const ContentSourceSchema = z.object({
  url: z.string().url(),
  dateChecked: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD"),
  verified: z.boolean(),
});

export const CountryDataSchema = z.object({
  slug: z.string(),
  name: z.string(),
  visaRoute: z.string(),
  incomeFloor: z.string(),
  incomeFloorSource: ContentSourceSchema.optional(),
  healthcarePath: z.string(),
  healthcareSource: ContentSourceSchema.optional(),
  landedCost: z.string(),
  landedCostSource: ContentSourceSchema.optional(),
  taxTreatment: z.string(),
  taxTreatmentSource: ContentSourceSchema.optional(),
  content: z.string().min(900), // Spoke floor
});

export const HubDataSchema = z.object({
  slug: z.string(),
  title: z.string(),
  content: z.string().min(1800), // Hub floor
  children: z.array(z.string()),
});
