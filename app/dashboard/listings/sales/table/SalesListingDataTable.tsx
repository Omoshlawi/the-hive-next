import { BASE_URL } from "@/app/lib/constants";
import { Listing, SaleListing } from "@/app/lib/entities/listings";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import React, { FC } from "react";
import RenderTable from "./RenderTable";

const SalesListingsDataTable: FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  let listing: Listing[] = [];
  try {
    const response = await fetch(
      new URL(`/api/proxy/listings/sales`, BASE_URL),
      {
        cache: "no-cache",
      }
    );
    if (response.ok) {
      listing = ((await response.json()).results as SaleListing[]).map(
        (sales) => ({ ...sales.listing, saleListings:[sales] })
      );
    }
  } catch (error) {
    console.log(error);
  }
  return <RenderTable listings={listing} />;
};

export default SalesListingsDataTable;
