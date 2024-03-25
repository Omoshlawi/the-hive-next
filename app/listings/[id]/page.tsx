import React, { FC, Suspense } from "react";
import { PropsWithPathParams } from "@/app/lib/types/base";
import { Listing } from "@/app/lib/entities/listings";
import { BASE_URL } from "@/app/lib/constants";
import { ListingPropertyCard } from "../components";
import { ListLayoutWithSideBar } from "@/app/components/layouts";
import HeroHeader from "@/app/components/display/HeroHeader";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { CheckCircle } from "lucide-react";
import clsx from "clsx";
import { lusitana } from "@/app/fonts";
import SideBar from "../components/SideBar";

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
      <ListLayoutWithSideBar sideBar={<SideBar listing={listing} />}>
        <div className="w-full rounded-sm flex flex-col space-y-4 px-5">
          <div className="w-full flex flex-col space-y-4">
            <Card className="border-none shadow-md shadow-indigo-400">
              <CardHeader>
                <CardTitle>About listing</CardTitle>
              </CardHeader>
              <CardContent>{listing.description}</CardContent>
            </Card>
            <Card className="border-none shadow-md shadow-indigo-400">
              <CardHeader>
                <CardTitle>Amenities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {listing.amenities.map((amenity, index) => (
                    <div key={index} className="flex space-x-3 p-2">
                      <CheckCircle />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          <p className={clsx("text-4xl pt-4", lusitana.className)}>
            Properties
          </p>
          <section className="grid grid-cols-2  gap-6 lg:grid-cols-3 ">
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
