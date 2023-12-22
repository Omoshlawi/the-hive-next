import { lusitana } from "@/app/fonts";

import React from "react";
import FilterHeader from "./components/FilterHeader";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { z } from "zod";
import Image from "next/image";
import moment from "moment";
import { DataTable } from "@/app/components/display/data-table";
import { columns } from "./columns";

const MyProperties = async ({ searchParams }: { searchParams?: {} }) => {
  const queryParams = new URLSearchParams(searchParams);
  const { results: properties }: { results: Property[] } = await (
    await fetch(`http://localhost:5000/properties/?${queryParams.toString()}`, {
      cache: "no-cache",
    })
  ).json();

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
          <DataTable columns={columns} data={properties} />
        </CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;
