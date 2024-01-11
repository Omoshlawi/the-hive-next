"use client";

import React from "react";
import { Input } from "@/app/components/ui/input";
import {
  Check,
  ChevronDown,
  ChevronsUpDown,
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

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/app/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/app/components/ui/popover";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface Props {}

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

const FilterHeader: React.FC<Props> = ({}) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const { replace } = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();
  // ?page_size=1

  const handleSearch = useDebouncedCallback((value) => {
    const queryParams = new URLSearchParams(searchParams);
    if (value) {
      queryParams.set("search", value);
    } else {
      queryParams.delete("search");
    }
    replace(`${pathName}?${queryParams.toString()}`);
  }, 300);
  return (
    <div className="flex items-center md:space-x-2 flex-col md:flex-row max-md:space-y-2">
      <Input
        value={searchParams.get("search") as string | undefined}
        placeholder="Search...."
        onChange={({ target: { value } }) => {
          handleSearch(value);
        }}
      />
      <div className="flex md:space-x-2 items-center flex-col md:flex-row md:justify-end w-full max-md:space-y-2">
        <Select
          onValueChange={(value) => {
            const queryParams = new URLSearchParams(searchParams);
            if (value) {
              queryParams.set("page_size", value);
            } else {
              queryParams.delete("page_size");
            }
            replace(`${pathName}?${queryParams.toString()}`);
          }}
          value={searchParams.get("page_size") as string | undefined}
        >
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
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? frameworks.find((framework) => framework.value === value)
                    ?.label
                : "Select framework..."}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search framework..." />
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {frameworks.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={clsx("mr-2 h-4 w-4", {
                        "opacity-100": value === framework.value,
                        "opacity-0": value !== framework.value,
                      })}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

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
