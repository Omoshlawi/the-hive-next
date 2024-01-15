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

const NavLinks = () => {
  const links = [
    { label: "Dashboard", href: "/dasboard" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map(({ href, label }, index) => {
            return (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  <Link href={href} legacyBehavior passHref>
                    {label}
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            );
          })}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Get started</NavigationMenuTrigger>
            <NavigationMenuContent>
              <GetStatedContent />
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavLinks;
