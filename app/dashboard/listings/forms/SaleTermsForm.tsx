"use client";
import DatePicker from "@/app/components/form/DatePicker";
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
import { SaleListingSchema } from "@/app/lib/schema/listingsSchema";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

const RentalTermsForm = () => {
  const form = useFormContext<z.infer<typeof SaleListingSchema>>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rental Terms</CardTitle>
        <CardDescription>Property Extra attribute</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="downPaymentRequired"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Down payment</FormLabel>
              <FormControl>
                <Input placeholder="e.g 10000" {...field} />
              </FormControl>
              <FormDescription>
                percentage of the property's total purchase price and
                demonstrates the buyer's commitment to the " "purchase and
                serves as an initial contribution toward the property
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="closingDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Renewal Interval</FormLabel>
              <FormControl>
                <DatePicker date={field.value} onDateChange={field.onChange} />
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
