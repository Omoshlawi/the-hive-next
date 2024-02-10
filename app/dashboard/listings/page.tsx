import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { lusitana } from "@/app/fonts";
import React, { Suspense } from "react";
import FilterHeader from "../properties/components/FilterHeader";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { PlusIcon, Trash2 } from "lucide-react";
import TableSkeleton from "../properties/components/TableSkeleton";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import ListingsDataTable from "./table/ListingsDataTable";

const PropertyListings: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  return (
    <div>
      <Card>
        <CardHeader className="flex-1">
          <CardTitle>Property Listings</CardTitle>
        </CardHeader>
        <CardContent>
          <Suspense
            key={"searchResults"}
            fallback={<TableSkeleton cols={4} rows={7} />}
          >
            <ListingsDataTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default PropertyListings;
