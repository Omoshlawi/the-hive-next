"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/app/components/ui/use-toast";
// import { toast } from "@/app/components/ui/use-toast";
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
import { ServiceFormSchema } from "@/app/lib/schema/pricing";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import ImageInput from "@/app/components/form/ImageInput";
import { FormFile, image } from "@/app/lib/schema/common";
import { ValidationError } from "@/app/lib/exceptions";
import { addService, updateService } from "./api";
import ServiceFormSkeleton from "./ServiceFormSkeleton";
import { useRouter } from "next/navigation";
import { pick } from "lodash";

type Service = z.infer<typeof ServiceFormSchema>;

interface Props {
  service?: Service;
  title?: string;
  decription?: string;
  className?: string;
  children: React.ReactNode;
}

const ServiceForm: React.FC<Props> = ({
  service,
  title,
  decription,
  className,
  children,
}) => {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const [showForm, setShowForm] = useState(false);
  const form = useForm<Service>({
    resolver: zodResolver(ServiceFormSchema),
    defaultValues: service
      ? pick(service, ["title", "description", "image"])
      : { description: "", title: "" },
  });

  async function onSubmit(values: Service) {
    // ✅ This will be type-safe and validated.

    try {
      if (service) await updateService(values, service.id!);
      else await await addService(values);
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
        </DialogHeader>
        <Form {...form}>
          {form.formState.isSubmitting ? (
            <ServiceFormSkeleton />
          ) : (
            <form onSubmit={form.handleSubmit(onSubmit)} className="">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Service title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter servicetitle" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <ImageInput
                        fallBack={"LO"}
                        {...{
                          ...field,
                          onChange: (files) =>
                            form.setValue(field.name, files[0]),
                          value: field.value
                            ? [
                                new FormFile({
                                  ...field.value,
                                }),
                              ]
                            : [],
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <SimpleMDE placeholder="Description ..." {...field} />
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

export default ServiceForm;
