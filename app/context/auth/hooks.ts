"use client";
import { useContext, useEffect, useState } from "react";
import { SessionContext } from "./session";
import { User } from "@/app/lib/entities/users";
import { useApiClient } from "@/app/lib/api";

export const useSessionContext = () => {
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

  const logout = () => {
    fetch("/api/auth/logout")
      .then((resp) => resp.json())
      .then((data) => console.log(JSON.stringify(data, null, 2)))
      .catch((err) => console.log(err))
      .finally(resetData);
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
