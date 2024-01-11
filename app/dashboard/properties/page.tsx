import { lusitana } from "@/app/fonts";

import React, { Suspense } from "react";
import FilterHeader from "./components/FilterHeader";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import Image from "next/image";
import moment from "moment";
import { DataTable } from "@/app/components/display/data-table";
import { columns } from "./columns";
import { Skeleton } from "@/app/components/ui/skeleton";
import PropertyDataTable from "./components/PropertyDataTable";

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
          <Suspense fallback={<Skeleton />}>
            <PropertyDataTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;
