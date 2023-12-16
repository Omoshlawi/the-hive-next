"use client";

import clsx from "clsx";
import { BarChartBig, Heart, Home, UserRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideNavLinks = () => {
  const pathName = usePathname();
  const links = [
    { label: "Dashboard", href: "/dashboard", icon: BarChartBig },
    { label: "Profile", href: "/dashboard", icon: UserRound },
    {
      label: "My Properties",
      href: "/dashboard/properties",
      icon: Home,
    },
    { label: "My Favourite", href: "/dashboard/favourite", icon: Heart },
  ];

  return (
    <div className="flex flex-col space-y-2">
      {links.map(({ href, label, icon: Icon }, index) => {
        return (
          <Link
            href={href}
            key={index}
            className={clsx("py-2 items-center", {
              "bg-red-50": href === pathName,
            })}
          >
            <div className={"p-3 flex items-center space-x-3"}>
              <Icon className="w-4 h-4 font-bold text-zinc-600" />
              <div className="font-bold text-zinc-600 ">{label}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideNavLinks;
