"use client";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "./session";
import { User } from "@/app/lib/entities/users";
import { decode } from "jsonwebtoken";
import { TokenPayload } from "@/app/lib/types/base";
export const useSessionContext = () => {
  const { token, authenticate, setSession, setToken } =
    useContext(SessionContext);
  const toggleAuth = (open: boolean) =>
    setSession!((val) => ({
      ...val,
      authenticate: open,
    }));
  const logout = () => setToken?.(undefined);
  return {
    setSession,
    toggleAuth,
    authenticate,
    setToken: setToken!,
    user: decode(token?.accessToken ?? "") as TokenPayload | null,
    logout
  };
};
