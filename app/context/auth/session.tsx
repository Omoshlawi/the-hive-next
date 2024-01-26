"use client";
import { createContext } from "react";

export interface Session {
  authenticate: boolean;
}

export const SessionContext = createContext<Session>({ authenticate: false });

export const SessionProvider = SessionContext.Provider;
export const SessionConsumer = SessionContext.Consumer;
