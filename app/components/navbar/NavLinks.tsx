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
    { label: "Dashboard", href: "/dashboard" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Pricing", href: "/pricing" },
  ];
  return (
    <div className="hidden lg:block">
      <NavigationMenu>
        <NavigationMenuList>
          {links.map(({ href, label }, index) => {
            return (
              <NavigationMenuItem key={index}>
                <Link href={href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
  );
};

export default NavLinks;
