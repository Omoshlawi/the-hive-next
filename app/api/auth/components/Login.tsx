"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/app/components/ui/button";
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
import { LoginSchema } from "@/app/lib/schema";
import { useToast } from "@/app/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ValidationError } from "@/app/lib/exceptions";
import { login } from "./api";

const Login = () => {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    try {
      await login(values);
      toast({
        className: "bg-green-900 dark:text-emerald-500",
        description: (
          <span className="text-xl text-teal-50">Login Succeesfull</span>
        ),
      });
    } catch (error) {
      if (error instanceof ValidationError) {
        Object.entries(error.errors).forEach(([field, value]) => {
          form.setError(field as any, { message: value as string });
        });
      } else if (
        typeof error === "object" &&
        error !== null &&
        "message" in error
      ) {
        // Check if 'error' is an object with a 'message' property
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Unexpected error logging in: ${error}`,
        });
      } else {
        // Handle other cases
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Unexpected error logging in: ${error}`,
        });
      }
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="identifier"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username/Email/Phone number</FormLabel>
                <FormControl>
                  <Input placeholder="e.g john" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="********" {...field} />
                </FormControl>
                <FormDescription>Strong passord</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Login;
