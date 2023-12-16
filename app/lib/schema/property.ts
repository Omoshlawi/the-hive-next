import { z } from "zod";

export const PropertySchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(20).optional(),
  images: z.array(z.string().min(10)),
  status: z.enum(["on-sale", "on-rent", "sold", "booked", "vacant"]).optional(),
  type: z.string().min(4),
  worth: z.number(),
});
