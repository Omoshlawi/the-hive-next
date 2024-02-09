"use client";
import { cn } from "@/app/lib/utils";
import * as Slider from "@radix-ui/react-slider";
import React from "react";

const RangeSlider = React.forwardRef<
  React.ElementRef<typeof Slider.Root>,
  React.ComponentPropsWithoutRef<typeof Slider.Root>
>(({ className, ...props }, ref) => (
  <Slider.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <Slider.Track>
      <Slider.Range />
    </Slider.Track>
    <Slider.Thumb />
    <Slider.Thumb />
  </Slider.Root>
));

export default RangeSlider;
