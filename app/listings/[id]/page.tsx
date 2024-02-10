import React, { FC } from "react";
import { PropsWithPathParams } from "@/app/lib/types/base";
import { Listing } from "@/app/lib/entities/listings";
import { BASE_URL } from "@/app/lib/constants";
import { ListingProfile } from "../components";

const ListingDetail: FC<PropsWithPathParams> = async ({ params: { id } }) => {
  let listing: Listing;
  try {
    listing = await (
      await fetch(new URL(`/api/proxy/listings/${id}`, BASE_URL), {
        cache: "no-cache",
      })
    ).json();
  } catch (error: any) {
    return <div>404 not found</div>;
  }
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 m-2 lg:mx-10 lg:my-5 gap-2">
      <div className="lg:col-span-1 lg:mr-10 ">
        <ListingProfile listing={listing} />
      </div>
      <div className="lg:col-span-3">properties info</div>
    </div>
  );
};

export default ListingDetail;
