"use client";
import { useEffect, useState } from "react";

type SetValue<T> = T | ((val: T) => T);

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: SetValue<T>) => void] {
  // State to store our value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key);
        const parsedItem = item ? JSON.parse(item) : initialValue;
        return parsedItem === null || parsedItem === undefined
          ? initialValue
          : parsedItem;
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // useEffect to update local storage when the state changes
  useEffect(() => {
    try {
      const valueToStore =
        typeof storedValue === "function"
          ? storedValue(storedValue)
          : storedValue;

      if (valueToStore !== null && valueToStore !== undefined) {
        // Save state to local storage only if the value is not null or undefined
        if (typeof window !== "undefined") {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } else {
        // Remove the entry from local storage if the value is null or undefined
        if (typeof window !== "undefined") {
          window.localStorage.removeItem(key);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
