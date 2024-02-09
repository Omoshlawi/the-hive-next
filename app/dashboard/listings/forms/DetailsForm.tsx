"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import CreatableSelect from "react-select/creatable";
import dynamic from "next/dynamic";
const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false, // Prevent SSR
});
import "easymde/dist/easymde.min.css";
import { Checkbox } from "@/app/components/ui/checkbox";
import { ListingSchema } from "@/app/lib/schema/listingsSchema";

const DetailsForm = () => {
  const form = useFormContext<z.infer<typeof ListingSchema>>();
  const amenities = [
    "Free wifi",
    "Secirity Camera",
    "24 Hour Security",
    "Swimming Pool",
    "Conference Room",
    "Tennis Court",
    "Boa Hole",
  ];
  const tags = [
    "Apartment",
    "Mainsonet",
    "Vila",
    "Bungalow",
    "Mansion",
    "BedSitter",
    "Single",
    "One Bedroom",
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Listing Details</CardTitle>
        <CardDescription>Listing details</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g Vstech" {...field} />
              </FormControl>
              <FormDescription>listing user friendly identity</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input type="number" placeholder="e.g 100000" {...field} />
              </FormControl>
              <FormDescription>listing listing price</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type tags</FormLabel>
                <FormControl>
                  <CreatableSelect
                    isMulti
                    options={tags.map((val) => ({
                      value: val,
                      label: val,
                    }))}
                    className="dark:text-primary-foreground"
                    // isLoading
                    isDisabled={field.disabled}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value.map((v: string) => ({
                      label: v,
                      value: v,
                    }))}
                    onChange={(val) =>
                      field.onChange(val.map(({ value }) => value))
                    }
                    ref={field.ref}
                    isSearchable
                    placeholder="Select or create type tags..."
                    onCreateOption={(value) =>
                      field.onChange([...field.value, value])
                    }
                  />
                </FormControl>
                <FormDescription>Listing tags since</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="amenities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Amenities</FormLabel>
                <FormControl>
                  <CreatableSelect
                    isMulti
                    ref={field.ref}
                    options={amenities.map((val) => ({
                      value: val,
                      label: val,
                    }))}
                    className="dark:text-primary-foreground"
                    // isLoading
                    isDisabled={field.disabled}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value.map((v: any) => ({
                      label: v,
                      value: v,
                    }))}
                    onChange={(val) =>
                      field.onChange(val.map(({ value }) => value))
                    }
                    isSearchable
                    placeholder="Select or create type amenities..."
                    onCreateOption={(value) =>
                      field.onChange([...field.value, value])
                    }
                  />
                </FormControl>
                <FormDescription>Listing shared amenities</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
          <FormField
            control={form.control}
            name="published"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 my-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Publish Listing</FormLabel>
                  <FormDescription>
                    Mark as publish to make listing visible by every one
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="available"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4 my-2">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Listing available</FormLabel>
                  <FormDescription>
                    Mark as available to make listing open for inquiry
                  </FormDescription>
                </div>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <SimpleMDE placeholder="Description ..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default DetailsForm;
