import { LocationSchema } from "@/app/lib/schema";
import { ValidationError } from "@/app/lib/exceptions";

import { z } from "zod";
import { BASE_URL } from "@/app/lib/constants";

export const addLocation = async (location: z.infer<typeof LocationSchema>) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const response = await fetch(`${BASE_URL}/properties/locations`, {
    method: "POST",
    body: JSON.stringify(location),
    redirect: "follow",
    headers: myHeaders,
  });
  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else if (response.status === 400) {
    console.log(responseData.errors);

    throw new ValidationError(responseData.errors);
  } else {
    throw new Error(responseData.detail);
  }
};

export const updateLocation = async (
  id: string | number,
  location: z.infer<typeof LocationSchema>
) => {};
