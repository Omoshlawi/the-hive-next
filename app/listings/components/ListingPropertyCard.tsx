import { Badge } from "@/app/components/ui/badge";
import { BASE_URL } from "@/app/lib/constants";
import { Property } from "@/app/lib/entities/properties";
import { formartCurrency } from "@/app/lib/utils";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import React, { FC } from "react";
import { CheckCircle2 } from "lucide-react";

interface Props {
  propertyId: string;
}

const ListingPropertyCard = async ({ propertyId }: Props) => {
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

  // TODO Display Only two tags, extra atrs and thirs should be other and indicates number
  return (
    <article className="mb-4 overflow-hidden rounded-xl border shadow-md duration-500 ease-in-out hover:shadow-xl relative">
      <div className="">
        <img
          src={`/api/proxy/files/${property.images[0].path}`}
          alt={property.title}
          className="bg-indigo-800 object-cover"
        />
      </div>
      {property.attributes.length > 0 && (
        <div className="p-4">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-2 gap-2">
                  {property.attributes.map((attr, index) => (
                    <div
                      key={index}
                      className="flex space-x-3 p-2 items-center"
                    >
                      <CheckCircle2 />
                      <div className="grid grid-cols-1">
                        <span className="font-bold">{attr.value}</span>
                        <span>{attr.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
      {property.types.length > 0 && (
        <div className="box-border flex p-3 flex-wrap  items-center">
          {property.types.map((amenity, index) => (
            <Badge
              key={index}
              className="w-fit bg-accent text-accent-foreground space-x-1 space-y-1 rounded-sm mr-2 mt-2"
            >
              {amenity}
            </Badge>
          ))}
        </div>
      )}
      <div className="p-4 ">
        <div className="pb-6">
          <Link
            href={`/properties/${propertyId}`}
            className="text-lg hover:text-indigo-600 font-medium duration-500 ease-in-out"
          >
            {property.title}
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ListingPropertyCard;
