import { lusitana } from "@/app/fonts";
import React, { Suspense } from "react";
import FilterHeader from "./components/FilterHeader";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import PropertyDataTable from "./components/PropertyDataTable";
import TableSkeleton from "./components/TableSkeleton";

const MyProperties = async ({ searchParams }: { searchParams?: {} }) => {
  return (
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Properties
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
            <PropertyDataTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;
