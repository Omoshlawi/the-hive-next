import React, { FC, PropsWithChildren } from "react";
import ListingsTab from "./ListingsTab";

const ListingsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="space-y-2">
      <ListingsTab />
      {children}
    </div>
  );
};

export default ListingsLayout;
