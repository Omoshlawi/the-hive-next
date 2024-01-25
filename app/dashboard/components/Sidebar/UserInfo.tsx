"use client";
import React from "react";
import ListItem from "@/app/components/display/ListItem";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { useSession } from "next-auth/react";
const UserInfo = () => {
  const { data: session } = useSession();
  return (
    <div className="hidden md:block p-2 px-4  lg:px-6">
      <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
        PROFILE
      </h3>

      <ListItem
        title={session?.user?.name ?? ""}
        avatar={
          <Avatar>
            <AvatarImage src={session?.user?.image ?? ""} alt="@shadcn" />
            <AvatarFallback>TH</AvatarFallback>
          </Avatar>
        }
      >
        {session?.user?.email}
      </ListItem>
    </div>
  );
};

export default UserInfo;
