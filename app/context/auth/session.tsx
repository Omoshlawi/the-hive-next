"use client";
import { SetValue } from "@/app/lib/types/base";
import React, { PropsWithChildren, createContext, useState } from "react";

export interface Session {
  authenticate?: boolean;
  setSession?: (value: SetValue<Session>) => void;
}

export const SessionContext = createContext<Session>({});

export const Provider = SessionContext.Provider;
export const SessionConsumer = SessionContext.Consumer;

export const SessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [session, setSession] = useState<Session>({
    authenticate: false,
  });

  return (
    <Provider
      value={{
        ...session,
        setSession: session.setSession ?? setSession,
      }}
    >
      {children}
    </Provider>
  );
};
