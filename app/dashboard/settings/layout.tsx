import React, { PropsWithChildren } from "react";
import Sidebar from "./components/Sidebar";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import ComboBox from "@/app/components/display/ComboBox";
import { ListLayoutWithSideBar } from "@/app/components/layouts";

type Props = {};

const SettinsLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
      <h1 className="border-b py-6 text-4xl font-semibold">Settings</h1>
      <ListLayoutWithSideBar sideBar={<Sidebar />}>
        {children}
      </ListLayoutWithSideBar>
      {/* <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10"> */}
      {/* Input */}
      {/* <ComboBox
          data={[]}
          placeholder="Combo"
          labelExtractor={(item) => item.label}
          valuextractor={(item) => item.value}
        /> */}
      {/* Side bar */}

      {/* </div> */}
    </div>
  );
};

export default SettinsLayout;
