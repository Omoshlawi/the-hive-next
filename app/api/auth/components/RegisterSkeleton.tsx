import { Skeleton } from "@/app/components/ui/skeleton";
import React from "react";
const RegisterSkeleton = () => {
  return (
    <div className="flex flex-col space-y-2">
      <Skeleton className="w-52 h-5" />
      <Skeleton className="w-full h-10" />

      <Skeleton className="w-52 h-5" />
      <Skeleton className="w-full h-10" />

      <Skeleton className="w-52 h-5" />
      <Skeleton className="w-full h-10" />

      <Skeleton className="w-52 h-5" />
      <Skeleton className="w-full h-10" />

      <Skeleton className="w-full h-10 mt-3" />
    </div>
  );
};

export default RegisterSkeleton;
