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
            <p className="font-bold">Dashboard</p>
          </Badge>
        </Link>
        <span className="font-bold">{"/"}</span>
        <Link href={`/dashboard`}>
          <Badge>
            <p className="font-bold">Properties</p>
          </Badge>
        </Link>
        <span className="font-bold">{"/"}</span>
        <Link href={`/dashboard`}>
          <Badge>
            <p className="font-bold">new</p>
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default BreadCrumb;
