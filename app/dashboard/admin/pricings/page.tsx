import { Button } from "@/app/components/ui/button";
import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import { Metadata } from "next";
import React from "react";
import PricingForm from "./PricingForm";

export const metadata: Metadata = {
  title: "Pricings | The hive admin",
  description: "Admin Pricings",
};

const PicingsPage = () => {
  return (
    <div className="p-2">
      <p
        className={clsx(
          "text-2xl pb-10 text-start self-start",
          lusitana.className
        )}
      >
        Pricings
      </p>
      <div className="flex flex-row-reverse">
        <PricingForm
          title="Pricing"
          decription="Create a new pricing by filling bellow for"
        >
          <Button>Add Pricing</Button>
        </PricingForm>
      </div>
    </div>
  );
};

export default PicingsPage;
