import React, { PropsWithChildren } from "react";
import SideNav from "./components/SideNav";
import DashboardNav from "./components/DashboardNav";

const DashBoardLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col md:flex-row md:overflow-hidden">
      <div className="h-full flex-none md:w-72">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
        <DashboardNav />
        {children}
      </div>
    </div>
  );
};

export default DashBoardLayout;
