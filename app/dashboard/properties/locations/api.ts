import { LocationSchema } from "@/app/lib/schema";
import { z } from "zod";

export const addLocation = async (
  location: z.infer<typeof LocationSchema>
) => {};

export const updateLocation = async (
  id: string | number,
  location: z.infer<typeof LocationSchema>
) => {};
