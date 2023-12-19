import { lusitana } from "@/app/fonts";
import clsx from "clsx";
import React from "react";
import ServiceForm from "./ServiceForm";
import { Button } from "@/app/components/ui/button";
import prisma from "@/prisma/client";

import ServiceCard from "./ServiceCard";

const ServicesPage = async () => {
  const services = await prisma.service.findMany();
  return (
    <div className="p-2">
      <div
        className={clsx(
          "text-2xl pb-10 text-start self-start flex justify-between",
          lusitana.className
        )}
      >
        Services
        <div className="flex flex-row-reverse p-3">
          <ServiceForm
            title="Service"
            decription="Create a new service by filling bellow for"
            className="max-h-[80vh] overflow-y-auto"
          >
            Add service
          </ServiceForm>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
