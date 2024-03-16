"use client";

import { Button } from "@/app/components/ui/button";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

interface Props {
  items?: { name: string; href: string }[];
}

const TabMenu: React.FC<Props> = ({ items = [] }) => {
  const pathname = usePathname();
  const { push } = useRouter();
  return (
    <div
      className={clsx(
        lusitana.className,
        `rounded-md grid grid-cols-${items.length} bg-gray-200 dark:bg-gray-800 p-1 gap-2`,
        "font-medium text-2xl"
      )}
    >
      {items.map(({ name, href }, index) => {
        const isActive =
          new URL(href, "http://localhost").pathname === pathname;
        return (
          <Button
            key={index}
            variant={"ghost"}
            className={clsx({
              "bg-background": isActive,
            })}
            onClick={() => push(href)}
          >
            {name}
          </Button>
        );
      })}
    </div>
  );
};

export default TabMenu;
