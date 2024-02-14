import { BASE_URL } from "@/app/lib/constants";
import { Property } from "@/app/lib/entities/properties";
import { PropsWithPathParams } from "@/app/lib/types/base";
import React, { FC } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import ImageDisplay from "./ImageDisplay";
import { ListLayoutWithSideBar } from "@/app/components/layouts";
import { FilterForm } from "@/app/listings/components";
import {
  BookmarkPlus,
  Check,
  CheckCircle,
  CheckCircle2,
  Heart,
} from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";

const PropertyDetail: FC<PropsWithPathParams> = async ({
  params: { id: propertyId },
}) => {
  let property: Property;
  try {
    property = await (
      await fetch(new URL(`/api/proxy/properties/${propertyId}`, BASE_URL), {
        cache: "no-cache",
      })
    ).json();
  } catch (error: any) {
    return <div>404 not found</div>;
  }
  return (
    <div className="flex flex-col items-center">
      <section className="w-full m-2 lg:m-4 h-[70vh]">
        <ImageDisplay images={property.images} />
      </section>
      <ListLayoutWithSideBar sideBar={<FilterForm />} reverse>
        <div className="w-full px-5 flex flex-col space-y-4">
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              {/* Badges */}
              {property.types.length > 0 && (
                <div className="flex space-x-2">
                  {property.types.map((type, index) => (
                    <Badge
                      key={index}
                      className="rounded-sm bg-indigo-800 dark:bg-indigo-500 overflow-x-auto"
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              )}
              <div className="flex flex-col lg:flex-row lg:justify-between ">
                <div>
                  <CardTitle>{property.title}</CardTitle>
                  <span className="opacity-80">{`${property.location.address} ${property.location.city} ${property.location.state} ${property.location.country} ${property.location.zipCode}`}</span>
                </div>
                <div className="flex space-x-2 mt-2">
                  <Button className="w-fit">
                    <BookmarkPlus />
                  </Button>
                  <Button className="w-fit">
                    <Heart />
                  </Button>
                </div>
              </div>
            </CardHeader>
          </Card>
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>About Property</CardTitle>
            </CardHeader>
            <CardContent>{property.description}</CardContent>
          </Card>
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>Amenities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {property.amenities.map((amenity, index) => (
                  <div key={index} className="flex space-x-3 p-2">
                    <CheckCircle />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-md shadow-indigo-400">
            <CardHeader>
              <CardTitle>Advance Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {property.attributes.map((attr, index) => (
                  <div key={index} className="flex space-x-3 p-2 items-center">
                    <CheckCircle2 />
                    <div className="grid grid-cols-1">
                      <span className="font-bold">{attr.value}</span>
                      <span>{attr.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </ListLayoutWithSideBar>
    </div>
  );
};

export default PropertyDetail;
