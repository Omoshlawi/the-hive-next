import React from "react";
import SideNavLinks from "./SideNavLinks";
import TheHiveLogo from "@/app/components/TheHiveLogo";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Separator } from "@/app/components/ui/separator";
import ListItem from "@/app/components/display/ListItem";

const SideNav = () => {
  return (
    <div className="h-full bg-secondary dark:bg-accent pt-8">
      <div className="p-2">
        <TheHiveLogo />
      </div>
      <Separator className="bg-slate-300" />

      <div className="hidden md:block p-2">
        <span className="text-zinc-700 font-bold">Profile</span>
        <ListItem
          title="Omondi Laurent Ouma"
          avatar={
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          }
        >
          lawiomosh3@gmail.com
        </ListItem>
      </div>
      <Separator className="bg-slate-300" />
      <div className="p-2">
        <div className="text-zinc-700 py-3 font-bold">Menu</div>
      </div>
      <SideNavLinks />
    </div>
  );
};

export default SideNav;
