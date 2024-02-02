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
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { PropertySchema } from "@/app/lib/schema";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
type PropertyForm = z.infer<typeof PropertySchema>;

const SaleTermsForm = () => {
  const form = useFormContext<PropertyForm>();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Extra Attributes</CardTitle>
        <CardDescription>Property Extra attribute</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="attributes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name/Value attribbutes</FormLabel>
              <FormControl>
                <MultiKeyvalueInput
                  keyplaceholder="e.g Bedrooms"
                  valueplaceholder="e.g 5"
                  value={field.value}
                  onChange={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default SaleTermsForm;
