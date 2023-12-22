"use client";

import React from "react";
import { Input } from "@/app/components/ui/input";
import {
  ChevronDown,
  FilterIcon,
  PlusIcon,
  SearchIcon,
  Trash2,
} from "lucide-react";
import { Button } from "@/app/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/app/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

const FilterHeader = () => {
  return (
    <div className="flex items-center md:space-x-2 flex-col md:flex-row max-md:space-y-2">
      <Input placeholder="Search...." />
      <div className="flex md:space-x-2 items-center flex-col md:flex-row md:justify-end w-full max-md:space-y-2">
        <Select onValueChange={(vale) => {}}>
          <SelectTrigger className="">
            <SelectValue placeholder="Page size" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Size</SelectLabel>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant={"outline"} className="max-md:w-full">
          <div className="flex items-center space-x-2">
            <FilterIcon /> <span className="text-lg">Filter</span>
          </div>
        </Button>
        <Button variant={"outline"} className="max-md:w-full">
          <div className="flex items-center space-x-2">
            <PlusIcon /> <span className="text-lg">Add Property</span>
          </div>
        </Button>

        <Button variant={"outline"} className="max-md:w-full">
          <div className="flex items-center space-x-2 text-red-900">
            <Trash2 /> <span className="text-lg">Delete Selected</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default FilterHeader;
