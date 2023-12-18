import { type ClassValue, clsx } from "clsx";
import kebabCase from "lodash/kebabCase";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const slugify = (value: string) => kebabCase(value);
