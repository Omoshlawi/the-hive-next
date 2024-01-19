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
import { addLocation, updateLocation } from "./../api";
import { useRouter } from "next/navigation";
import { pick } from "lodash";
import { LocationSchema } from "@/app/lib/schema";
import LocatinFormSkeleton from "./../LocatinFormSkeleton";
import { Location } from "@/app/lib/entities/properties";
import LocationPicker from "./../LocationPicker";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import LocationGoogleMap from "./LocationGoogleMap";
import LocationDetail from "./LocationDetail";

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
  const { replace } = useRouter();
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
      else await addLocation(values);
      toast({
        className: "bg-green-900 dark:text-emerald-500",
        description: (
          <span className="text-xl text-teal-50">
            Service added successfully
          </span>
        ),
      });
      replace("/dashboard/properties/locations");
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
    <div className="p-2">
      <p
        className={clsx(
          "text-2xl pb-10 text-start self-start",
          lusitana.className
        )}
      >
        Create property
      </p>
      {form.formState.isSubmitting && <LocatinFormSkeleton />}
      {!form.formState.isSubmitting && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <LocationGoogleMap />
            <LocationDetail />
            <div className="flex flex-row-reverse">
              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full"
              >
                Submit
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
};

export default LocationForm;
