"use client";
import { DataTable } from "@/app/components/display/data-table";
import { BASE_URL } from "@/app/lib/constants";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import React from "react";
import { columns } from "./columns";
import { Pricing } from "@/app/lib/entities/sass";

const PricingsTable: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  let pricings: Pricing[] = [];
  try {
    const response = await fetch(new URL(`/api/proxy/pricing`, BASE_URL), {
      cache: "no-cache",
    });
    if (response.ok) {
      pricings = (await response.json()).results;
    }
  } catch (error) {
    console.log(error);
  }

  return <DataTable columns={columns} data={pricings} />;
};

export default PricingsTable;
