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
import { addAgency } from "../api";
import { ValidationError } from "@/app/lib/exceptions";
import { DetailsForm, FileUploadsForm, SocialAccounts } from "../forms";
import { AgencySchema } from "@/app/lib/schema/agencies";

type AgencyForm = z.infer<typeof AgencySchema>;

const AgencysAddPage = () => {
  const form = useForm<AgencyForm>({
    resolver: zodResolver(AgencySchema),
    defaultValues: {
      specialties: [],
    },
  });
  const [files, setFiles] = useState<File[]>([]);
  const { toast } = useToast();
  const { replace } = useRouter();
  async function onSubmit(values: AgencyForm) {
    try {
      //   if (property) await updateProperty(property._id!, values, files);
      //   else
      await addAgency(values, files[0]);
      toast({
        className: "bg-green-900 dark:text-emerald-500",
        description: (
          <span className="text-xl text-teal-50">
            Property added successfully
          </span>
        ),
      });
      replace("/dashboard/agents/");
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
        Add Agents
      </h1>
      {form.formState.isSubmitting && <br />}
      {!form.formState.isSubmitting && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <DetailsForm />
            <FileUploadsForm files={files} onFilesChange={setFiles} />
            <SocialAccounts />
            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default AgencysAddPage;
