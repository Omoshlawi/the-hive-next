import React from "react";
import { Skeleton } from "@/app/components/ui/skeleton";
import clsx from "clsx";
import { range } from "lodash";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const loading = () => {
  return (
    <div className="p-2">
      <p className={clsx("text-2xl pb-10 text-start self-start")}>Services</p>
      <div className="flex flex-row-reverse">
        <Skeleton className="h-4 w-[250px]" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {range(8).map((i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>
                <Skeleton className="h-4 w-[250px]" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Skeleton className="h-4 w-[250px]" />
            </CardContent>
            <CardFooter>
              <Skeleton className="h-4 w-[250px]" />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default loading;
