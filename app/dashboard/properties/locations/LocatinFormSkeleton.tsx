"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Skeleton } from "@/app/components/ui/skeleton";

const LocatinFormSkeleton = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-52 h-9 mb-2" />
            <Skeleton className="w-4/12 h-9" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-9 mb-2" />
          <Skeleton className="w-full h-[300px] mb-2" />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <Skeleton className="w-52 h-9 mb-2" />
            <Skeleton className="w-4/12 h-9" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-52 h-5 mb-2" />
          <Skeleton className="w-full h-9 mb-2" />
          <Skeleton className="w-52 h-5 mb-2" />
          <Skeleton className="w-full h-9 mb-2" />
          <Skeleton className="w-52 h-5 mb-2" />
          <Skeleton className="w-full h-9 mb-2" />
          <Skeleton className="w-52 h-5 mb-2" />
          <Skeleton className="w-full h-9 mb-2" />
          <Skeleton className="w-52 h-5 mb-2" />
          <Skeleton className="w-full h-9 mb-2" />
        </CardContent>
      </Card>
      <Card className="border-none">
        <Skeleton className="w-full h-9 mb-2" />
      </Card>
    </div>
  );
};

export default LocatinFormSkeleton;
