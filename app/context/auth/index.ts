export { default } from "./provider";
import nookies from "nookies";

export function getCookie<T = any>(name: string, defaultValue: T): T {
  try {
    const cookies = nookies.get();
    const item = cookies[name];
    const parsedItem = item ? JSON.parse(item) : defaultValue;
    return parsedItem ?? defaultValue;
  } catch (error) {
    console.error(error);
    return defaultValue;
  }
}
