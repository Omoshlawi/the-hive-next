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
  return <DataTable columns={columns} data={listings} />;
};

export default RenderTable;
