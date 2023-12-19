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

type Service = z.infer<typeof ServiceFormSchema>;

interface Props {
  service?: Service;
  title?: string;
  decription?: string;
  className?: string;
  children: React.ReactNode; //Trgiier
}

const ServiceForm: React.FC<Props> = ({
  service,
  children,
  title,
  decription,
  className,
}) => {
  const { toast } = useToast();
  const form = useForm<Service>({
    resolver: zodResolver(ServiceFormSchema),
    defaultValues: service ? service : { description: "", title: "" },
  });
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: Service) {
    // ✅ This will be type-safe and validated.

    try {
      setLoading(true);
      const addedService = await addService(values);
      toast({
        description: (
          <span className="text-green-900">Service added successfully</span>
        ),
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        // Handle validation errors
        console.log(error);
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
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className={className}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{decription}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
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
            {!loading && (
              <Button type="submit" disabled={loading}>
                Submit
              </Button>
            )}
            {loading && <span>Loading....</span>}
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceForm;
