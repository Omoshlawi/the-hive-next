"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/app/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Input } from "@/app/components/ui/input";
import { TourScheduleSchema } from "@/app/lib/schema/listingsSchema";
import { Listing } from "@/app/lib/entities/listings";
import { Textarea } from "@/app/components/ui/textarea";
import DatePicker from "@/app/components/form/DatePicker";
import ComboBox from "@/app/components/display/ComboBox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";

interface Props {
  listing: Listing;
}

const TourScheduleForm: React.FC<Props> = ({ listing }) => {
  const form = useForm<z.infer<typeof TourScheduleSchema>>({
    resolver: zodResolver(TourScheduleSchema),
    defaultValues: {
      date: new Date(),
      notes: "",
      time: "",
    },
  });
  function onSubmit(values: z.infer<typeof TourScheduleSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Card className="my-4">
      <CardHeader>
        <CardTitle>Schedule a tour</CardTitle>
        <CardDescription>Choose most suitable day</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="date"
              render={({ field: { onChange, value } }) => (
                <FormItem>
                  <FormLabel>Date</FormLabel>
                  <br />
                  <FormControl>
                    <DatePicker date={value} onDateChange={onChange} />
                  </FormControl>
                  <FormDescription>Must be a furure date</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {listing.tourHours.map((time) => (
                        <SelectItem value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Notes</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Notes ..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Submit
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default TourScheduleForm;
