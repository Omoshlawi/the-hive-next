"use client";

import { z } from "zod";
import { TourScheduleSchema } from "../lib/schema/listingsSchema";
import { ValidationError } from "../lib/exceptions";

export const scheduleTour = async (
  data: z.infer<typeof TourScheduleSchema>,
  listingId: string
) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify(data);
  const response = await fetch(`/api/proxy/listings/tours/${listingId}`, {
    method: "POST",
    headers: myHeaders,
    body: raw,
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
