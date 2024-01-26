"use client";
import { useContext } from "react";
import { Session, SessionContext } from "./session";

export const useSessionContext = () => {
  const { accessToken, authenticate, refreshToken, setSession } =
    useContext(SessionContext);
  const toggleAuth = (open: boolean) =>
    setSession!((val) => ({
      ...val,
      authenticate: open,
    }));

  return { setSession, toggleAuth, authenticate };
};
