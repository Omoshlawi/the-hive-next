"use client";
import { useSessionContext } from "@/app/context/auth/hooks";
import { useLocalStorage } from "@/app/lib/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import SyncLoader from "react-spinners/SyncLoader";

const OauthCallback = () => {
  // const { setToken } = useSessionContext();
  const { replace } = useRouter();
  const path = usePathname();
  const [callBack, setCallback] = useLocalStorage<string | undefined>(
    "callback-url",
    undefined
  );
  useEffect(() => {
    // const accessToken = searchParams.get("accessToken");
    // const refreshToken = searchParams.get("refreshToken");
    // if (accessToken && refreshToken) setToken({ accessToken, refreshToken });
    const decoded = callBack ? decodeURIComponent(callBack) : "/";
    replace(decoded);
    setCallback(undefined);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <SyncLoader color="indigo" />
    </div>
  );
};

export default OauthCallback;
