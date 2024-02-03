"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { ListingSchema } from "@/app/lib/schema/listingsSchema";
import React, { useCallback, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import dynamic from "next/dynamic";
import { useApiClient } from "@/app/lib/api";
import { APIListingResponse } from "@/app/lib/types/base";
import { useDebouncedCallback } from "use-debounce";
import { Property } from "@/app/lib/entities/properties";
const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false, // Prevent SSR
});

const ListingProperties = () => {
  const form = useFormContext<z.infer<typeof ListingSchema>>();
  const { data, loading, request, error } = useApiClient<
    APIListingResponse<Property>
  >({
    results: [],
  });
  const [search, setSearch] = useState<string>();
  const properties = data?.results ?? [];
  const handleSearch = useDebouncedCallback(async (value) => {
    const queryParams = new URLSearchParams({ search: value });
    await request({
      url: `properties?${queryParams.toString()}`,
      method: "GET",
    });
  }, 300);

  useEffect(() => {
    if (search) handleSearch(search);
  }, [search]);

  console.log(form.formState.errors);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Listing Properties</CardTitle>
        <CardDescription>
          Listing or list of properties to be listed as a unit for rent, sales,
          e.t.c
        </CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="properties"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Properties</FormLabel>
              <FormControl>
                <ReactSelect
                  className="dark:text-primary-foreground"
                  placeholder="Search property..."
                  inputValue={search}
                  onInputChange={(value) => setSearch(value)}
                  value={field.value.map((v) => ({
                    value: v.property,
                    label: v.title,
                  }))}
                  onChange={(newValue: any) =>
                    field.onChange(
                      newValue.map((v: any) => ({
                        property: v.value,
                        title: v.label,
                      }))
                    )
                  }
                  isMulti={true}
                  isLoading={loading}
                  options={properties
                    .map((place) => ({
                      value: place._id,
                      label: place.title,
                    }))
                    .filter(
                      (prop) =>
                        field.value.findIndex(
                          (p) => p.property === prop.value
                        ) === -1
                    )}
                />
              </FormControl>
              <FormDescription>Properties</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default ListingProperties;
