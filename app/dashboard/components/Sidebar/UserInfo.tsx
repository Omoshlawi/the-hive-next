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
  const alt = (session?.name ?? session?.username)?.charAt(0)?.toUpperCase();

  return (
    <div className="hidden md:block p-2 px-4  lg:px-6">
      <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
        PROFILE
      </h3>

      <ListItem
        title={session?.name ?? ""}
        avatar={
          <Avatar>
            <AvatarImage src={session?.image ?? ""} alt="profile picture" />
            <AvatarFallback className="bg-cyan-500">
              {alt ? alt : "TH"}
            </AvatarFallback>
          </Avatar>
        }
      >
        {session?.email ?? ""}
      </ListItem>
    </div>
  );
};

export default UserInfo;
