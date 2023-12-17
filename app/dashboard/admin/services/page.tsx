import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import React from "react";
import ServiceForm from "./ServiceForm";
import { Button } from "@/app/components/ui/button";

const ServicesPage = () => {
  return (
    <div className="p-2">
      <p
        className={clsx(
          "text-2xl pb-10 text-start self-start",
          lusitana.className
        )}
      >
        Services
      </p>
      <div className="flex flex-row-reverse">
        <ServiceForm
          title="Service"
          decription="Create a new service by filling bellow for"
          className="max-h-[80vh] overflow-y-auto"
        >
          <Button>Add service</Button>
        </ServiceForm>
      </div>
    </div>
  );
};

export default ServicesPage;
