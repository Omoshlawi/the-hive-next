import React, { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  sideBar: React.ReactNode;
}

const ListLayoutWithSideBar: React.FC<Props> = ({ children, sideBar }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 m-2 lg:mx-10 lg:my-5 gap-2">
      <div className="lg:col-span-1 lg:mr-10 ">{sideBar}</div>
      <div className="lg:col-span-3">{children}</div>
    </div>
  );
};

export default ListLayoutWithSideBar;
