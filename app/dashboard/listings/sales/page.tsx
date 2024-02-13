"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React, { Suspense } from "react";
import TableSkeleton from "../../properties/components/TableSkeleton";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import SalesListingsDataTable from "./table/SalesListingDataTable";

const SalesListing: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  return (
    <div>
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
