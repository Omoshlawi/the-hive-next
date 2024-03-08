"use client";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Pricing, UserSubscription } from "@/app/lib/entities/sass";
import { formartCurrency } from "@/app/lib/utils";
import { Badge, BadgeCheck } from "lucide-react";
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
import { Label } from "@/app/components/ui/label";

interface Props {
  pricings?: Pricing[];
  subscription?: UserSubscription[];
}

const ChooseSubscriptions: React.FC<Props> = ({
  pricings = [],
  subscription = [],
}) => {
  const [currPricing, setCurrPricing] = useState<string>();
  const [openDialog, setDialogOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const pricing = pricings.find((pricing) => pricing.id === currPricing);
  return (
    <>
      <table className="mb-10 w-full">
        <thead className="">
          <tr className="">
            <th className="pb-4 pl-2 text-left font-semibold md:pl-4">
              Choose subscription
            </th>
          </tr>
        </thead>
        <tbody className="bg-slate-50 dark:bg-slate-900 rounded-lg text-xs uppercase">
          <tr className="">
            <td className="py-5 pl-2 sm:pl-10">Subscribe</td>
            {pricings.map((pricing, index) => (
              <td className="w-1/12 py-5 text-center" key={index}>
                <Button
                  variant={"ghost"}
                  onClick={() => setCurrPricing(pricing.id)}
                >
                  {currPricing === pricing.id ? <BadgeCheck /> : <Badge />}
                </Button>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
      <table className="mb-10 w-full">
        <thead className="">
          <tr className="">
            <th className="pb-4 pl-2 text-left font-semibold md:pl-4">Cost</th>
          </tr>
        </thead>
        <tbody className="bg-slate-50 dark:bg-slate-900 rounded-lg text-xs uppercase">
          <tr className="w-full items-center">
            <td className="pt-8 pb-2 sm:pl-10">Billing Interval</td>
            <td className="w-1/2 sm:w-1/3 md:w-2/12">
              {pricing ? pricing.billingInterval : "monthy/yearly"}
            </td>
          </tr>
          <tr className="w-full items-center">
            <td className="py-5 pl-2 sm:pl-10">Ammount</td>
            <td className="w-1/3 md:w-1/4 lg:w-2/12">
              {pricing ? formartCurrency(Number(pricing.price)) : "KES 0.00"}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-16 text-center text-xl">
        <Dialog open={openDialog} onOpenChange={(open) => setDialogOpen(open)}>
          <DialogTrigger asChild>
            <Button className="text-xl w-full" disabled={!currPricing}>
              Upgrade now
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Mpesa payment</DialogTitle>
              <DialogDescription>
                Please provide mpesa number where you will receive propmt
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-1 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Phone Number
                </Label>
                <Input
                  placeholder="e.g 712345678"
                  value={phoneNumber}
                  onChange={({ target: { value } }) => setPhoneNumber(value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                type="submit"
                onClick={() => {
                  if (phoneNumber?.length === 9) setDialogOpen(false);
                }}
              >
                Initiate payment
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default ChooseSubscriptions;
