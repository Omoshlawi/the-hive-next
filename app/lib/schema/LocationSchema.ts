import { z } from "zod";

const LocationSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string(),
  longitude: z.coerce.number(),
  latitude: z.coerce.number(),
});

export default LocationSchema;
