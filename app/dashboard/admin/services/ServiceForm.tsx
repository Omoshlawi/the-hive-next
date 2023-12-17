"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useToast } from "@/app/components/ui/use-toast";
// import { toast } from "@/app/components/ui/use-toast";
import React from "react";
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
import { ServiceSchema } from "@/app/lib/schema/pricing";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import ImageInput from "@/app/components/form/ImageInput";
import { FormFile } from "@/app/lib/schema/common";

type Service = z.infer<typeof ServiceSchema>;

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
    resolver: zodResolver(ServiceSchema),
    defaultValues: service ? service : undefined,
  });

  async function onSubmit(values: Service) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log("Formstate: ", values);

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter name" {...field} />
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
                      multiple
                      fallBack={"LO"}
                      {...{
                        ...field,
                        onChange: (files) => form.setValue(field.name, files),
                        value: field.value
                          ? field.value.map((f) => new FormFile({ ...f }))
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceForm;
