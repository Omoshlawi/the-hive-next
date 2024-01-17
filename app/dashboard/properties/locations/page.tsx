import { lusitana } from "@/app/fonts";
import React, { Suspense } from "react";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import FilterHeader from "../components/FilterHeader";
import TableSkeleton from "../components/TableSkeleton";
import LocationDataTable from "./LocationDataTable";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import { Button } from "@/app/components/ui/button";
import { PlusIcon, Trash2 } from "lucide-react";
import { default as LocationDalogForm } from "./LocatonForm";

const LocationsPage: React.FC<PropsWithSearchParams> = ({ searchParams }) => {
  return (
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Locations
      </h1>
      <Card>
        <CardHeader>
          <div>
            <FilterHeader />
            <div className="flex items-center space-x-2">
              <LocationDalogForm className="overflow-y-auto">
                <PlusIcon /> Add
              </LocationDalogForm>
            </div>

            <Button variant={"outline"} className="max-md:w-full">
              <div className="flex items-center space-x-2 text-red-900">
                <Trash2 /> <span className="text-lg">Delete Selected</span>
              </div>
            </Button>
          </div>
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
