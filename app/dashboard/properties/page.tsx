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

const MyProperties = async () => {
  const { results: properties }: { results: Property[] } = await (
    await fetch("http://localhost:5000/properties/", { cache: "no-cache" })
  ).json();

  return (
    <div>
      <div
        className={`${lusitana.className} font-bold text-2xl m-3 flex justify-between`}
      >
        <h1>Properties</h1>
        <Button>
          <Link href={"/dashboard/properties/new"}>Add property</Link>
        </Button>
      </div>
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
