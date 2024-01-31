"use client";
import { useSessionContext } from "@/app/context/auth/hooks";
import { useCookieStorage, useLocalStorage } from "@/app/lib/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const OauthCallback = () => {
  // const { setToken } = useSessionContext();
  const { replace } = useRouter();
  const path = usePathname();
  const searchParams = useSearchParams();
  const [callBack, setCallback] = useLocalStorage<string | undefined>(
    "callback-url",
    undefined
  );
  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");
    // if (accessToken && refreshToken) setToken({ accessToken, refreshToken });
    replace(callBack ?? "/");
    setCallback(undefined);
  }, []);

  return <div></div>;
};

export default OauthCallback;
