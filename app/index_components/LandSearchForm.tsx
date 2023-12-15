import React from "react";
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
import { BookAudioIcon, SearchIcon, SlidersHorizontal } from "lucide-react";
import { Slider } from "../components/ui/slider";
import clsx from "clsx";
import { Checkbox } from "@/app/components/ui/checkbox";

const LandSearchForm = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Land</CardTitle>
        <CardDescription>
          Search for land that best fits you needs with eas.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid grid-rows-1 gap-3">
        <Input id="current" placeholder="Type keyword..." />
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

export default LandSearchForm;
