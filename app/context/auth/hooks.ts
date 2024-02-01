"use client";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "./session";
import { User } from "@/app/lib/entities/users";
import { useApiClient } from "@/app/lib/api";
import { useRouter } from "next/navigation";

export const useSessionContext = () => {
  const { replace } = useRouter();
  const {
    authenticate,
    data,
    error,
    loading,
    resetData,
    notifyChanges,
    toggleAuth,
  } = useContext(SessionContext);

  // console.log(authenticate);

  const logout = (
    { redirectUrl }: { redirectUrl?: string } = { redirectUrl: "/" }
  ) => {
    fetch("/api/auth/logout")
      .then((resp) => resp.json())
      .then((data) => console.log(JSON.stringify(data, null, 2)))
      .catch((err) => console.log(err))
      .finally(() => {
        resetData?.();
        replace(redirectUrl ?? "/");
      });
  };

  return {
    session: data,
    error,
    logout,
    authenticate,
    loading: loading!,
    notifyChanges: notifyChanges!,
    toggleAuth: toggleAuth!,
  };
};
