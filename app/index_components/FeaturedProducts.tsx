import React from "react";
import { Property } from "../lib/entities/properties";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

const FeaturedProducts = async () => {
  const { results: properties }: { results: Property[] } = await (
    await fetch(`/api/proxy/properties/`, {
      cache: "no-cache",
    })
  ).json();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-2 md:p-5">
      {properties.map(({ title, images }, index) => (
        <Card key={index}>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                {/* {images.map(({ path }, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">{index + 1}</div>
                  </CarouselItem>
                ))} */}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FeaturedProducts;
