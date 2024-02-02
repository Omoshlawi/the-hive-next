import { z } from "zod";

export const ListingPropertySchema = z.object({
  property: z.string().uuid(),
  note: z.string().optional(),
});

export const RentalListingSchema = z.object({
  depositRequired: z.coerce.number(),
  renewalInterval: z.coerce.number(),
  title: z.string().max(255),
  description: z.string().optional(),
  available: z.boolean(),
  price: z.number(),
  tags: z.array(z.string()),
  amenities: z.array(z.string()),
  coverImage: z.string(),
  published: z.coerce.boolean().optional(),
  properties: z.array(ListingPropertySchema),
});

export const SaleListingSchema = z.object({
  downPaymentRequired: z.coerce.number(),
  closingDate: z.coerce.date(),
  title: z.string().max(255),
  description: z.string().optional(),
  available: z.boolean(),
  price: z.number(),
  tags: z.array(z.string()),
  amenities: z.array(z.string()),
  coverImage: z.string(),
  published: z.coerce.boolean().optional(),
  properties: z.array(ListingPropertySchema),
});

export const ListingSchema = z.object({
  title: z.string().max(255),
  description: z.string().optional(),
  available: z.boolean(),
  price: z.number(),
  tags: z.array(z.string()),
  amenities: z.array(z.string()),
  coverImage: z.string(),
  published: z.coerce.boolean().optional(),
  properties: z.array(ListingPropertySchema),
});
