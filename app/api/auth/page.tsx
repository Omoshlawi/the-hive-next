"use client";
import { useSessionContext } from "@/app/context/auth/hooks";
import Image from "next/image";
import React, { useEffect } from "react";
import bg from "@/public/poly.jpg";
import { useRouter, useSearchParams } from "next/navigation";

const AuthPage = () => {
  const { toggleAuth, authenticate, session: user } = useSessionContext();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!authenticate && !user) toggleAuth(true);
    if (user) {
      console.log("Redirecting to: ", searchParams.get("callbackUrl") ?? "/");
      toggleAuth(false);
      const callBack = searchParams.get("callbackUrl");
      try {
        const decoded = callBack ? decodeURIComponent(callBack) : "/";
        replace(decoded);
      } catch (error) {
        replace("/");
      }
    }
  }, [authenticate, user]);

  return (
    <div className="w-full h-screen">
      <Image src={bg} alt="bg image" className="object-cover w-full h-full" />
    </div>
  );
};

export default AuthPage;
