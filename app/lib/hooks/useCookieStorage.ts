import { useEffect, useState } from "react";
import nookies from "nookies";

type SetValue<T> = T | ((val: T) => T);

interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date | number;
  secure?: boolean;
  sameSite?: "lax" | "strict" | "none";
  httpOnly?: boolean;
}

function useCookieStorage<T>(
  key: string,
  initialValue: T,
  options: CookieOptions = {}
): [T, (value: SetValue<T>) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from cookies by key
      const cookies = nookies.get();
      const item = cookies[key];
      const parsedItem = item ? JSON.parse(item) : initialValue;
      return parsedItem ?? initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update cookies when the state changes
  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;

      if (valueToStore !== null && valueToStore !== undefined) {
        // Save state to cookies only if the value is not null or undefined
        nookies.set(null, key, JSON.stringify(valueToStore), options);
      } else {
        // Remove the entry from cookies if the value is null or undefined
        nookies.destroy(null, key, options);
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useCookieStorage;
