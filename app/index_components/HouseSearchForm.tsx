"use client";

import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { SearchIcon, SlidersHorizontal } from "lucide-react";
import { Slider } from "../components/ui/slider";
import clsx from "clsx";
import { Checkbox } from "@/app/components/ui/checkbox";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { amenities, propertyStatus, propertyTypes } from "../lib/constants";

const HouseSearchForm = () => {
  const [advanced, setAdvanced] = useState(false);
  const { push } = useRouter();
  const toggleAdvanced = () => setAdvanced(!advanced);
  const [searchParams, setSearchParams] = useState<{
    search?: string;
    type?: string;
    status?: string;
    minPrice?: string;
    maxPrice?: string;
    minSize?: string;
    maxSize?: string;
    bedrooms?: string;
    amenities: string[];
  }>({ amenities: [] });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Search Property</CardTitle>
        <CardDescription>
          Find affordable and quality house today from our trusted patners
        </CardDescription>
      </CardHeader>
      <CardContent className={clsx("grid grid-cols-1 gap-3 lg:grid-cols-2")}>
        <Input
          id="house"
          placeholder="Type keyword..."
          defaultValue={searchParams.search}
          onChange={({ target: { value } }) => {
            setSearchParams({ ...searchParams, search: value });
          }}
        />
        {advanced && <Input id="location" placeholder="Location" />}
        <div className="grid grid-cols-2 gap-3">
          <Select
            defaultValue={searchParams.type}
            onValueChange={(value) =>
              setSearchParams({ ...searchParams, type: value })
            }
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
          <Select
            defaultValue={searchParams.status}
            onValueChange={(value) =>
              setSearchParams({ ...searchParams, status: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House status</SelectLabel>
                {propertyStatus.map(({ id, label }, index) => (
                  <SelectItem key={index} value={id}>
                    {label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          {advanced && (
            <Input
              defaultValue={searchParams.maxPrice}
              id="maxPrice"
              placeholder="Min Price"
              type="number"
              onChange={({ target: { value } }) => {
                setSearchParams({ ...searchParams, maxPrice: value });
              }}
            />
          )}
          {advanced && (
            <Input
              id="maxPrice"
              defaultValue={searchParams.minPrice}
              placeholder="Max price"
              type="number"
              onChange={({ target: { value } }) => {
                setSearchParams({ ...searchParams, minPrice: value });
              }}
            />
          )}
        </div>
        {advanced && (
          <div className="grid gap-3 grid-cols-1">
            <div>
              <Label htmlFor="size">Size</Label>
              <Slider
                id="size"
                defaultValue={[1, 700]}
                max={1000}
                step={1}
                onValueChange={([min, max]) =>
                  setSearchParams({
                    ...searchParams,
                    minSize: String(min),
                    maxSize: String(max),
                  })
                }
              />
            </div>
            <div>
              <div>
                <Label htmlFor="bedrooms">Bed rooms</Label>
                <Slider
                  id="bedrooms"
                  defaultValue={[1]}
                  max={10}
                  step={1}
                  onValueChange={(value) =>
                    setSearchParams({
                      ...searchParams,
                      bedrooms: String(value),
                    })
                  }
                />
              </div>
            </div>
          </div>
        )}
        {advanced && (
          <div>
            <p className="font-bold">Amenities</p>
            <div className="grid grid-cols-2 gap-3">
              {amenities.map(({ id, label }, index) => (
                <div className="items-center space-x-2" key={index}>
                  <Checkbox
                    id={id}
                    checked={searchParams.amenities.includes(id)}
                    onCheckedChange={(checked) => {
                      if (checked)
                        setSearchParams({
                          ...searchParams,
                          amenities: [...searchParams.amenities, id],
                        });
                      else
                        setSearchParams({
                          ...searchParams,
                          amenities: searchParams.amenities.filter(
                            (amenity) =>
                              !searchParams.amenities.includes(amenity)
                          ),
                        });
                    }}
                  />
                  <Label
                    htmlFor={id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        )}
        {!advanced && <div className="hidden md:block" />}
        <div className="flex space-x-2 items-end justify-end">
          <Button
            onClick={() => {
              const queryParams = new URLSearchParams({
                ...searchParams,
                amenities: searchParams.amenities.join(","),
              });
              push(`/listings?${queryParams.toString()}`);
            }}
          >
            <div className="flex space-x-3 items-center">
              <span className="text-xl">Search</span>
              <SearchIcon />
            </div>
          </Button>
          <Button onClick={toggleAdvanced}>
            <SlidersHorizontal />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HouseSearchForm;
