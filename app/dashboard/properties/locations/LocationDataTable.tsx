import { BASE_URL } from "@/app/lib/constants";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/app/components/display/data-table";
import { Location } from "@/app/lib/entities/properties";

const LocationDataTable: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  const queryParams = new URLSearchParams(searchParams);
  const { results: locations }: { results: Location[] } = await (
    await fetch(`${BASE_URL}/properties/locations?${queryParams.toString()}`, {
      cache: "no-cache",
    })
  ).json();
  

  return <DataTable columns={columns} data={locations ??[]} />;
};

export default LocationDataTable;
