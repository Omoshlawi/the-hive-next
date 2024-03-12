"use client";

import { ValidationError } from "@/app/lib/exceptions";

export const initiateSTKPush = async (data: {
  phoneNumber: string;
  pricing?: string;
}) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const response = await fetch(`/api/proxy/payments/mpesa/make-payment`, {
    method: "POST",
    body: JSON.stringify(data),
    redirect: "follow",
    headers: myHeaders,
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
