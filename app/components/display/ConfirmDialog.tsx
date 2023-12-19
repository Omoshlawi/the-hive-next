"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";
import { Button } from "@/app/components/ui/button";
import React, { useState } from "react";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
  href: string;
}

const ConfirmDialog: React.FC<Props> = ({
  children,
  description,
  title,
  href,
}) => {
  const { toast } = useToast();
  const { refresh } = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    toast({
      hidden: loading,
      description: "Deleting ....",
    });

    try {
      setLoading(true);
      const response = await fetch(href, {
        method: "DELETE",
        redirect: "follow",
      });
      const responseData = await response.json();
      if (response.status === 200) {
        toast({
          className: "bg-green-900 dark:text-emerald-500",
          description: (
            <span className="text-xl text-teal-50">{responseData.detail}</span>
          ),
        });
        refresh();
      } else {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: `Unexpected error adding service: ${responseData.detail}`,
        });
      }
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `Unexpected error adding service: ${error.message}`,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="ghost">{children}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmDialog;
