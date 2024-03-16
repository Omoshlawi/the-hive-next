"use client";
import { DataTable } from "@/app/components/display/data-table";
import { useRouter } from "next/navigation";
import React, { FC } from "react";
import { columns } from "./columns";
import { Pricing } from "@/app/lib/entities/sass";

interface Props {
  pricing: Pricing[];
}

const RenderTable: FC<Props> = ({ pricing }) => {
  const { push } = useRouter();
  return (
    <DataTable
      columns={columns}
      data={pricing}
      onAdd={() => push("/dashboard/admin/pricings/add")}
    />
  );
};

export default RenderTable;
