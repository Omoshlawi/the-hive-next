"use client";
import { useCookieStorage, useLocalStorage } from "@/app/lib/hooks";
import { SetValue, Token } from "@/app/lib/types/base";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { getCookie } from ".";

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
  const [token, setToken] = useState<Token | undefined>();
  const [session, setSession] = useState<Session>({
    authenticate: false,
  });

  useEffect(() => {
    const token = getCookie<Token | undefined>("session-token", undefined);
    alert(JSON.stringify(token, null, 2));
    setToken(token);
  }, []);

  return (
    <Provider
      value={{
        authenticate: session.authenticate ?? false,
        setSession: session.setSession ?? setSession,
        setToken,
        token,
      }}
    >
      {children}
    </Provider>
  );
};
