"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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
import { PricingSchema } from "@/app/lib/schema/pricing";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";

type Pricing = z.infer<typeof PricingSchema>;

interface Props {
  pricing?: Pricing;
  title?: string;
  decription?: string;
  className?: string;
  children: React.ReactNode; //Trgiier
}

const PricingForm: React.FC<Props> = ({
  pricing,
  children,
  title,
  decription,
  className,
}) => {
  const form = useForm<Pricing>({
    resolver: zodResolver(PricingSchema),
    defaultValues: pricing
      ? pricing
      : {
          name: "",
          description: "",
          image: "",
        },
  });

  function onSubmit(values: Pricing) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
    alert(JSON.stringify(values));
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

            {/* <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <input type="image" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            /> */}
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

export default PricingForm;
