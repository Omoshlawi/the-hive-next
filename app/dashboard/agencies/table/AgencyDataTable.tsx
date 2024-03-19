import { BASE_URL } from "@/app/lib/constants";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import React, { FC } from "react";
import RenderAgentsTable from "./RenderAgencyTable";
import { Agent } from "@/app/lib/entities/agents";
import { Agency } from "@/app/lib/entities/agency";

const AgenncyDataTable: FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  let agencies: Agency[] = [];
  try {
    const response = await fetch(new URL(`/api/proxy/agencies`, BASE_URL), {
      cache: "no-cache",
    });
    if (response.ok) {
      agencies = (await response.json()).results;
    }
  } catch (error) {
    console.log(error);
  }
  return <RenderAgentsTable agents={agencies} />;
};

export default AgenncyDataTable;
