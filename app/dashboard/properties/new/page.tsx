"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PropertySchema } from "@/app/lib/schema";

import clsx from "clsx";
import { lusitana } from "@/app/fonts";
import { Form } from "@/app/components/ui/form";
import { AttributesForm, DetailsForm, FileUploadsForm } from "./forms";
import LocationForm from "./forms/LocationForm";
import { Button } from "@/app/components/ui/button";
import { useState } from "react";
import { addProperty, updateProperty } from "./api";
import { useToast } from "@/app/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Property } from "@/app/lib/entities/properties";
import { ValidationError } from "@/app/lib/exceptions";
import PropertyFormSkeleton from "./forms/FormSkeleton";

type PropertyForm = z.infer<typeof PropertySchema>;
interface Props {
  property?: Property;
}
const NewProperty: React.FC<Props> = ({ property }) => {
  const form = useForm<PropertyForm>({
    resolver: zodResolver(PropertySchema),
    defaultValues: property
      ? {
          amenities: property.amenities,
          attributes: property.attributes,
          date_build: property.date_build,
          description: property.description,
          location: property.location._id as string | undefined,
          published: property.published,
          sqftSize: property.sqftSize,
          title: property.title,
          types: property.types,
          // images: property.images,
        }
      : {
          amenities: [],
          attributes: [],
          date_build: undefined,
          description: undefined,
          location: undefined,
          published: false,
          sqftSize: undefined,
          title: undefined,
          types: [],
          // images: [],
        },
  });
  const { toast } = useToast();
  const { replace } = useRouter();

  const [files, setFiles] = useState<File[]>([]);
  async function onSubmit(values: PropertyForm) {
    try {
      if (property) await updateProperty(property._id!, values, files);
      else await addProperty(values, files);
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
    <div className="p-2">
      <p
        className={clsx(
          "text-2xl pb-10 text-start self-start",
          lusitana.className
        )}
      >
        Create property
      </p>
      {form.formState.isSubmitting && <PropertyFormSkeleton />}
      {!form.formState.isSubmitting && (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <DetailsForm />
            <LocationForm />
            <FileUploadsForm files={files} onFilesChange={setFiles} />
            <AttributesForm />

            <Button className="w-full" type="submit">
              Submit
            </Button>
          </form>
        </Form>
      )}
    </div>
  );
};

export default NewProperty;
