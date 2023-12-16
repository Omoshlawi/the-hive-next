import React from "react";
import BreadCrumb from "./BreadCrumb";
import { BellIcon } from "lucide-react";
import { UserButton } from "@/app/components/navbar/UserButton";
import { ThemeToggler } from "@/app/components/ThemeToggler";

const DashboardNav = () => {
  return (
    <div className="p-3 rounded-md justify-between flex items-center shadow-md dark:shadow-zinc-700">
      <BreadCrumb />
      <div className="flex space-x-2">
        <UserButton />
        <ThemeToggler />
      </div>
    </div>
  );
};

export default DashboardNav;
