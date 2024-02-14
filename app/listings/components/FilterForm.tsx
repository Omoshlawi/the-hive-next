"use client";

import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Input } from "@/app/components/ui/input";
import { Separator } from "@/app/components/ui/separator";
import React, { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Slider } from "@/app/components/ui/slider";
import dynamic from "next/dynamic";
import { Card } from "@/app/components/ui/card";
const ReactSelect = dynamic(() => import("react-select"), {
  ssr: false, // Prevent SSR
});
const FilterForm = () => {
  const [priceRange, setPriceRange] = useState<number[]>([50, 400]);
  const amenities = [
    "Wifi",
    "Security",
    "Conference room",
    "CCTV Camera",
    "Entertainment",
  ];
  return (
    <Card className="border-none shadow-md shadow-indigo-400">
      {/* Header */}
      <div className="p-2 ">
        <div className="w-full flex justify-between items-center mb-2 ">
          <span className="font-bold">Filters</span>
          <Button variant={"link"}>Clear all</Button>
        </div>
        {/* seach */}
        <Input placeholder="Seach ..." />
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
      </div>

      <Separator className="mt-4" />
      {/* Size */}
      <div className="p-2">
        <span className="opacity-30">Age</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <Input placeholder="max age" type="number" />
          <Input placeholder="min age" type="number" />
        </div>
      </div>
      {/* Age */}
      <div className="p-2">
        <span className="opacity-30">Size</span>
        <div className="w-full grid grid-cols-2 gap-2">
          <Input placeholder="min sqft size" type="number" />
          <Input placeholder="max sqft size" type="number" />
        </div>
      </div>
      <Separator className="mt-4" />
      {/* price */}
      <div className="p-2">
        <span className="uppercase opacity-30">Price</span>
        <div className="w-full my-4">
          <Slider
            min={0}
            max={1000}
            value={priceRange}
            // value={priceRange}
            step={10}
            onValueChange={setPriceRange}
          />
        </div>
        <div className="w-full grid grid-cols-2 gap-2">
          <Input
            prefix="$"
            type="number"
            value={priceRange[0]}
            onChange={({ target: { value } }) => {
              setPriceRange((range) => [Number(value), range[1]]);
            }}
          />
          <Input
            prefix="$"
            type="number"
            value={priceRange[1]}
            onChange={({ target: { value } }) => {
              setPriceRange((range) => [range[0], Number(value)]);
            }}
          />
        </div>
      </div>
      <Separator className="mt-4" />

      {/* Categories */}
      <div className="p-2">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline p-0 m-0">
              <span className="uppercase opacity-30">Amenities</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {amenities.map((amenity, index) => (
                  <li key={index} className="items-center space-x-2">
                    <Checkbox />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Separator className="" />

      {/* Categories */}
      <div className="p-2 ">
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1" className="border-none">
            <AccordionTrigger className="hover:no-underline p-0 m-0">
              <span className="uppercase opacity-30">Amenities</span>
            </AccordionTrigger>
            <AccordionContent>
              <ul>
                {amenities.map((amenity, index) => (
                  <li key={index} className="items-center space-x-2">
                    <Checkbox />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default FilterForm;
