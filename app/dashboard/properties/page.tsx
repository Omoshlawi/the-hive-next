import { lusitana } from "@/app/fonts";

import React from "react";
import Search from "../components/Search";
import FilterHeader from "./components/FilterHeader";
import TitleHeader from "./components/TitleHeader";
import { Card, CardHeader } from "@/app/components/ui/card";

const MyProperties = async () => {
  const properties: Property[] = await (
    await fetch("http://localhost:3000/api/properties")
  ).json();
  return (
    <div>
      <TitleHeader />
      <Card>
        <CardHeader>
          <FilterHeader />
        </CardHeader>
      </Card>
    </div>
  );
};

export default MyProperties;
