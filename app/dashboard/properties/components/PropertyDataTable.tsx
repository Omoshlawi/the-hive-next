import { DataTable } from "@/app/components/display/data-table";
import React from "react";
import { columns } from "../columns";
import { Property } from "@/app/lib/entities/properties";

const PropertyDataTable = async ({ searchParams }: { searchParams?: {} }) => {
  const queryParams = new URLSearchParams(searchParams);
  const { results: properties }: { results: Property[] } = await (
    await fetch(`http://localhost:5000/properties/?${queryParams.toString()}`, {
      // cache: "no-cache",
    })
  ).json();
  return (
    <div>
      <DataTable columns={columns} data={properties} />
    </div>
  );
};

export default PropertyDataTable;
