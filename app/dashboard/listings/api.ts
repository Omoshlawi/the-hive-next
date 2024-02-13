import { ValidationError } from "@/app/lib/exceptions";
import { objectToFormData } from "@/app/lib/utils";
import { z } from "zod";
import {
  RentalListingSchema,
  SaleListingSchema,
} from "@/app/lib/schema/listingsSchema";

export const addRentalListing = async (
  property: z.infer<typeof RentalListingSchema>,
  coverImage: File
) => {
  const formData = objectToFormData({ ...property, coverImage });
  const response = await fetch(`/api/proxy/listings/rentals`, {
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

export const updateRentalListing = async (
  id: string | number,
  property: z.infer<typeof RentalListingSchema>,
  images: File[]
) => {};

export const addSalesListing = async (
  property: z.infer<typeof SaleListingSchema>,
  coverImage: File
) => {
  const formData = objectToFormData({
    ...property,
    coverImage,
    closingDate: property.closingDate.toISOString(),
  });
  const response = await fetch(`/api/proxy/listings/sales`, {
    method: "POST",
    body: formData,
    redirect: "follow",
  });
  const responseData = await response.json();
  console.log(responseData);

  if (response.ok) {
    return responseData;
  } else if (response.status === 400) {
    throw new ValidationError(responseData.errors);
  } else {
    throw new Error(responseData.detail);
  }
};

export const updateSalesListing = async (
  id: string | number,
  property: z.infer<typeof SaleListingSchema>,
  images: File[]
) => {};
