import { BASE_URL } from "@/app/lib/constants";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import React, { FC } from "react";
import RenderAgentsTable from "./RenderAgentsTable";
import { Agent } from "@/app/lib/entities/agents";

const AgentsDataTable: FC<PropsWithSearchParams> = async ({ searchParams }) => {
  let agents: Agent[] = [];
  try {
    const response = await fetch(new URL(`/api/proxy/agents`, BASE_URL), {
      cache: "no-cache",
    });
    if (response.ok) {
      agents = (await response.json()).results;
    }
  } catch (error) {
    console.log(error);
  }
  return <RenderAgentsTable agents={agents} />;
};

export default AgentsDataTable;
