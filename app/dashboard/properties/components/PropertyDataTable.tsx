import { DataTable } from "@/app/components/display/data-table";
import React from "react";
import { columns } from "../columns";
import { Property } from "@/app/lib/entities/properties";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import { BASE_URL } from "@/app/lib/constants";

const PropertyDataTable: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  // await new Promise((resolve) => {
  //   setTimeout(resolve, 3000);
  // });
  let properties: Property[];
  try {
    const queryParams = new URLSearchParams(searchParams);
    const { results }: { results: Property[] } = await (
      await fetch(
        new URL(`/api/proxy/properties?${queryParams.toString()}`, BASE_URL),
        {
          cache: "no-cache",
        }
      )
    ).json();
    properties = results;
  } catch (error: any) {
    console.log(error.message);
    properties = [];
  }
  return <DataTable columns={columns} data={properties} />;
};

export default PropertyDataTable;
