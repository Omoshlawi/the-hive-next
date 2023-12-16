"use client";

import { Button } from "@/app/components/ui/button";
import { lusitana } from "@/app/fonts";
import NewProperty from "@/app/properties/new/page";
import { PlusIcon } from "lucide-react";
import React from "react";

type Props = {};

const TitleHeader = (props: Props) => {
  return (
    <p
      className={`${lusitana.className} font-bold text-2xl m-3 flex justify-between`}
    >
      Properties
      <Button>Add property</Button>
    </p>
  );
};

export default TitleHeader;
