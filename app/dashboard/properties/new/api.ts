import { ValidationError } from "@/app/lib/exceptions";
import { objectToFormData } from "@/app/lib/utils";
import { z } from "zod";
import { BASE_URL } from "@/app/lib/constants";
import { PropertySchema } from "@/app/lib/schema";

export const addProperty = async (
  property: z.infer<typeof PropertySchema>,
  images: File[]
) => {
  const formData = objectToFormData({ ...property, images });
  const response = await fetch(`${BASE_URL}/properties`, {
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

export const updateProperty = async (
  id: string | number,
  property: z.infer<typeof PropertySchema>,
  images: File[]
) => {};
