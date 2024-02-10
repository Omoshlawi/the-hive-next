import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { remark } from "remark";
import html from "remark-html";
import { ValidationError } from "./exceptions";
import { toast } from "../components/ui/use-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export const objectToFormData = (
  data: { [key: string]: any },
  options: { useIndexOnFiles: boolean } = { useIndexOnFiles: false },
  formData: FormData = new FormData(),
  parentKey?: string
): FormData => {
  for (const key in data) {
    if (key in data) {
      const value = data[key];

      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (value !== null && value !== undefined) {
        if (value instanceof Array) {
          value.forEach((val, index) => {
            const nestedFormKey = `${formKey}[${index}]`;

            if (typeof val === "object" && !(val instanceof File)) {
              // Recursively handle nested objects in arrays
              objectToFormData(val, options, formData, nestedFormKey);
            } else {
              // Handle File instances in arrays
              if (val instanceof File) {
                formData.append(
                  options.useIndexOnFiles ? nestedFormKey : formKey,
                  val,
                  val.name
                );
              } else {
                formData.append(nestedFormKey, val);
              }
            }
          });
        } else if (typeof value === "object" && !(value instanceof File)) {
          // Recursively handle nested objects
          objectToFormData(value, options, formData, formKey);
        } else if (value instanceof File) {
          // Handle top-level File instances
          formData.append(formKey, value, value.name);
        } else {
          formData.append(formKey, value as string);
        }
      }
    }
  }
  return formData;
};

export const wait = (ms: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, ms);
  });
};

export const handleFormErrors = (error: any, form: any) => {
  if (error instanceof ValidationError) {
    Object.entries(error.errors).forEach(([field, value]) => {
      form.setError(field as any, { message: value as string });
    });
  } else if (
    typeof error === "object" &&
    error !== null &&
    "message" in error
  ) {
    // Check if 'error' is an object with a 'message' property
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: `${error}`,
    });
  } else {
    // Handle other cases
    toast({
      variant: "destructive",
      title: "Uh oh! Something went wrong.",
      description: `${error}`,
    });
  }
};

export const formartCurrency = (amount: number) => {
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "KES",
  }).format(amount);
  return formatted;
};
