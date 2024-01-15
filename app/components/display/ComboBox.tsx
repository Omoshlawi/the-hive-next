"use client";
import React from "react";
import { Button } from "@/app/components/ui/button";
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
import { Check, ChevronsUpDown } from "lucide-react";
import clsx from "clsx";

interface Props<T = any> {
  data: T[];
  labelExtractor: (item: T) => string;
  valuextractor: (item: T) => number | string;
  placeholder?: string;
  label?: string;
  value?: number | string;
  onValueChange?: (item: T) => void;
  className?: string;
  onBlur?: (...args: any[]) => any;
  name?: string;
}
const ComboBox: React.FC<Props> = ({
  data,
  labelExtractor,
  valuextractor,
  placeholder,
  label,
  value,
  onValueChange,
  className,
  onBlur,
  name,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={clsx("justify-between", className ?? "")}
        >
          {value
            ? labelExtractor(data.find((item) => valuextractor(item) === value))
            : label ?? "Select ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={clsx("p-0 w-full", className ?? "")}>
        <Command>
          <CommandInput placeholder={placeholder} onBlur={onBlur} name={name} />
          <CommandEmpty>No match found.</CommandEmpty>
          <CommandGroup>
            {data.map((item, index) => (
              <CommandItem
                key={index}
                value={item._id?.toString()}
                onSelect={(currentValue) => {
                  onValueChange?.(
                    currentValue === value ? undefined : currentValue
                  );
                  setOpen(false);
                }}
              >
                <Check
                  className={clsx("mr-2 h-4 w-4", {
                    "opacity-100": value === item._id,
                    "opacity-0": value !== item._id,
                  })}
                />
                {labelExtractor(item)}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default ComboBox;
