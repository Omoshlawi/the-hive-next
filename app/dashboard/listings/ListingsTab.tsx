"use client";

import { Button } from "@/app/components/ui/button";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const ListingsTab = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  return (
    <div
      className={clsx(
        lusitana.className,
        "rounded-md grid grid-cols-3 bg-gray-200 dark:bg-gray-800 p-1 gap-2",
        "font-medium text-2xl"
      )}
    >
      <Button
        variant={"ghost"}
        className={clsx({
          "bg-background":
            !pathname.includes("/rentals") && !pathname.includes("/sales"),
        })}
        onClick={() => push("/dashboard/listings")}
      >
        Listings
      </Button>
      <Button
        variant={"ghost"}
        className={clsx({
          "bg-background": pathname.includes("/rentals"),
        })}
        onClick={() => push("/dashboard/listings/rentals")}
      >
        Rental Listings
      </Button>
      <Button
        variant={"ghost"}
        className={clsx({
          "bg-background": pathname.includes("/sales"),
        })}
        onClick={() => push("/dashboard/listings/sales")}
      >
        Sales Listings
      </Button>
    </div>
  );
};

export default ListingsTab;
