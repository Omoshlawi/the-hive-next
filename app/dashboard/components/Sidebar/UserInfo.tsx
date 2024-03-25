"use client";
import React from "react";
import ListItem from "@/app/components/display/ListItem";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { useSessionContext } from "@/app/context/auth/hooks";
const UserInfo = () => {
  const { session } = useSessionContext();
  const alt = (session?.person?.name ?? session?.username)
    ?.charAt(0)
    ?.toUpperCase();

  return (
    <div className="hidden md:block p-2 px-4  lg:px-6">
      <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
        PROFILE
      </h3>

      <ListItem
        title={session?.person?.name ?? ""}
        avatar={
          <Avatar>
            <AvatarImage
              src={
                session?.person?.image
                  ? session!.person!.image!.type === "remote"
                    ? session!.person!.image!.path
                    : `/api/proxy/files${session!.person!.image!.path}`
                  : undefined
              }
              alt="profile picture"
            />
            <AvatarFallback className="bg-cyan-500">
              {alt ? alt : "TH"}
            </AvatarFallback>
          </Avatar>
        }
      >
        {session?.person?.email ?? ""}
      </ListItem>
    </div>
  );
};

export default UserInfo;
