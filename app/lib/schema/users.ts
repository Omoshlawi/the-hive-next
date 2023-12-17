import { z } from "zod";

export const UserProfileSchema = z.object({
  username: z.string().min(1).max(50),
  email: z.string().email(),
  phoneNumber: z.string().min(10).max(13),
  bio: z.string().min(20).optional(),
  image: z.string().optional(),
  firstName: z.string(),
  lastName: z.string(),
});
