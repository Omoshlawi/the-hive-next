"use client";
import React, { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/app/components/ui/dialog";
import Register from "./Register";
import Login from "./Login";
import login from "@/public/bg-login.jpg";
import register from "@/public/bg-register.jpg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { useSessionContext } from "@/app/context/auth/hooks";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useLocalStorage } from "@/app/lib/hooks";

const AuthDialog = () => {
  const [mode, setMode] = useState<"Sign In" | "Sign Up">("Sign In");
  const { toggleAuth, authenticate } = useSessionContext();
  const pathName = usePathname();
  const { push } = useRouter();
  const [callback, setCallback] = useLocalStorage<string | undefined>(
    "callback-url",
    undefined
  );
  const searchParams = useSearchParams();
  return (
    <Dialog open={authenticate} onOpenChange={toggleAuth}>
      <DialogContent className="max-h-[80vh] overflow-y-auto grid grid-cols-1 lg:grid-cols-3 lg:gap-2 p-0 lg:min-w-max max-sm:w-[420px]">
        <Image
          src={mode === "Sign In" ? login : register}
          alt="auth bg"
          className="max-lg:hidden w-full h-full col-span-1 object-cover"
        />
        <Card className="border-none lg:col-span-2">
          <CardHeader>
            <CardTitle>{mode}</CardTitle>
          </CardHeader>
          <CardContent>
            {mode === "Sign In" ? <Login /> : <Register />}
          </CardContent>
          <CardFooter className="block">
            <div className="w-full mb-2">
              {mode === "Sign In" ? (
                <div className="w-full">
                  <Button
                    variant={"link"}
                    className="opacity-20 w-full text-center"
                    onClick={() => setMode("Sign Up")}
                  >
                    Don't have an account? Register
                  </Button>
                </div>
              ) : (
                <div className="w-full">
                  <Button
                    variant={"link"}
                    className="opacity-20 w-full text-center "
                    onClick={() => setMode("Sign In")}
                  >
                    Already have an account? Login
                  </Button>
                </div>
              )}
            </div>
            <div className="w-full space-y-2">
              <p className="w-full text-center">Or sign in with</p>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
                <Button
                  variant={"outline"}
                  className="flex space-x-3"
                  onClick={() => {
                    // TODO store pathName to be used to redirect on successfull authentication
                    const callbackUrl = searchParams.get("callbackUrl");
                    setCallback(callbackUrl ?? encodeURIComponent(pathName));
                    // TODO Find a way to hide proxy for the google auth
                    push(`/api/proxy/api/auth/signin/google`);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                    <path d="M1 1h22v22H1z" fill="none" />
                  </svg>
                  <span className="font-bold">Google</span>
                </Button>
                <Button variant={"outline"} className="flex space-x-3">
                  <svg
                    fill="#000000"
                    height="24px"
                    width="24px"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 22.773 22.773"
                    xmlSpace="preserve"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g>
                        {" "}
                        <g>
                          {" "}
                          <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path>{" "}
                          <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path>{" "}
                        </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g>{" "}
                        <g> </g> <g> </g> <g> </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                  <span className="font-bold">Apple</span>
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
