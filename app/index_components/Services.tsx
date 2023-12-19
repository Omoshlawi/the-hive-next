import prisma from "@/prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const Services = async () => {
  const services = await prisma.service.findMany();
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-5 p-5 ">
      {services.map(({ id, title, image, description }) => (
        <Card
          key={id}
          className="border-none background relative h-64 overflow-clip text-white"
        >
          <img
            src={image}
            className="w-full h-full absolute object-cover bg-blend-overlay"
          />
          <div className="w-full h-full absolute bg-black opacity-70 dark:opacity-40" />

          <div className="z-50 absolute w-full h-full">
            <CardHeader className="">
              <CardTitle className="text-center">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4">{description}</CardContent>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Services;
