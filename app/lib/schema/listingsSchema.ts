import { z } from "zod";

export const ListingPropertySchema = z.object({
  property: z.string().refine(
    (value) => {
      return /^[0-9a-fA-F]{24}$/.test(value) && value.length === 24;
    },
    { message: "Invalid property" }
  ),
  note: z.string().optional(),
  title: z.string().optional(),
});

export const RentalListingSchema = z.object({
  depositRequired: z.coerce.number().positive(),
  renewalInterval: z.coerce.number().int().positive(),
  title: z.string().max(255).min(1, "Required"),
  description: z.string().optional(),
  available: z.boolean(),
  price: z.coerce.number().positive(),
  tags: z.array(z.string()),
  amenities: z.array(z.string()),
  // coverImage: z.string(),
  published: z.boolean().optional(),
  properties: z.array(ListingPropertySchema),
});

export const SaleListingSchema = z.object({
  downPaymentRequired: z.coerce.number().positive(),
  closingDate: z.date(),
  title: z.string().max(255).min(1, "Required"),
  description: z.string().optional(),
  available: z.boolean(),
  price: z.coerce.number().positive(),
  tags: z.array(z.string()),
  amenities: z.array(z.string()),
  // coverImage: z.string(),
  published: z.boolean().optional(),
  properties: z.array(ListingPropertySchema),
});

export const ListingSchema = z.object({
  title: z.string().max(255),
  description: z.string().optional(),
  available: z.boolean(),
  price: z.coerce.number().positive(),
  tags: z.array(z.string()),
  amenities: z.array(z.string()),
  // coverImage: z.string(),
  published: z.boolean().optional(),
  properties: z.array(ListingPropertySchema),
});
