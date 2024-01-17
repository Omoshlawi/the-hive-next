"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { LocationSchema } from "@/app/lib/schema";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
type LocationFormType = z.infer<typeof LocationSchema>;
import LocationPicker from "../LocationPicker";

const LocationGoogleMap = () => {
  const form = useFormContext<LocationFormType>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location search</CardTitle>
        <CardDescription>
          Pick search and pick location, drag marker to most apropriate location
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Search ...." />
        <div className="w-[100%] h-[400px] my-4 rounded-md overflow-auto">
          <LocationPicker />
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationGoogleMap;
