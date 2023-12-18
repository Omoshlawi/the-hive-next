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
export const ServiceSchema = z.object({
  name: z.string().min(1).max(255),
  description: z.string().min(20).optional(),
  image: image(),
});


