import { lusitana } from "@/app/fonts";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RentalListingSchema } from "@/app/lib/schema/listingsSchema";
import { Form } from "@/app/components/ui/form";
import { RentalListingForm } from "./page";

export const RentalListingAddPage = () => {
  const form = useForm<RentalListingForm>({
    resolver: zodResolver(RentalListingSchema),
    defaultValues: {
      amenities: [],
      available: false,
      coverImage: "",
      depositRequired: 0,
      description: "",
      price: 0,
      properties: [],
      published: false,
      renewalInterval: 1,
      tags: [],
      title: "",
    },
  });
  const [files, setFiles] = useState<File[]>([]);
  return (
    <div>
      <h1 className={`${lusitana.className} font-bold text-2xl mb-3`}>
        Add Rental Listings
      </h1>
      {form.formState.isSubmitting && <br />}
      {!form.formState.isSubmitting && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};
