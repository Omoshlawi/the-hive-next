import React, { PropsWithChildren } from "react";

const AdminLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <div>{children}</div>;
};

export default AdminLayout;
