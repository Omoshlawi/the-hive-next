"use client";


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
import { PropertySchema } from "@/app/lib/schema";
import React from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type PropertyForm = z.infer<typeof PropertySchema>;

const FileUploadsForm = () => {
  const form = useFormContext<PropertyForm>();
  console.log();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload photos</CardTitle>
        <CardDescription>Propety photos</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="e.g Vstech" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default FileUploadsForm;
