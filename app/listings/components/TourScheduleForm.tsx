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
import { TourScheduleSchema } from "@/app/lib/schema/listingsSchema";
import { Listing } from "@/app/lib/entities/listings";
import { Textarea } from "@/app/components/ui/textarea";
import DatePicker from "@/app/components/form/DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/ui/select";
import { scheduleTour } from "../api";
import { ValidationError } from "@/app/lib/exceptions";
import { usePathname, useRouter } from "next/navigation";
import { useToast } from "@/app/components/ui/use-toast";

interface Props {
  listing: Listing;
}

const TourScheduleForm: React.FC<Props> = ({ listing }) => {
  const { refresh } = useRouter();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof TourScheduleSchema>>({
    resolver: zodResolver(TourScheduleSchema),
    defaultValues: {
      date: new Date(),
      notes: "",
      time: "",
    },
  });
  async function onSubmit(values: z.infer<typeof TourScheduleSchema>) {
    try {
      //   if (property) await updateProperty(property._id!, values, files);
      //   else
      await scheduleTour(values, listing.id);
      toast({
        className: "bg-green-900 dark:text-emerald-500",
        description: (
          <span className="text-xl text-teal-50">
            Tour schedule added successfully
          </span>
        ),
      });
      refresh();
    } catch (error) {
      if (error instanceof ValidationError) {
        // Handle validation errors
        Object.entries(error.errors).forEach(([field, value]) => {
          form.setError(field as any, { message: value as string });
        });
        // console.log(JSON.stringify(error.errors));
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        // Check if 'error' is an object with a 'message' property
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Unexpected error: ${error}`,
        });
      } else {
        // Handle other cases
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Unexpected error: ${error}`,
        });
      }
    }
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
