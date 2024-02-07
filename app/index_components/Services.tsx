"use server";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";
import {
  Briefcase,
  HeartHandshakeIcon,
  MapPinned,
  SearchCheck,
  Users,
} from "lucide-react";

type Service = {
  title: string;
  icon: any;
  description: string;
};

const Services = async () => {
  const services: Service[] = [
    {
      title: "Property search",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!`,
      icon: <SearchCheck width={96} height={96} />,
    },
    {
      title: "Land search",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!`,
      icon: <MapPinned width={96} height={96} />,
    },
    {
      title: "Roomie search",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!`,
      icon: <Users width={96} height={96} />,
    },
    {
      title: "Job search",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!`,
      icon: <Briefcase width={96} height={96} />,
    },
    {
      title: "Investment search",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit enim totam possimus rem. Totam, quis!`,
      icon: <HeartHandshakeIcon width={96} height={96} />,
    },
  ];
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Designed for business teams like yours
        </h2>
        <p className="mb-2 font-light text-gray-500 sm:text-xl dark:text-gray-400">
          Here at The hive we focus on markets where technology, innovation, and
          capital can unlock long-term value and drive economic growth.
        </p>
      </div>
      <Carousel className="w-10/12 " opts={{ loop: true }}>
        <CarouselContent className="m-4">
          {services.map(({ title, description, icon }, index) => (
            <CarouselItem
              key={index}
              className={`pl-1 md:basis-1/2 lg:basis-1/4`}
            >
              <div
                className="relative flex flex-col items-center justify-around p-4 mr-4 w-80 h-80 rounded-2xl "
                style={{ transform: "translate(0px, 0px)", opacity: 1 }}
              >
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-cyan-300 rounded-xl -rotate-2 "
                  style={{ zIndex: -1 }}
                />
                <div
                  className="absolute z-0 w-full h-full text-white transform scale-x-105 scale-y-95 bg-cyan-400 rounded-xl rotate-2 "
                  style={{ zIndex: -1 }}
                />
                <div
                  className="absolute z-0 w-full h-full transform scale-x-105 scale-y-95 bg-white dark:bg-gray-900 rounded-xl "
                  style={{ zIndex: -1 }}
                />
                <h3 className="z-10 p-2 text-2xl font-semibold text-cyan-900">
                  {title}
                </h3>
                <div className="z-10 p-2 text-cyan-900">{icon}</div>
                <div className="z-10 p-2 text-sm text-center text-gray-500 ">
                  {description}
                </div>
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
