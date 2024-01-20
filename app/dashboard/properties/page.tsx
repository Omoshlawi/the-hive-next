import { lusitana } from "@/app/fonts";
import React, { Suspense } from "react";
import FilterHeader from "./components/FilterHeader";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import PropertyDataTable from "./components/PropertyDataTable";
import TableSkeleton from "./components/TableSkeleton";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { PlusIcon, Trash2 } from "lucide-react";

const MyProperties: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  return (
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Properties
      </h1>
      <Card>
        <CardHeader className="flex-1">
          <div className="flex flex-col max-lg:space-y-2  lg:flex-row lg:items-center lg:space-x-2">
            <div className="flex-1">
              <FilterHeader />
            </div>
            <Link href={"/dashboard/properties/new"} className="flex-none">
              <Button className="w-full">
                <PlusIcon /> Add Property
              </Button>
            </Link>
            <Button variant={"outline"} className="max-md:w-full flex-none">
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
            <PropertyDataTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;
