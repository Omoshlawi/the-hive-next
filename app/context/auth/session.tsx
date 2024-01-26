"use client";
import { useLocalStorage } from "@/app/lib/hooks";
import { SetValue, Token } from "@/app/lib/types/base";
import React, { PropsWithChildren, createContext, useState } from "react";

export interface Session {
  authenticate?: boolean;
  token?: Token;
  setToken?: (value: SetValue<Token | undefined>) => void;
  setSession?: (value: SetValue<Session>) => void;
}

export const SessionContext = createContext<Session>({});

export const Provider = SessionContext.Provider;
export const SessionConsumer = SessionContext.Consumer;

export const SessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [token, setToken] = useLocalStorage<Token | undefined>(
    "auth_session",
    undefined
  );
  const [session, setSession] = useState<Session>({
    authenticate: false,
    setToken,
    token,
  });

  return (
    <Provider
      value={{
        authenticate: session.authenticate ?? false,
        setSession: session.setSession ?? setSession,
        token: session.token,
        setToken: session.setToken,
      }}
    >
      {children}
    </Provider>
  );
};
