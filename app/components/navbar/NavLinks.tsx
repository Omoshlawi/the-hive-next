"use client";
import { navigationMenuTriggerStyle } from "@/app/components/ui/navigation-menu";

import Link from "next/link";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import GetStatedContent from "./GetStatedContent";
import { Sheet, SheetContent } from "@/app/components/ui/sheet";
import TheHiveLogo from "../TheHiveLogo";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { UserButton } from "./UserButton";
interface Props {
  links?: { href: string; label: string }[];
  openSideBar?: boolean;
  onOpenSidebarChange?: (open: boolean) => void;
}

const NavLinks: React.FC<Props> = ({
  links = [],
  openSideBar = false,
  onOpenSidebarChange,
}) => {
  return (
    <>
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            {links.map(({ href, label }, index) => {
              return (
                <NavigationMenuItem key={index}>
                  <Link href={href} legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      {label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            })}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Listings</NavigationMenuTrigger>
              <NavigationMenuContent>
                <GetStatedContent />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Sheet open={openSideBar} onOpenChange={onOpenSidebarChange}>
        <SheetContent>
          <div className="h-[100vh] w-full flex flex-col pb-10">
            <TheHiveLogo />
            <div className="h-full py-4 ">
              <ul className="grid grid-cols-1 gap-4">
                {links.map(({ href, label }, index) => {
                  return (
                    <li key={index}>
                      <Link
                        className="text-xl"
                        href={href}
                        legacyBehavior
                        passHref
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <UserButton />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default NavLinks;
