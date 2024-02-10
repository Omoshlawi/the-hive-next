"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { lusitana } from "@/app/fonts";
import React, { Suspense } from "react";
import FilterHeader from "../../properties/components/FilterHeader";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { PlusIcon, Trash2 } from "lucide-react";
import TableSkeleton from "../../properties/components/TableSkeleton";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import SalesListingsDataTable from "./table/SalesListingDataTable";

const SalesListing: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  return (
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Sales Listings
      </h1>
      <Card>
        <CardHeader className="flex-1">
          <CardTitle>Sales Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense
            key={"searchResults"}
            fallback={<TableSkeleton cols={4} rows={7} />}
          >
            <SalesListingsDataTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default SalesListing;
