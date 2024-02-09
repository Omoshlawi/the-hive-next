import { Button } from "@/app/components/ui/button";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import { Metadata } from "next";
import React, { Suspense } from "react";
import PricingForm from "./PricingForm";
import { PropsWithSearchParams } from "@/app/lib/types/base";
import { Card, CardContent, CardHeader } from "@/app/components/ui/card";
import FilterHeader from "../../properties/components/FilterHeader";
import Link from "next/link";
import { PlusIcon, Trash2 } from "lucide-react";
import TableSkeleton from "../../properties/components/TableSkeleton";
import PricingsTable from "./PricingsTable";

export const metadata: Metadata = {
  title: "Pricings | The hive admin",
  description: "Admin Pricings",
};

const PicingsPage: React.FC<PropsWithSearchParams> = ({ searchParams }) => {
  return (
    <div className="p-2">
      <p
        className={clsx(
          "text-2xl pb-10 text-start self-start",
          lusitana.className
        )}
      >
        Pricings
      </p>
      <Card>
        <CardHeader className="flex-1"></CardHeader>
        <CardContent>
          <Suspense
            key={"searchResults"}
            fallback={<TableSkeleton cols={4} rows={7} />}
          >
            <PricingsTable searchParams={searchParams} />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
};

export default PicingsPage;
