"use client";
import { DataTable } from "@/app/components/display/data-table";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { columns } from "../columns";
import { Property } from "@/app/lib/entities/properties";

interface Props {
  properties: Property[];
}

const RenderTable: FC<Props> = ({ properties }) => {
  const { push } = useRouter();
  return (
    <DataTable
      columns={columns}
      data={properties}
      onAdd={() => push("/dashboard/properties/new")}
    />
  );
};

export default RenderTable;
