import { Skeleton } from "@/app/components/ui/skeleton";
import React from "react";

const ServiceFormSkeleton = () => {
  return (
    <div className="grid grid-rows-1 gap-3">
      <Skeleton className="w-[200px] h-5" />
      <Skeleton className="w-full h-8" />
      <div className="flex items-center space-x-4">
        <Skeleton className="h-20 w-20 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-5 w-[250px]" />
          <Skeleton className="h-6 w-[50px]" />
        </div>
      </div>
      <Skeleton className="w-[200px] h-5" />
      <Skeleton className="w-full h-[150px]" />
      <Skeleton className="w-[200px] h-5" />
      <Skeleton className="w-full h-[150px]" />
      <div className="flex flex-row-reverse">
        <Skeleton className="w-[200px] h-7 " />
      </div>
    </div>
  );
};

export default ServiceFormSkeleton;
