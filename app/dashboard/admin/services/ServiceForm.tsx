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
import { ServiceFormSchema } from "@/app/lib/schema/pricing";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Input } from "@/app/components/ui/input";
import { Button } from "@/app/components/ui/button";
import ImageInput from "@/app/components/form/ImageInput";
import { FormFile, image } from "@/app/lib/schema/common";

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
    defaultValues: service ? service : undefined,
  });

  async function onSubmit(values: Service) {
    // ✅ This will be type-safe and validated.

    const formData = new FormData();
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        if (key === "image") {
          const fm = new FormFile(values[key]);
          const f: File = await fm.toFile();
          formData.append(key, f);
        } else {
          // Assert that key is a string and exists on values
          formData.append(key, (values as any)[key]);
        }
      }
    }
    const response = await fetch("/api/services", {
      method: "POST",
      body: formData,
      redirect: "follow",
    });

    const responseData = await response.json();

    // if (response.ok) {
    //   const _toast = toast({
    //     title: "Success!",
    //     description: (
    //       <pre className="mt-2 w-[340px] rounded-md bg-green-950 p-4">
    //         <code className="text-white">
    //           {"Services updated succesfully!"}
    //         </code>
    //       </pre>
    //     ),
    //   });
    //   setTimeout(_toast.dismiss, 3000);
    // } else {
    //   if (response.status != 400) {
    //     const _toast = toast({
    //       title: "Success!",
    //       description: (
    //         <pre className="mt-2 w-[340px] rounded-md bg-green-950 p-4">
    //           <code className="text-white">
    //             {"Services updated succesfully!"}
    //           </code>
    //         </pre>
    //       ),
    //     });
    //     setTimeout(_toast.dismiss, 3000);
    //   }
    //   const { setError } = form;
    // }

    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(responseData, null, 2)}
          </code>
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
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter title" {...field} />
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
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceForm;
