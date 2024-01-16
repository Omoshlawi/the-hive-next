import KeyValueInput from "@/app/components/form/multivalueinput/KeyValueInput";
import MultiKeyvalueInput from "@/app/components/form/multivalueinput/MultiKeyvalueInput";
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

const AttributesForm = () => {
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
              {/* <FormLabel>Name</FormLabel> */}
              <FormControl>
                <MultiKeyvalueInput
                  value={field.value}
                  // onChange={field.onChange}
                  onChange={(val) => {
                    field.onChange(val);
                    // console.log(val);
                  }}
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

export default AttributesForm;
