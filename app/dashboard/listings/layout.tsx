import React, { FC, PropsWithChildren } from "react";
import TabMenu from "@/app/components/display/TabMenu";

const ListingsLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="space-y-2">
      <TabMenu
        items={[
          { name: "Listings", href: "/dashboard/listings" },
          { name: "Rental Listings", href: "/dashboard/listings/rentals" },
          { name: "Sales Listings", href: "/dashboard/listings/sales" },
        ]}
      />
      {children}
    </div>
  );
};

export default ListingsLayout;
