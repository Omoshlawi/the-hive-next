import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Pricing } from "../lib/entities/sass";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { BASE_URL } from "../lib/constants";

const PricingPage = async () => {
  let pricings: Pricing[] = [];
  try {
    const response = await fetch(new URL(`/api/proxy/pricing`, BASE_URL), {
      cache: "no-cache",
    });
    if (response.ok) {
      pricings = (await response.json()).results;
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="pt-16 pb-8 text-center leading-8 md:pb-16 lg:pt-32">
        <div className="mb-20 text-center">
          <div className="mb-4">
            <h2 className="text-4xl font-bold md:text-5xl md:leading-none">
              Pay As You Grow
            </h2>
          </div>
          <p className="mx-auto mb-8 max-w-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente id
            commodi ab maiores ut hic odio? Quisquam eveniet in nobis quidem
            modi odit animi provident cumque ad, sed accusamus dicta!
          </p>
          <div className="">
            <div className="mb-4 inline-block">
              <a
                href="#"
                className="relative flex cursor-pointer items-center pr-12 text-base leading-tight text-indigo-600 md:text-xl"
              >
                See All Features
                <span className="ml-8">
                  {/* hero: arrow-narrow-right */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 text-center md:grid-cols-3">
          {pricings.map((pricing) => {
            return true ? (
              <div className="relative" key={pricing.id}>
                <div className="relative mx-auto flex max-w-sm flex-col overflow-hidden rounded-md border  border-primary">
                  <div className="bg-primary py-2 text-xl text-background font-bold">
                    {pricing.name}
                  </div>
                  <div className="py-10 px-4 font-semibold">
                    <p className="  ">
                      <span className="text-base leading-tight">$</span>
                      {pricing.price} / {pricing.billingInterval}
                    </p>
                  </div>
                  <p className="mx-auto h-24 max-w-xs px-6 text-xl">
                    {pricing.description}
                  </p>
                  <ul className="mb-8 space-y-4 text-left">
                    {pricing.featurePricing.map((limit, index) => (
                      <li
                        className="flex items-center space-x-3 mx-2 rounded-md"
                        key={index}
                      >
                        {/* Icon */}
                        {limit.included ? (
                          <Check className="ml-4 h-full text-green-500 dark:text-green-400" />
                        ) : (
                          <X className="ml-4 h-full text-red-500 dark:text-red-400" />
                        )}
                        <span className="font-semibold py-2 text-xl">
                          {`${limit.limit} ${limit.feature?.name} `}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="my-10 px-2">
                    <a
                      className="block cursor-pointer rounded bg-gray-800 py-4 px-10 text-base leading-tight text-white duration-200 ease-in-out md:inline-block lg:py-4"
                      href="#"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <div className="absolute top-0 right-0 z-10 -mt-5 -mr-4 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-400 px-2 font-bold">
                  <p className="text-base leading-tight">Most Picked</p>
                </div>
                <div className="relative mx-auto flex max-w-sm flex-col overflow-hidden rounded-md border  border-primary">
                  <div className="bg-primary py-2 text-xl text-background font-bold">
                    {pricing.name}
                  </div>
                  <div className="py-10 px-4 font-semibold">
                    <p className="  ">
                      <span className="text-base leading-tight">KES</span>
                      {pricing.price} /{pricing.billingInterval}
                    </p>
                  </div>
                  <p className="mx-auto h-24 max-w-xs px-6 text-xl opacity-40">
                    {pricing.description}
                  </p>
                  <ul className="mb-8 space-y-4 text-left">
                    {pricing.featurePricing.map((limit, index) => (
                      <li
                        className="flex items-center space-x-3  mx-2 rounded-md"
                        key={index}
                      >
                        {/* Icon */}
                        {limit.included ? (
                          <Check className="ml-4 h-full text-green-500 dark:text-green-400" />
                        ) : (
                          <X className="ml-4 h-full text-red-500 dark:text-red-400" />
                        )}
                        <span className="font-semibold py-2 text-xl">
                          {`${limit.limit} ${limit.feature?.name} `}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="my-10 px-2">
                    <a
                      className="block cursor-pointer rounded bg-indigo-600 py-4 px-10 text-base leading-tight  duration-200 ease-in-out md:inline-block lg:py-4"
                      href="#"
                    >
                      Free Trial
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
