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

const HouseSearchForm = () => {
  const items = [
    {
      id: "pool",
      label: "Swimming pool",
    },
    {
      id: "garage",
      label: "Garage",
    },
    {
      id: "balcony",
      label: "Balcony",
    },
    {
      id: "gym",
      label: "Gym",
    },
    {
      id: "courte",
      label: "Tennis court",
    },
    {
      id: "study",
      label: "Study room",
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>House</CardTitle>
        <CardDescription>
          Find affordable and quality house today from our trusted patners
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-rows-1 gap-3">
        <Input id="house" placeholder="Type keyword..." />
        <div className="grid grid-cols-2 gap-3">
          <Select>
            <SelectTrigger className="w-[170px]">
              <SelectValue placeholder="Select Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House type</SelectLabel>
                <SelectItem value="aprt">Apartment</SelectItem>
                <SelectItem value="banana">Mainsonet</SelectItem>
                <SelectItem value="blueberry">Vila</SelectItem>
                <SelectItem value="grapes">Bungalow</SelectItem>
                <SelectItem value="pineapple">Mansion</SelectItem>
                <SelectItem value="bedsiter">Bedsitter</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger className="w-[170px]">
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>House status</SelectLabel>
                <SelectItem value="on-rent">On rent</SelectItem>
                <SelectItem value="on-sale">on Sale</SelectItem>
                <SelectItem value="on-bid">On bid</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Input id="maxPrice" placeholder="Min Price" type="number" />
          <Input id="maxPrice" placeholder="Max price" type="number" />
        </div>
        <Input id="location" placeholder="Location" />
        <Label htmlFor="bedrooms">Bed rooms</Label>
        <Slider id="bedrooms" defaultValue={[1]} max={10} step={1} />
        <Label htmlFor="size">Size</Label>
        <Slider id="size" defaultValue={[1]} max={100} step={1} />
        <p className="font-bold">Amenities</p>
        <div className="grid grid-cols-2 gap-3">
          {items.map(({ id, label }) => (
            <div className="items-center space-x-2">
              <Checkbox id={id} />
              <Label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {label}
              </Label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="space-x-4 justify-center">
        <Button>
          <div className="flex space-x-3 items-center">
            <span className="text-xl">Search</span>
            <SearchIcon />
          </div>
        </Button>
        <Button>
          <SlidersHorizontal />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HouseSearchForm;
