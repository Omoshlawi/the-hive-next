"use client";
import { useSessionContext } from "@/app/context/auth/hooks";
import React, { useEffect, useState } from "react";
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
import { useRouter } from "next/navigation";

interface Props {
  roles?: string[];
  redirectUrl: string;
  content?: React.ReactNode;
}

const RequireRole: React.FC<Props> = ({
  roles = [],
  redirectUrl,
  content: message,
}) => {
  const { session, toggleAuth } = useSessionContext();
  const { replace } = useRouter();
  useEffect(() => {
    if (session) {
      const isEligible = roles.every((r) => session.roles?.includes(r));
      setOpen(!isEligible);
      //   if (!isEligible) {
      //     setOpen()
      //   }
    }
  }, [session]);
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Permision Denied?</AlertDialogTitle>
          <AlertDialogDescription>
            {message ??
              "You dont have enough permision to access resource.You will be redirected to main dashboard"}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            onClick={() => {
              setOpen(false);
              replace(redirectUrl);
            }}
          >
            Ok
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default RequireRole;
