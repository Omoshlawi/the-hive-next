"use client";
import { useSessionContext } from "@/app/context/auth/hooks";
import Image from "next/image";
import React, { useEffect } from "react";
import bg from "@/public/poly.jpg";
import { useRouter, useSearchParams } from "next/navigation";

const AuthPage = () => {
  const { toggleAuth, authenticate, user } = useSessionContext();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    if (!authenticate && !user) toggleAuth(true);
    if (user) {
      console.log("Redirecting to: ", searchParams.get("callbackUrl") ?? "/");
      replace(searchParams.get("callbackUrl") ?? "/");
    }
  }, [authenticate, user]);

  return (
    <div className="w-full h-screen">
      <Image src={bg} alt="bg image" className="object-cover w-full h-full" />
    </div>
  );
};

export default AuthPage;
