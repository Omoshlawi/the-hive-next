"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { LocationSchema } from "@/app/lib/schema";
import React, { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/app/components/ui/input";
type LocationFormType = z.infer<typeof LocationSchema>;
import LocationPicker from "../LocationPicker";
import { useApiClient } from "@/app/lib/api";
import { APIListingResponse } from "@/app/lib/types/base";
import { PlaceSearchResult } from "@/app/lib/entities/maps";
import { useDebouncedCallback } from "use-debounce";
import dynamic from "next/dynamic";
const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false, // Prevent SSR
});
// import ReactSelect from "react-select";

const LocationGoogleMap = () => {
  const { setValue } = useFormContext<LocationFormType>();
  const { data, loading, request, error } = useApiClient<
    APIListingResponse<PlaceSearchResult>
  >({
    results: [],
  });
  const [search, setSearch] = useState<string>();
  const [selected, setSelected] = useState<PlaceSearchResult>();
  const places = data?.results ?? [];
  const handleSearch = useDebouncedCallback(async (value) => {
    const queryParams = new URLSearchParams({ q: value });
    await request({
      url: `maps/places?${queryParams.toString()}`,
      method: "GET",
    });
  }, 300);

  useEffect(() => {
    if (search) handleSearch(search);
  }, [search]);
  useEffect(() => {
    if (selected) {
      setValue("address", selected.display ?? "");
      setValue("city", selected.properties.city ?? "");
      setValue("country", selected.properties.country ?? "");
      setValue("city", selected.properties.county ?? "");
      setValue("longitude", selected.coordinates.lng);
      setValue("latitude", selected.coordinates.lat);
    }
  }, [selected]);

  // console.log("Errors: ", error);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Location search</CardTitle>
        <CardDescription>
          Pick search and pick location, drag marker to most apropriate location
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ReactSelect
          className="dark:text-primary-foreground"
          placeholder="Search location..."
          inputValue={search}
          onInputChange={(value) => setSearch(value)}
          value={{ label: selected?.display, value: selected?.display }}
          onChange={(newValue: any) =>
            setSelected(places.find((p) => p.display === newValue?.label))
          }
          isMulti={false}
          isLoading={loading}
          options={places.map((place) => ({
            value: place.display,
            label: place.display,
          }))}
        />
        {/* <Input
          placeholder="Search ...."
          // value={search}
          onChange={({ target: { value } }) => setSearch(value)}
        /> */}
        <div className="w-[100%] h-[400px] my-4 rounded-md overflow-auto">
          <LocationPicker location={selected} onLocationChange={setSelected} />
        </div>
      </CardContent>
    </Card>
  );
};

export default LocationGoogleMap;
