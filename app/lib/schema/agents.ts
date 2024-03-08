import { z } from "zod";

export const AgentSchema = z.object({
  firstName: z.string().max(255).min(1),
  lastName: z.string().max(255).min(1),
  user: z.string().uuid().optional(),
  published: z.coerce.boolean().optional(),
  specialties: z.array(z.string()).optional(),
  email: z.string().email(),
  phoneNumber: z.string(),
  address: z.string(),
  licenses: z
    .array(
      z.object({
        _id: z.string(),
        path: z.string(),
      })
    )
    .optional()
    .default([]),
  achievements: z
    .object({
      _id: z.string(),
      path: z.string(),
    })
    .optional(),

  bio: z.string().optional(),
  facebook: z.string().url().optional(),
  twitter: z.string().url().optional(),
  linkedIn: z.string().url().optional(),
  instagram: z.string().url().optional(),
});
