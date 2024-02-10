import React, { PropsWithChildren } from "react";
import FilterForm from "./FilterForm";

const ListLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 m-2 lg:mx-10 lg:my-5">
      <div className="lg:col-span-1 lg:mr-10 ">
        <FilterForm />
      </div>
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
};

export default ListLayout;
