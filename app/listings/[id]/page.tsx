import React, { FC, Suspense } from "react";
import { PropsWithPathParams } from "@/app/lib/types/base";
import { Listing } from "@/app/lib/entities/listings";
import { BASE_URL } from "@/app/lib/constants";
import { ListingProfile, ListingPropertyCard } from "../components";
import { ListLayoutWithSideBar } from "@/app/components/layouts";
import HeroHeader from "@/app/components/display/HeroHeader";

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
    <div>
      <HeroHeader
        title="Listing Detail"
        subtitle={listing.title}
        backgroundImage={`/api/proxy/files/${listing.coverImage.path}`}
      />
      <ListLayoutWithSideBar sideBar={<ListingProfile listing={listing} />}>
        <div className="w-full rounded-sm flex flex-col space-y-4">
          <div className="p-5 bg-accent rounded-lg">
            <h1 className=" text-xl font-bold w-full">Listing Properties</h1>
          </div>
          <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
            {listing.properties.map(({ property }, index) => (
              <Suspense fallback={<div>Loading property ....</div>} key={index}>
                <ListingPropertyCard propertyId={property} />
              </Suspense>
            ))}
          </section>
        </div>
      </ListLayoutWithSideBar>
    </div>
  );
};

export default ListingDetail;
