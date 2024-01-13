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
import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type PropertyForm = z.infer<typeof PropertySchema>;

const FileUploadsForm = () => {
  const form = useFormContext<PropertyForm>();
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload photos</CardTitle>
        <CardDescription>Propety photos</CardDescription>
      </CardHeader>
      <CardContent>
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                
                {/* <ImageInput
                  multiple
                  fallBack={"LO"}
                    {...{
                      ...field,
                      onChange: (files) =>
                        form.setValue(
                          field.name,
                          files.map((f) => f.name)
                        ),
                      value: field.value ?? [],
                    }}
                /> */}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  );
};

export default FileUploadsForm;
