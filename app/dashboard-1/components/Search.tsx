"use client";
import { Input } from "@/app/components/ui/input";
import clsx from "clsx";
import { SearchIcon } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

const Search: React.FC<Props> = ({ className }) => {
  return (
    <div className={clsx(className, "flex items-center")}>
      <SearchIcon height="16" width="16" />
      <Input placeholder="Search ..." />
    </div>
  );
};

export default Search;
