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
  ];
  return (
    <div className="p-5 flex flex-col justify-center items-center">
      <section>
        <section className="mx-auto flex max-w-lg flex-col px-4 py-10 lg:max-w-screen-xl lg:flex-row">
          <div className="max-w-md pr-20 lg:pt-28">
            <img
              src="https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/601074ed0f05cd25097215a4_6002086f72b7277e1f01d682_ryan-morrison-illustration-1.png"
              alt=""
            />
          </div>
          <div className="">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                />
              </svg>
            </div>
            <h2 className="mb-10 max-w-lg text-4xl font-bold leading-snug lg:text-5xl lg:leading-snug">
              A <span className="text-indigo-600">revolutionary</span> way to
              manage you properties
            </h2>
            <div className="grid gap-y-12 gap-x-8 lg:grid-cols-2">
              {services.map(({ description, title }, index) => (
                <div key={index}>
                  <p className="mb-6 border-l-4 border-indigo-600 pl-4 text-2xl leading-10">
                    {title}
                  </p>
                  <p className="text-lg text-gray-800">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Services;
