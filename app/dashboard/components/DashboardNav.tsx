import React from "react";
import BreadCrumb from "./BreadCrumb";
import { BellIcon } from "lucide-react";

const DashboardNav = () => {
  return (
    <div className="bg-zinc-300 p-3 rounded-md justify-between flex items-center">
      <BreadCrumb />
      
    </div>
  );
};

export default DashboardNav;
