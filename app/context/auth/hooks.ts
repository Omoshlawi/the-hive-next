import { useContext } from "react";
import { SessionContext } from "./session";

export const useSessionContext = () => {
  const data = useContext(SessionContext);
  return data;
};
