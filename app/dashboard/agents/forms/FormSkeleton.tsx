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

const PropertyFormSkeleton = () => {
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
          <Skeleton className="w-52 h-5 mb-2" />
          <Skeleton className="w-full h-9 mb-2" />
          <div className="grid gap-2 md:grid-cols-2">
            <div>
              <Skeleton className="w-52 h-5 mb-2" />
              <Skeleton className="w-full h-9 mb-2" />
            </div>
            <div>
              <Skeleton className="w-52 h-5 mb-2" />
              <Skeleton className="w-full h-9 mb-2" />
            </div>
          </div>
          <div className="flex space-x-2 mb-2">
            <Skeleton className="rounded-full w-9 h-9" />
            <div className="grid grid-cols-1 gap-2 w-full">
              <Skeleton className="w-full h-6" />
              <Skeleton className="w-full h-6" />
            </div>
          </div>
          <Skeleton className="w-52 h-5 mb-2" />
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
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>
            <div className="flex justify-between items-center">
              <Skeleton className="w-52 h-9 mb-2" />
              <Skeleton className="w-52 h-9 mb-2" />
            </div>
            <Skeleton className="w-4/12 h-9" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton className="w-full h-9 mb-2" />
          <Skeleton className="w-full h-[120px] mb-2" />
          <div className="flex space-x-2 mb-2">
            <Skeleton className="w-32 h-32" />
            <Skeleton className="w-full h-32 mb-2" />
          </div>
          <div className="flex space-x-2 mb-2">
            <Skeleton className="w-32 h-32" />
            <Skeleton className="w-full h-32 mb-2" />
          </div>
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
          <Skeleton className="w-60 h-5 mb-2" />
          <div className="flex space-x-2">
            <Skeleton className="w-52 h-9 mb-2" />
            <Skeleton className="w-full h-9 mb-2" />
          </div>
          <div className="flex space-x-2">
            <Skeleton className="w-52 h-9 mb-2" />
            <Skeleton className="w-full h-9 mb-2" />
          </div>
          <div className="flex space-x-2">
            <Skeleton className="w-52 h-9 mb-2" />
            <Skeleton className="w-full h-9 mb-2" />
          </div>
        </CardContent>
      </Card>
      <Card className="border-none">
        <Skeleton className="w-full h-9 mb-2" />
      </Card>
    </div>
  );
};

export default PropertyFormSkeleton;
