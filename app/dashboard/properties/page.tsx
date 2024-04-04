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
import RequireRole from "@/app/api/auth/components/RequireRole";

const MyProperties: React.FC<PropsWithSearchParams> = async ({
  searchParams,
}) => {
  return (
    <div>
      <RequireRole
        redirectUrl="/dashboard"
        roles={["agent", "agency", "owner"]}
        content={
          <div>
            You dont have permision to view your listing, to view you must be
            Registered as{" "}
            <Link href={"/dashboard/agents/add"} className="underline">
              Agent,
            </Link>
            or
            <Link className="underline" href={"/dasboard/owners/add"}>
              Property Owner
            </Link>
          </div>
        }
      />
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Properties
      </h1>
      <Card>
        <CardHeader className="flex-1"></CardHeader>
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
