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
import { AgentSchema } from "@/app/lib/schema/agents";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const DetailsForm = () => {
  const form = useFormContext<z.infer<typeof AgentSchema>>();
  const specilities = [
    "Rentals",
    "Sales",
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
        <CardTitle>Agent Details</CardTitle>
        <CardDescription>Agent personal details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="e.g Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone number</FormLabel>
                <FormControl>
                  <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry="ke"
                    inputClassName="w-full"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="specialties"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specialities</FormLabel>
                <FormControl>
                  <CreatableSelect
                    isMulti
                    options={specilities.map((val) => ({
                      value: val,
                      label: val,
                    }))}
                    className="dark:text-primary-foreground"
                    // isLoading
                    isDisabled={field.disabled}
                    onBlur={field.onBlur}
                    name={field.name}
                    value={
                      field.value?.map((v: string) => ({
                        label: v,
                        value: v,
                      })) ?? []
                    }
                    onChange={(val) =>
                      field.onChange(val.map(({ value }) => value))
                    }
                    ref={field.ref}
                    isSearchable
                    placeholder="Select or create specialities..."
                    // onCreateOption={(value) =>
                    //   field.onChange([...field.value, value])
                    // }
                  />
                </FormControl>
                <FormDescription>
                  Agent specialities e.g rentals, sales
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Bio</FormLabel>
              <FormControl>
                <SimpleMDE placeholder="Bio ..." {...field} />
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
