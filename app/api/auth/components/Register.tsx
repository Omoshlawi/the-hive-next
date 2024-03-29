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
import { RegisterSchema } from "@/app/lib/schema";
import RegisterSkeleton from "./RegisterSkeleton";
import { useToast } from "@/app/components/ui/use-toast";
import { useSessionContext } from "@/app/context/auth/hooks";
import { ValidationError } from "@/app/lib/exceptions";
import { User } from "@/app/lib/entities/users";
import { Token } from "@/app/lib/types/base";
import { register } from "./api";
import { handleFormErrors } from "@/app/lib/utils";

const Register = () => {
  const { toast } = useToast();
  const { toggleAuth, notifyChanges } = useSessionContext();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {},
  });

  async function onSubmit(values: z.infer<typeof RegisterSchema>) {
    try {
      const { user, token }: { user: User; token: Token } = await register(
        values
      );
      toast({
        className: "bg-green-900 dark:text-emerald-500",
        description: (
          <span className="text-xl text-teal-50">Login Succeesfull</span>
        ),
      });
      toggleAuth(false);
      notifyChanges();
    } catch (error) {
      handleFormErrors(error, form);
    }
  }
  return (
    <div>
      <Form {...form}>
        {form.formState.isSubmitting && <RegisterSkeleton />}
        {!form.formState.isSubmitting && (
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g john" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g abcde@vstech.co.ke" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g 793889658" {...field} />
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="*******" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        )}
      </Form>
    </div>
  );
};

export default Register;
