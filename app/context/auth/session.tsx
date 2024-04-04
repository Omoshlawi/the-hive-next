"use client";
import { useApiClient } from "@/app/lib/api";
import { User } from "@/app/lib/entities/users";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";

export interface Session {
  authenticate?: boolean;
  data?: User;
  setData?: (data: User) => void;
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
      await request({ url: `users/profile` });
    })();
  }, [updated]);

  return (
    <Provider
      value={{
        authenticate,
        resetData: () => setData(undefined),
        setData,
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
