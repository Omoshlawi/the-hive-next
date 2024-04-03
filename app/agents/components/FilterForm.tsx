"use client";

import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Separator } from "@/app/components/ui/separator";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Slider } from "@/app/components/ui/slider";
import dynamic from "next/dynamic";
import { Card } from "@/app/components/ui/card";
import { amenities, propertyTypes } from "@/app/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { toInteger } from "lodash";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { propertyStatus } from "@/app/lib/constants";
import { useDebouncedCallback } from "use-debounce";
import RatingInput from "@/app/components/form/RatingInput";
const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false, // Prevent SSR
});
const FilterForm = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleSearch = useDebouncedCallback((key, value) => {
    const queryParams = new URLSearchParams(searchParams);
    if (value) {
      queryParams.set(key, value);
    } else {
      queryParams.delete(key);
    }
    replace(`${pathName}?${queryParams.toString()}`);
  }, 300);

  const amenitiesParams = searchParams.get("amenities")?.split(",") ?? [];

  return (
    <Card className="border-none shadow-md shadow-indigo-400">
      {/* Header */}
      <div className="p-2 ">
        <div className="w-full flex justify-between items-center mb-2 ">
          <span className="font-bold">Filters</span>
          <Button variant={"link"} onClick={() => replace(pathName)}>
            Clear all
          </Button>
        </div>
        {/* seach */}
        <Input
          name="search"
          placeholder="Seach ..."
          defaultValue={searchParams.get("search") ?? ""}
          onChange={({ target: { value, name } }) => handleSearch(name, value)}
        />

        <div className="w-full my-4">
          <ReactSelect
            className="dark:text-primary-foreground"
            placeholder="specilities"
            //   inputValue={search}
            //   onInputChange={(value) => setSearch(value)}
            //   value={{ label: selected?.display, value: selected?.display }}
            //   onChange={(newValue: any) =>
            //     setSelected(places.find((p) => p.display === newValue?.label))
            //   }
            isMulti={true}
            //   isLoading={loading}
            //   options={places.map((place) => ({
            //     value: place.display,
            //     label: place.display,
            //   }))}
          />
        </div>
        <div className="w-full my-4">
          <Input
            placeholder="Location"
            name="location"
            defaultValue={searchParams.get("location") ?? ""}
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
          />
        </div>
        <div className="w-full my-4">
          <Input
            placeholder="Minimum Listings"
            name="minListings"
            defaultValue={searchParams.get("minListings") ?? ""}
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
          />
        </div>
      </div>

      <Separator className="mt-4" />
      {/* Categories */}
      <div className="p-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline p-0 m-0">
              <span className="uppercase opacity-30">Rating</span>
            </AccordionTrigger>
            <AccordionContent>
              <RatingInput
                rating={
                  searchParams.get("rating")
                    ? Number(searchParams.get("rating"))
                    : -1
                }
                onRatingChange={(rating) =>
                  handleSearch("rating", String(rating))
                }
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Separator className="" />
    </Card>
  );
};

export default FilterForm;
