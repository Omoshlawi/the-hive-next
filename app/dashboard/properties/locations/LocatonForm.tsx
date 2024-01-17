"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/app/components/ui/use-toast";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/components/ui/dialog";
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
import { Button } from "@/app/components/ui/button";
import { ValidationError } from "@/app/lib/exceptions";
import { addLocation, updateLocation } from "./api";
import { useRouter } from "next/navigation";
import { pick } from "lodash";
import { LocationSchema } from "@/app/lib/schema";
import LocatinFormSkeleton from "./LocatinFormSkeleton";
import { Location } from "@/app/lib/entities/properties";
import LocationPicker from "./LocationPicker";

type LocationFormType = z.infer<typeof LocationSchema>;

interface Props {
  location?: Location;
  title?: string;
  decription?: string;
  className?: string;
  children: React.ReactNode;
}

const LocationForm: React.FC<Props> = ({
  location,
  title,
  decription,
  className,
  children,
}) => {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const [showForm, setShowForm] = useState(false);
  const form = useForm<LocationFormType>({
    resolver: zodResolver(LocationSchema),
    defaultValues: location
      ? pick(location, [
          "address",
          "city",
          "state",
          "country",
          "zipCode",
          "longitude",
          "latitude",
        ])
      : {
          address: "",
          city: "",
          state: "",
          country: "",
          zipCode: "",
          longitude: 0,
          latitude: 0,
        },
  });

  async function onSubmit(values: LocationFormType) {
    // ✅ This will be type-safe and validated.

    try {
      if (location) await updateLocation(location._id!, values);
      else await await addLocation(values);
      setShowForm(false);
      refresh();
      toast({
        className: "bg-green-900 dark:text-emerald-500",
        description: (
          <span className="text-xl text-teal-50">
            Service added successfully
          </span>
        ),
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        // Handle validation errors
        console.log(JSON.stringify(error.errors));
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        // Check if 'error' is an object with a 'message' property
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Unexpected error adding service: ${error}`,
        });
      } else {
        // Handle other cases
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Unexpected error adding service: ${error}`,
        });
      }
    }
  }

  return (
    <Dialog open={showForm} onOpenChange={(opem) => setShowForm(opem)}>
      <DialogTrigger asChild>
        <Button onClick={() => setShowForm(true)}>{children}</Button>
      </DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{decription}</DialogDescription>
          <div className="w-[100%] h-[200px] my-4">
            <LocationPicker />
          </div>
        </DialogHeader>
        <Form {...form}>
          {form.formState.isSubmitting ? (
            <LocatinFormSkeleton />
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g 40400 Gatundu road" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g Nairobi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="country"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Country</FormLabel>
                    <FormControl>
                      <Input placeholder="Kenya" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g Enugu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Zip code</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g 1234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="latitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g 13.234665" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="longitude"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Longitude</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g -37.4345" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex flex-row-reverse">
                <Button type="submit" disabled={form.formState.isSubmitting}>
                  Submit
                </Button>
              </div>
            </form>
          )}
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default LocationForm;
