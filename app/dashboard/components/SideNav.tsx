import React from "react";
import SideNavLinks from "./SideNavLinks";
import TheHiveLogo from "@/app/components/TheHiveLogo";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";

const SideNav = () => {
  return (
    <div className="h-full bg-red-400 pt-8">
      <div className="p-2">
        <TheHiveLogo />
      </div>
      <span className="w-1 m-2" />
      <div className="hidden md:block">
        <span className="text-zinc-300 p-3 font-bold">Profile</span>
        <div className="p-3 flex space-x-3 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-bold">Omondi Laurent</div>
            <div color="gray" className="text-zinc-600">
              lawiomosh3@gmail.com
            </div>
          </div>
        </div>
        <div className="p-3">
          <div className="text-zinc-300 py-3 font-bold">Menu</div>
        </div>
      </div>
      <SideNavLinks />
    </div>
  );
};

export default SideNav;
