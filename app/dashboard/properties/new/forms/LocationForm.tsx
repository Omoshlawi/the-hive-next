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
import { useFormContext } from "react-hook-form";
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
import dynamic from "next/dynamic";
const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false, // Prevent SSR
});

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
  const getLabel = (value: any) => {
    const place = locations.find((loc) => loc._id === value);
    return place
      ? `${place.address} ${place.city} ${place.state} ${place.country} ${place.zipCode}`
      : undefined;
  };
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
                <ReactSelect
                  ref={field.ref}
                  onBlur={field.onBlur}
                  name={field.name}
                  className="dark:text-primary-foreground"
                  placeholder="Search location..."
                  value={{ label: getLabel(field.value), value: field.value }}
                  onChange={(newValue: any) => field.onChange(newValue.value)}
                  isSearchable
                  isMulti={false}
                  isLoading={loading}
                  options={locations.map((place) => ({
                    value: place._id,
                    label: `${place.address} ${place.city} ${place.state} ${place.country} ${place.zipCode}`,
                  }))}
                />
                {/* <ComboBox
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
                /> */}
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
