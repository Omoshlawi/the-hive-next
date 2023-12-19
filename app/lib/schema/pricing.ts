import { z } from "zod";
import { image } from "./common";

export const PricingSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(20).optional(),
  image: z.string(),
});

export const FeatureSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(20).optional(),
  image: z.string(),
});
export const ServiceFormSchema = z.object({
  id: z.number().readonly().optional(),
  slug: z.string().readonly().optional(),
  createdAt: z.date().readonly().optional(),
  updatedAt: z.date().readonly().optional(),
  title: z.string().min(1).max(255),
  description: z.string(),
  image: image(),
});

export const ServiceSchema = z.object({
  id: z.number().readonly().optional(),
  slug: z.string().readonly().optional(),
  createdAt: z.date().readonly().optional(),
  updatedAt: z.date().readonly().optional(),
  title: z.string().min(1).max(255),
  description: z.string(),
  image: z.string(),
});
