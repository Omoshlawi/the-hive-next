import { DataTable } from "@/app/components/display/data-table";
import React from "react";
import { columns } from "../columns";
import { Property } from "@/app/lib/entities/properties";
import { BASE_URL } from "@/app/lib/constants";

const PropertyDataTable = async ({ searchParams }: { searchParams?: {} }) => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });
  const queryParams = new URLSearchParams(searchParams);
  const { results: properties }: { results: Property[] } = await (
    await fetch(`${BASE_URL}/properties/?${queryParams.toString()}`, {
      cache: "no-cache",
    })
  ).json();

  return <DataTable columns={columns} data={properties} />;
};

export default PropertyDataTable;
