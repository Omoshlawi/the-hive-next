import { ValidationError } from "@/app/lib/exceptions";
import { objectToFormData } from "@/app/lib/utils";
import { z } from "zod";
import {
  RentalListingSchema,
  SaleListingSchema,
} from "@/app/lib/schema/listingsSchema";
import { AgentSchema } from "@/app/lib/schema/agents";

export const addAgent = async (
  agent: z.infer<typeof AgentSchema>,
  profilePic: File
) => {
  const formData = objectToFormData({ ...agent, profilePic });
  const response = await fetch(`/api/proxy/agents`, {
    method: "POST",
    body: formData,
    redirect: "follow",
  });
  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else if (response.status === 400) {
    throw new ValidationError(responseData.errors);
  } else {
    throw new Error(responseData.detail);
  }
};

export const updateAgent = async (
  id: string | number,
  agent: z.infer<typeof AgentSchema>,
  profilePic: File
) => {};
