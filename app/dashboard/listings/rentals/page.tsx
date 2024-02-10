import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React, { Suspense } from "react";
import TableSkeleton from "../../properties/components/TableSkeleton";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import RentalListingsDataTable from "./table/RentalListingsDataTable";

const RentalListings: React.FC<PropsWithSearchParams> = ({ searchParams }) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex-1">
          <CardTitle>Rental Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense
            key={"searchResults"}
            fallback={<TableSkeleton cols={4} rows={7} />}
          >
            <RentalListingsDataTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default RentalListings;
