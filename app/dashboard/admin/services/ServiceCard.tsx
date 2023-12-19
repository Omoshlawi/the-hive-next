import { ServiceFormSchema, ServiceSchema } from "@/app/lib/schema/pricing";
import { markdownToHtml } from "@/app/lib/utils";
import React from "react";
import { z } from "zod";
import moment from "moment/moment";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";
import { Button } from "@/app/components/ui/button";
import { PenSquare } from "lucide-react";
import ServiceForm from "./ServiceForm";

type Service = z.infer<typeof ServiceSchema>;
type ServiceFormType = z.infer<typeof ServiceFormSchema>;

const ServiceCard = async ({ service }: { service: Service }) => {
  const { description, image, title, createdAt, slug } = service;
  const htmlContent = await markdownToHtml(description);
  return (
    <Card className="overflow-clip">
      <CardHeader className="p-0 m-0">
        <img
          src={`${image}`}
          width={60}
          height={60}
          alt={title}
          className="object-cover w-full h-32 md:h-36 lg:h-40"
        />
      </CardHeader>
      <CardContent>
        <CardTitle className="p-5 text-start overflow-x-clip max-md:text-sm max-lg:text-lg">
          {title}
        </CardTitle>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex-wrap text-clip">
              <span>{"Read more"}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter className="flex justify-between">
        <span>{moment(createdAt).format("Do MMM yyyy")}</span>
        <ServiceForm
          title="Edit Service"
          className="h-[80vh] overflow-y-auto"
          service={{
            ...service,
            image: {
              origin: "remote",
              src: image,
              type: `image/${image.split(".").pop()}`,
            },
          }}
        >
          <PenSquare />
        </ServiceForm>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
