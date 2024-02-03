"use client";

import { lusitana } from "@/app/fonts";
import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { RentalListingSchema } from "@/app/lib/schema/listingsSchema";
import { Form } from "@/app/components/ui/form";
import { Button } from "@/app/components/ui/button";
import { useToast } from "@/app/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { addRentalListing } from "../../api";
import { ValidationError } from "@/app/lib/exceptions";
import {
  DetailsForm,
  FileUploadsForm,
  ListingProperties,
  RentalTermsForm,
} from "../../forms";

type RentalListingForm = z.infer<typeof RentalListingSchema>;

const RentalListingAddPage = () => {
  const form = useForm<RentalListingForm>({
    resolver: zodResolver(RentalListingSchema),
    defaultValues: {
      amenities: [],
      available: true,
      // coverImage: "",
      // depositRequired: 1,
      description: "",
      // price: 1,
      properties: [],
      published: true,
      // renewalInterval: 1,
      tags: [],
      title: "",
    },
  });
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();
  const { replace } = useRouter();
  async function onSubmit(values: RentalListingForm) {
    try {
      //   if (property) await updateProperty(property._id!, values, files);
      //   else
      await addRentalListing(values, files[0]);
      toast({
        className: "bg-green-900 dark:text-emerald-500",
        description: (
          <span className="text-xl text-teal-50">
            Property added successfully
          </span>
        ),
      });
      replace("/dashboard/properties/");
    } catch (error) {
      if (error instanceof ValidationError) {
        // Handle validation errors
        Object.entries(error.errors).forEach(([field, value]) => {
          if (field === "images") {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: value,
            });
          } else form.setError(field as any, { message: value as string });
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
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Add Rental Listings
      </h1>
      {form.formState.isSubmitting && <br />}
      {!form.formState.isSubmitting && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <DetailsForm />
            <FileUploadsForm files={files} onFilesChange={setFiles} />
            <ListingProperties />
            <RentalTermsForm />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default RentalListingAddPage;
