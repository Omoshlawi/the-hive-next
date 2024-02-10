"use client";
import { DataTable } from "@/app/components/display/data-table";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { columns } from "./columns";
import { Listing } from "@/app/lib/entities/listings";

interface Props {
  listings: Listing[];
}

const RenderTable: FC<Props> = ({ listings }) => {
  const { push } = useRouter();
  return (
    <DataTable
      columns={columns}
      data={listings}
      onAdd={() => push("/dashboard/listings/sales/add")}
    />
  );
};

export default RenderTable;
