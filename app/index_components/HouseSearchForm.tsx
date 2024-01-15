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

const HouseSearchForm = () => {
  const [advanced, setAdvanced] = useState(false);
  const toggleAdvanced = () => setAdvanced(!advanced);
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
      <CardContent
        className={clsx("grid grid-cols-1 gap-3 lg:grid-cols-2", {})}
      >
        <Input id="house" placeholder="Type keyword..." />
        {advanced && <Input id="location" placeholder="Location" />}
        <div className="grid grid-cols-2 gap-3">
          <Select>
            <SelectTrigger>
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
            <SelectTrigger>
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
          {advanced && (
            <Input id="maxPrice" placeholder="Min Price" type="number" />
          )}
          {advanced && (
            <Input id="maxPrice" placeholder="Max price" type="number" />
          )}
        </div>
        {advanced && (
          <div className="grid gap-3 grid-cols-1">
            <div>
              <Label htmlFor="size">Size</Label>
              <Slider id="size" defaultValue={[1]} max={100} step={1} />
            </div>
            <div>
              <div>
                <Label htmlFor="bedrooms">Bed rooms</Label>
                <Slider id="bedrooms" defaultValue={[1]} max={10} step={1} />
              </div>
            </div>
          </div>
        )}
        {advanced && (
          <div>
            <p className="font-bold">Amenities</p>
            <div className="grid grid-cols-2 gap-3">
              {items.map(({ id, label }, index) => (
                <div className="items-center space-x-2" key={index}>
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
          </div>
        )}
        {!advanced && <div className="hidden md:block" />}
        <div className="flex space-x-2 items-end justify-end">
          <Button>
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
