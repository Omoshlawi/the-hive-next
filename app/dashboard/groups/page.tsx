import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import React from "react";
import FilterHeader from "../properties/components/FilterHeader";
import { DataTable } from "@/app/components/display/data-table";
import { columns } from "./columns";

const PropertyGroupsPage = async () => {
  const { results: groups }: { results: PropertyGroup[] } = await (
    await fetch("http://localhost:5000/groups/", { cache: "no-cache" })
  ).json();
  return (
    <div>
      <div className={clsx("text-2xl", lusitana.className)}>
        Property groups
      </div>
      <Card>
        <CardHeader>
          <FilterHeader />
        </CardHeader>
        <CardContent>
          <DataTable columns={columns} data={groups} />
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyGroupsPage;
