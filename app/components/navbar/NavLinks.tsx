"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const links = [
    { label: "Dashboard", href: "/dasboard" },
    { label: "Rent", href: "/rent" },
    { label: "Sell", href: "/rent" },
    { label: "Buy", href: "/buy" },
    { label: "About", href: "/buy" },
    { label: "Contact", href: "/buy" },
  ];
  const pathName = usePathname();
  return (
    <div>
      <ul className="flex space-x-10">
        {links.map(({ href, label }, index) => {
          return (
            <Link
              href={href}
              key={index}
              className={clsx(
                "text-zinc-500 hover:text-slate-300 transition-colors ",
                {
                  "text-zinc-800 dark:text-zinc-300": href === pathName,
                }
              )}
            >
              {label}
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavLinks;
