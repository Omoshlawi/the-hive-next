"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Badge } from "@/app/components/ui/badge";

const BreadCrumb = () => {
  const pathname = usePathname();
  return (
    <div className="flex">
      <div className="row space-x-3">
        <span className="font-bold">{"/"}</span>
        <Link href={`/dashboard`}>
          <Badge>
            <p className="font-bold text-zinc-600">Dashboard</p>
          </Badge>
        </Link>
        <span className="font-bold">{"/"}</span>
        <Link href={`/dashboard`}>
          <Badge>
            <Badge>
              <p className="font-bold text-zinc-600">Properties</p>
            </Badge>
          </Badge>
        </Link>
        <span className="font-bold">{"/"}</span>
        <Link href={`/dashboard`}>
          <Badge>
            <Badge>
              <p className="font-bold text-zinc-600">new</p>
            </Badge>
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default BreadCrumb;
