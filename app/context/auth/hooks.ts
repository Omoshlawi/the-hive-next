"use client";
import { useContext } from "react";
import { Session, SessionContext } from "./session";

export const useSessionContext = () => {
  const { token, authenticate, setSession, setToken } =
    useContext(SessionContext);
  const toggleAuth = (open: boolean) =>
    setSession!((val) => ({
      ...val,
      authenticate: open,
    }));
  const getUser = async () => {
    alert(JSON.stringify(token, null, 2));
  };
  return { setSession, toggleAuth, authenticate, setToken: setToken!, getUser };
};
