"use client";
import { DataTable } from "@/app/components/display/data-table";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { columns } from "./columns";
import { Agent } from "@/app/lib/entities/agents";

interface Props {
  agents: Agent[];
}

const RenderAgentTable: FC<Props> = ({ agents }) => {
  const { push } = useRouter();
  return (
    <DataTable
      columns={columns}
      data={agents}
      onAdd={() => push("/dashboard/agents/add")}
    />
  );
};

export default RenderAgentTable;
