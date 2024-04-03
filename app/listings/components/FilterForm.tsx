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
import dynamic from "next/dynamic";
import { Card } from "@/app/components/ui/card";
import { amenities, propertyTypes } from "@/app/lib/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
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
            placeholder="tags..."
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
          <Select
            name="status"
            defaultValue={searchParams.get("status") ?? ""}
            onValueChange={(value) => handleSearch("status", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Property status</SelectLabel>
                {propertyStatus.map(({ id, label }, index) => (
                  <SelectItem key={index} value={id}>
                    {label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full my-4">
          <Select
            name="tags"
            defaultValue={searchParams.get("tags") ?? ""}
            onValueChange={(value) => handleSearch("tags", value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House type</SelectLabel>
                {propertyTypes.map(({ id, label }, index) => (
                  <SelectItem key={index} value={id}>
                    {label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Separator className="mt-4" />
      {/* Advance Features */}
      <div className="p-2">
        <span className="opacity-30">Advanced features</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <Input
            placeholder="e.g bedrooms"
            name="name"
            defaultValue={searchParams.get("minAge") ?? ""}
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
          />
          <Input
            placeholder="e.g 2"
            name="value"
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
            defaultValue={searchParams.get("maxAge") ?? ""}
          />
        </div>
      </div>
      <Separator className="mt-4" />

      {/* Size */}
      <div className="p-2">
        <span className="opacity-30">Age</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <Input
            placeholder="min age"
            type="number"
            name="minAge"
            defaultValue={searchParams.get("minAge") ?? ""}
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
          />
          <Input
            placeholder="max age"
            type="number"
            name="maxAge"
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
            defaultValue={searchParams.get("maxAge") ?? ""}
          />
        </div>
      </div>
      {/* Age */}
      <div className="p-2">
        <span className="opacity-30">Size</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <Input
            placeholder="min sqft size"
            name="minSize"
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
            type="number"
            defaultValue={searchParams.get("minSize") ?? ""}
          />
          <Input
            name="maxSize"
            placeholder="max sqft size"
            type="number"
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
            defaultValue={searchParams.get("maxSize") ?? ""}
          />
        </div>
      </div>
      <Separator className="mt-4" />
      {/* price */}
      <div className="p-2">
        <span className="uppercase opacity-30">Price</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <Input
            name="minPrice"
            type="number"
            defaultValue={searchParams.get("minPrice") ?? ""}
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
          />
          <Input
            type="number"
            name="maxPrice"
            defaultValue={searchParams.get("maxPrice") ?? ""}
            onChange={({ target: { value, name } }) =>
              handleSearch(name, value)
            }
          />
        </div>
      </div>
      <Separator className="mt-4" />

      {/* Categories */}
      {/* <div className="p-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline p-0 m-0">
              <span className="uppercase opacity-30">Type</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {propertyTypes.map(({ id, label }, index) => (
                  <li key={index} className="items-center space-x-2">
                    <Checkbox />
                    <span>{label}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Separator className="" /> */}

      {/* Categories */}
      <div className="p-2 ">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline p-0 m-0">
              <span className="uppercase opacity-30">Amenities</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {amenities.map(({ id, label }, index) => {
                  const checked = amenitiesParams?.includes(id);
                  return (
                    <li key={index} className="items-center space-x-2">
                      <Checkbox
                        checked={checked}
                        onClick={() => {
                          // If checked uncheck
                          if (checked)
                            handleSearch(
                              "amenities",
                              amenitiesParams
                                ?.filter((ame) => ame !== id)
                                .join(",")
                            );
                          else
                            handleSearch(
                              "amenities",
                              [...amenitiesParams, id].join(",")
                            );
                        }}
                      />
                      <span>{label}</span>
                    </li>
                  );
                })}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default FilterForm;
