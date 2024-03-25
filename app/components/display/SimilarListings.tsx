"use client";
import { Badge } from "@/app/components/ui/badge";
import { Skeleton } from "@/app/components/ui/skeleton";
import { Listing } from "@/app/lib/entities/listings";
import { formartCurrency } from "@/app/lib/utils";
import { MapPin } from "lucide-react";
import React, { useEffect, useState } from "react";

const SimilarListings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      setLoading(false);
    })();
  }, []);

  return (
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
            {Array.from({ length: 2 }).map((_, index) => (
              <li
                key={index}
                className="flex space-x-3 text-left sm:flex-row sm:space-x-5 sm:space-y-0 p-3 bg-accent rounded-md"
              >
                <div className="shrink-0 relative">
                  <img
                    className="h-24 w-24 max-w-full rounded-lg object-cover"
                    src="https://images.unsplash.com/photo-1588484628369-dd7a85bfdc38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNuZWFrZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=150&q=60"
                    alt=""
                  />
                </div>
                <div className="relative flex flex-1 flex-col justify-between">
                  <span className="font-semibold">
                    Loss vengel New Apartment
                  </span>
                  <div className="flex">
                    <MapPin />
                    <span>Nairobi Kenya</span>
                  </div>
                  <div className="flex  justify-between">
                    <Badge className="bg-background text-primary">
                      For rent
                    </Badge>
                    <span className="font-semibold">
                      {formartCurrency(500000)}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default SimilarListings;
