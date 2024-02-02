"use client";
import { MultiKeyvalueInput } from "@/app/components/form/multivalueinput";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { RentalListingSchema } from "@/app/lib/schema/listingsSchema";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const RentalTermsForm = () => {
  const form = useFormContext<z.infer<typeof RentalListingSchema>>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rental Terms</CardTitle>
        <CardDescription>Property Extra attribute</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="depositRequired"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Deposit</FormLabel>
              <FormControl>
                <Input placeholder="e.g 10000" {...field} />
              </FormControl>
              <FormDescription>
                Deposit required for the rental apartment
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="renewalInterval"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Renewal Interval</FormLabel>
              <FormControl>
                <Input placeholder="e.g 1" {...field} />
              </FormControl>
              <FormDescription>Interval in months</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default RentalTermsForm;
