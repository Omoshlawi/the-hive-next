import { lusitana } from "@/app/fonts";
import React, { Suspense } from "react";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import FilterHeader from "../components/FilterHeader";
import TableSkeleton from "../components/TableSkeleton";
import LocationDataTable from "./LocationDataTable";
import { PropsWithSearchParams } from "@/app/lib/types/base";

const LocationsPage: React.FC<PropsWithSearchParams> = ({ searchParams }) => {
  return (
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Locations
      </h1>
      <Card>
        <CardHeader>
          <FilterHeader />
        </CardHeader>
        <CardContent>
          <Suspense
            key={"searchResults"}
            fallback={<TableSkeleton cols={4} rows={7} />}
          >
            <LocationDataTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationsPage;
