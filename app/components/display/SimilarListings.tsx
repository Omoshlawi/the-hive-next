"use client";
import { Badge } from "@/app/components/ui/badge";
import { Skeleton } from "@/app/components/ui/skeleton";
import { lusitana } from "@/app/fonts";
import { useApiClient } from "@/app/lib/api";
import { Listing } from "@/app/lib/entities/listings";
import { APIListingResponse } from "@/app/lib/types/base";
import { formartCurrency } from "@/app/lib/utils";
import clsx from "clsx";
import { Building, MapPin } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SimilarListings = () => {
  const { loading, request, data, error } = useApiClient<
    APIListingResponse<Listing>
  >({ results: [] });
  const listings = data?.results ?? [];
  useEffect(() => {
    (async () => {
      await request({ url: "recommender/listings", method: "GET" });
      // setLoading(true);
      // await new Promise((resolve) => setTimeout(resolve, 5000));
      // setLoading(false);
    })();
  }, []);

  return (
    <>
      {listings.length > 0 && (
        <p className={clsx("text-2xl my-4", lusitana.className)}>
          Recommended listing
        </p>
      )}
      <div className=" rounded-sm flex flex-col  relative overflow-hidden">
        <ul className="grid grid-cols-1 gap-3">
          {loading ? (
            <>
              {Array.from({ length: 3 }).map((_, index) => (
                <li
                  key={index}
                  className="flex space-x-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0 p-3 rounded-md border"
                >
                  <div className="shrink-0 relative">
                    <Skeleton className="h-24 w-24 max-w-full rounded-lg object-cover" />
                  </div>
                  <div className="relative flex flex-1 flex-col justify-between">
                    <Skeleton className="h-7" />
                    <Skeleton className="w-[50%] h-5" />
                    <div className="flex  justify-between">
                      <Skeleton className="h-5 w-[25%] rounded-full" />
                      <Skeleton className="h-5 w-[50%]" />
                    </div>
                  </div>
                </li>
              ))}
            </>
          ) : (
            <>
              {listings.map(
                (
                  { title, sale, rental, coverImage, price, properties, id },
                  index
                ) => (
                  <li
                    key={index}
                    className="flex space-x-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0 p-3 bg-accent rounded-md"
                  >
                    <div className="shrink-0 relative">
                      <img
                        className="h-24 w-24 max-w-full rounded-lg object-cover"
                        src={`/api/proxy/files/${coverImage.path}`}
                        alt=""
                      />
                    </div>
                    <div className="relative flex flex-1 flex-col justify-between">
                      <span className="font-semibold ">
                        <Link href={`/listings/${id}`} className="">
                          {title}
                        </Link>
                      </span>
                      <div className="flex">
                        <Building />
                        <span>{`${properties.length} Properties`}</span>
                      </div>
                      <div className="flex  justify-between">
                        <Badge className="bg-background text-primary">
                          {sale && "For Sale"}
                          {rental && "For Rent"}
                        </Badge>
                        <span className="font-semibold">
                          {formartCurrency(Number(price))}
                        </span>
                      </div>
                    </div>
                  </li>
                )
              )}
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default SimilarListings;
