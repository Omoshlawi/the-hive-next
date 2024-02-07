import Icon from "@/app/components/display/Icon";
import { lusitana } from "@/app/fonts";
import React from "react";

const GroupAddPage = () => {
  return (
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Add Group
        <Icon name="building" />
      </h1>
    </div>
  );
};

export default GroupAddPage;
