import React, { FC } from "react";
import { PropsWithPathParams } from "@/app/lib/types/base";
import { Listing } from "@/app/lib/entities/listings";
import { BASE_URL } from "@/app/lib/constants";

const ListingDetail: FC<PropsWithPathParams> = async ({ params: { id } }) => {
  let listing: Listing | undefined;
  try {
    listing = await (
      await fetch(new URL(`/api/proxy/listings/${id}`, BASE_URL), {
        cache: "no-cache",
      })
    ).json();
  } catch (error: any) {
    console.log(error.message);
  }
  return <div>{id}</div>;
};

export default ListingDetail;
