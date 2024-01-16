"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { PropertySchema } from "@/app/lib/schema";
import React, { Suspense, useRef } from "react";
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
type PropertyForm = z.infer<typeof PropertySchema>;

const DetailsForm = () => {
  const form = useFormContext<PropertyForm>();
  const amenities = [
    "Free wifi",
    "Secirity Camera",
    "24 Hour Security",
    "Swimming Pool",
    "Conference Room",
    "Tennis Court",
    "Boa Hole",
  ];
  const types = [
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
        <CardTitle>Property Details</CardTitle>
        <CardDescription>Property details</CardDescription>
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
              <FormDescription>Property user friendly identity</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
          <FormField
            control={form.control}
            name="types"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type tags</FormLabel>
                <FormControl>
                  <CreatableSelect
                    isMulti
                    options={types.map((val) => ({
                      value: val,
                      label: val,
                    }))}
                    className="dark:text-primary-foreground"
                    // isLoading
                    isDisabled={field.disabled}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={field.value.map((v) => ({ label: v, value: v }))}
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
                <FormDescription>
                  Property type tags since property can fall into multiple
                  category
                </FormDescription>
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
                    value={field.value.map((v) => ({ label: v, value: v }))}
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
                <FormDescription>
                  Property type tags since property can fall into multiple
                  category
                </FormDescription>
                <FormMessage />
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
