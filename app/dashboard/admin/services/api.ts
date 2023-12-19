"use client";

import { ValidationError } from "@/app/lib/exceptions";
import { FormFile } from "@/app/lib/schema/common";
import { ServiceFormSchema } from "@/app/lib/schema/pricing";
import { useState } from "react";
import { z } from "zod";

type Service = z.infer<typeof ServiceFormSchema>;

const toFormData = async (values: Service) => {
  const formData = new FormData();
  for (const key in values) {
    if (values.hasOwnProperty(key)) {
      if (key === "image") {
        const fm = new FormFile(values[key]);
        if (fm.origin === "remote") {
          formData.append(key, (values as any)[key]["src"]);
        } else {
          const f: File = await fm.toFile();
          formData.append(key, f);
        }
      } else {
        // Assert that key is a string and exists on values
        formData.append(key, (values as any)[key]);
      }
    }
  }
  return formData;
};

export const addService = async (service: Service) => {
  const formData = await toFormData(service);

  const response = await fetch("/api/services", {
    method: "POST",
    body: formData,
    redirect: "follow",
  });

  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else if (response.status === 400) {
    throw new ValidationError(responseData);
  } else {
    throw new Error(responseData.detail);
  }
};

export const updateService = async (
  service: Service,
  serviceId: string | number
) => {
  const formData = await toFormData(service);
  const response = await fetch(`/api/services/${serviceId}`, {
    method: "PUT",
    body: formData,
    redirect: "follow",
  });
  const responseData = await response.json();
  if (response.ok) {
    return responseData;
  } else if (response.status === 400) {
    throw new ValidationError(responseData);
  } else {
    throw new Error(responseData.detail);
  }
};
