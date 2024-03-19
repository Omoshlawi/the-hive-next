"use client";
import { DataTable } from "@/app/components/display/data-table";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { columns } from "./columns";
import { Agency } from "@/app/lib/entities/agency";

interface Props {
  agents: Agency[];
}

const RenderAgencyTable: FC<Props> = ({ agents }) => {
  const { push } = useRouter();
  return (
    <DataTable
      columns={columns}
      data={agents}
      onAdd={() => push("/dashboard/agencies/add")}
    />
  );
};

export default RenderAgencyTable;
