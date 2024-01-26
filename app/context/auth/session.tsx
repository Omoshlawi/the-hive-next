"use client";
import React, { PropsWithChildren, createContext, useState } from "react";

export interface Session {
  authenticate?: boolean;
  refreshToken?: string;
  accessToken?: string;
  setSession?: React.Dispatch<React.SetStateAction<Session | undefined>>;
}

export const SessionContext = createContext<Session>({});

export const Provider = SessionContext.Provider;
export const SessionConsumer = SessionContext.Consumer;

export const SessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<Session>();

  return (
    <Provider
      value={{
        authenticate: session?.authenticate ?? false,
        setSession,
        accessToken: session?.accessToken,
        refreshToken: session?.refreshToken,
      }}
    >
      {children}
    </Provider>
  );
};
