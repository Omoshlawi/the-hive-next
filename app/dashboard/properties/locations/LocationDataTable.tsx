import { PropsWithSearchParams } from "@/app/lib/types/base";
import React from "react";
import { columns } from "./columns";
import { DataTable } from "@/app/components/display/data-table";
import { Location } from "@/app/lib/entities/properties";
import { BASE_URL } from "@/app/lib/constants";

const LocationDataTable: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  const queryParams = new URLSearchParams(searchParams);
  const { results: locations }: { results: Location[] } = await (
    await fetch(
      new URL(
        `/api/proxy/properties/locations?${queryParams.toString()}`,
        BASE_URL
      ),
      {
        cache: "no-cache",
      }
    )
  ).json();

  return <DataTable columns={columns} data={locations ?? []} />;
};

export default LocationDataTable;
