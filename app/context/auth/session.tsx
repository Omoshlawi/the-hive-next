"use client";
import { useApiClient } from "@/app/lib/api";
import { SetValue } from "@/app/lib/types/base";
import { User } from "next-auth";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export interface Session {
  authenticate?: boolean;
  data?: User;
  loading?: boolean;
  error?: {
    status: number;
    errors: any;
  };
  resetData?: () => void;
  notifyChanges?: () => void;
  toggleAuth?: (open: boolean) => void;
}

export const SessionContext = createContext<Session>({});

export const Provider = SessionContext.Provider;
export const SessionConsumer = SessionContext.Consumer;

export const SessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { loading, request, data, error, setData } =
    useApiClient<User>(undefined);
  const [authenticate, setAuthenticate] = useState(false);
  const toggleAuth = (open: boolean) => setAuthenticate(open);
  const [updated, setUpdated] = useState(false);

  const nortifyAll = () => setUpdated(!updated);
  useEffect(() => {
    (async () => {
      await request({ url: `users/profile`, credentials: "include" });
    })();
  }, [updated]);

  // useEffect(()=>{}, [data,error,])

  return (
    <Provider
      value={{
        authenticate,
        resetData: () => setData(undefined),
        notifyChanges: nortifyAll,
        loading,
        data,
        error,
        toggleAuth,
      }}
    >
      {children}
    </Provider>
  );
};
