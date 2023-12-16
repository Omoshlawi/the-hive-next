import { lusitana } from "@/app/fonts";

import React from "react";
import Search from "../components/Search";
import FilterHeader from "./components/FilterHeader";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const MyProperties = async () => {
  const properties: Property[] = await (
    await fetch("http://localhost:3000/api/properties")
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
        <CardContent></CardContent>
      </Card>
    </div>
  );
};

export default MyProperties;
