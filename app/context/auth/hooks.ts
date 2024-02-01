"use client";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "./session";
import { User } from "@/app/lib/entities/users";
import { useApiClient } from "@/app/lib/api";

export const useSessionContext = () => {
  const { loading, request, data, error } = useApiClient<User>(undefined);
  useEffect(() => {
    (async () => {
      await request({ url: `users/profile`, credentials: "include" });
    })();
  }, []);

  const { authenticate, setSession } = useContext(SessionContext);
  const toggleAuth = (open: boolean) =>
    setSession!((val) => ({
      ...val,
      authenticate: open,
    }));
  // console.log(authenticate);

  const logout = () => {};
  return {
    session: data,
    error,
    loading,
    toggleAuth,
    logout,
    authenticate,
  };
};
