"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

import React, { useCallback, useEffect } from "react";

import { useApiClient } from "@/app/lib/api";
import { Location } from "@/app/lib/entities/properties";
import ComboBox from "@/app/components/display/ComboBox";
import { useFormContext } from "react-hook-form";
import { default as LocationDialogForm } from "@/app/dashboard/properties/locations/LocatonForm";
import { z } from "zod";
import { PropertySchema } from "@/app/lib/schema";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Button } from "@/app/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

type PropertyForm = z.infer<typeof PropertySchema>;

const LocationForm = () => {
  const { request, loading, data, error } = useApiClient<{
    results: Location[];
  }>({ results: [] });
  const locations = data?.results ?? [];
  const handleFetchLocations = useCallback(async () => {
    await request({
      method: "GET",
      redirect: "follow",
      url: `properties/locations`,
    });
  }, []);

  useEffect(() => {
    handleFetchLocations();
  }, []);
  const form = useFormContext<PropertyForm>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex justify-between items-end">
            Location
            <Link href={"/dashboard/properties/locations"}>
              <Button>
                <Plus />
                Add Location
              </Button>
            </Link>
          </div>
        </CardTitle>
        <CardDescription>Propety locations</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <br />
              <FormControl>
                <ComboBox
                  data={locations}
                  labelExtractor={(item) =>
                    `${item.address} ${item.city} ${item.state} ${item.country} ${item.zipCode}`
                  }
                  valuextractor={(item) => item._id}
                  className="w-full"
                  value={field.value}
                  onValueChange={field.onChange}
                  onBlur={field.onBlur}
                  label="Location"
                  // {...field}
                />
              </FormControl>
              <FormDescription>
                Select property location or create new location
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default LocationForm;
