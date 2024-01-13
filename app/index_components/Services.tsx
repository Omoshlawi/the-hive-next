"use server";
import prisma from "@/prisma/client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

const Services = async () => {
  const services = await prisma.service.findMany();
  return (
    <div className="p-5 flex justify-center">
      <Carousel className="w-10/12 " opts={{ loop: true }}>
        <CarouselContent className="m-4">
          {services.map(({ id, title, image, description }, index) => (
            <CarouselItem
              key={index}
              className={`pl-1 md:basis-1/2 lg:basis-1/4`}
            >
              <div className="p-1">
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
                    {/* <CardContent className="p-4">{description}</CardContent> */}
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Services;
