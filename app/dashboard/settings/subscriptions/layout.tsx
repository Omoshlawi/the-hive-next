import TabMenu from "@/app/components/display/TabMenu";
import React, { PropsWithChildren } from "react";

const SubscriptionLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <TabMenu
        items={[
          {
            href: "/dashboard/settings/subscriptions",
            name: "Manage subscriptions",
          },
          {
            name: "Subscription History",
            href: "/dashboard/settings/subscriptions/history",
          },
        ]}
      />
      {children}
    </div>
  );
};

export default SubscriptionLayout;
