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
import { useSessionContext } from "@/app/context/auth/hooks";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const Logout: React.FC<Props> = ({ children, open, onOpenChange }) => {
  const { logout } = useSessionContext();

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirmation!</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to logout
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={logout}>Logout</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default Logout;
