"use client";
import { navigationMenuTriggerStyle } from "@/app/components/ui/navigation-menu";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import TheHiveLogo from "../TheHiveLogo";
import ListItem from "./ListItem";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { UserButton } from "./UserButton";

const NavLinks = () => {
  const links = [
    { label: "Dashboard", href: "/dasboard" },
    // { label: "Rent", href: "/rent" },
    // { label: "Sell", href: "/rent" },
    // { label: "Buy", href: "/buy" },
    { label: "About", href: "/buy" },
    { label: "Contact", href: "/buy" },
  ];
  const pathName = usePathname();
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          {links.map(({ href, label }, index) => {
            return (
              // <Link
              //   href={href}
              //   key={index}
              //   className={clsx(
              //     "text-zinc-500 hover:text-slate-300 transition-colors ",
              //     {
              //       "text-zinc-800 dark:text-zinc-300": href === pathName,
              //     }
              //   )}
              // >
              //   {label}
              // </Link>
              <NavigationMenuItem>
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
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <Link
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <TheHiveLogo variant="icon" />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        The hive
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Find you favourite home with eas, connect to thatsand of
                        real estate stakeholders
                      </p>
                    </Link>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/rent" title="Rent">
                  Find suitable properties for rent
                </ListItem>
                <ListItem href="/sell" title="Sell">
                  Finde property buyer now
                </ListItem>
                <ListItem href="/buy" title="Buy">
                  Find property buyers with ease
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <UserButton />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavLinks;
