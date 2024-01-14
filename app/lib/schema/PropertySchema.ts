import { z } from "zod";

const PropertySchema = z.object({
  title: z.string().max(50),
  types: z.array(z.string()),
  description: z.string().optional(),
  sqftSize: z.number().optional(),
  date_build: z.coerce.date().optional(),
  published: z.boolean().optional(),
  amenities: z.array(z.string()),
  // images: z.array(
  //   z.object({
  //     path: z.string(),
  //     _id: z.string(),
  //   })
  // ),
  location: z.string(),
  attributes: z.array(z.object({ name: z.string(), value: z.string() })),
});

export default PropertySchema;
