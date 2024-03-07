"use client";
import clsx from "clsx";
import { link } from "fs";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const { push } = useRouter();
  const pathName = usePathname();

  const links = [
    { name: "Profile", href: "/dashboard/settings" },
    { name: "Teams", href: "/dashboard/settings/teams" },
    { name: "Accounts", href: "/dashboard/settings/accounts" },
    { name: "Users", href: "/dashboard/settings/users" },
    { name: "Billing", href: "/dashboard/settings/subscriptions" },
    { name: "Notifications", href: "/dashboard/settings/notofications" },
  ];

  return (
    <div className="col-span-2 hidden sm:block">
      <ul>
        {links.map(({ href, name }, index) => {
          const isActive = pathName === href;
          return (
            <li
              key={index}
              className={clsx(
                "mt-5 cursor-pointer border-l-2  px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700",
                { "border-l-blue-700 text-blue-700": isActive },
                { "border-transparent": !isActive }
              )}
              onClick={() => push(href)}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
