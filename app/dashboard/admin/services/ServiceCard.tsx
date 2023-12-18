import { ServiceSchema } from "@/app/lib/schema/pricing";
import { markdownToHtml } from "@/app/lib/utils";
import React from "react";
import { z } from "zod";
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

const ServiceCard = async ({
  description,
  image,
  title,
  createdAt,
  slug,
}: {
  description: string;
  image: string;
  title: string;
  slug: string;
  createdAt: Date;
}) => {
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
              <Button variant={"ghost"}>{"Read more"}</Button>
            </AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>{createdAt.toLocaleDateString()}</CardFooter>
    </Card>
  );
};

export default ServiceCard;
