import {
  Tooltip as SToolTip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/app/components/ui/tooltip";
import React, { PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  tipText: string;
}

const Tooltip: React.FC<Props> = ({ children, tipText }) => {
  return (
    <TooltipProvider>
      <SToolTip>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{tipText}</p>
        </TooltipContent>
      </SToolTip>
    </TooltipProvider>
  );
};

export default Tooltip;
