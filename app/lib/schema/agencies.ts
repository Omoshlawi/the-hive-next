import { z } from "zod";

export const AgencySchema = z.object({
  name: z.string().max(255).min(1),
  website: z.string().optional(),
  published: z.coerce.boolean().optional(),
  specialties: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  email: z.string().email(),
  phoneNumber: z.string(),
  country: z.string({ required_error: "Country is required" }),
  city: z.string({ required_error: "City is required" }),
  state: z.string({ required_error: "State is required" }),
  zipCode: z.string({ required_error: "ZipCode is required" }).optional(),
  description: z.string().optional(),
  facebook: z.string().url().optional(),
  twitter: z.string().url().optional(),
  linkedIn: z.string().url().optional(),
  instagram: z.string().url().optional(),
});
