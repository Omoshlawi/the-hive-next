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

const PricingPage = async () => {
  let pricings: Pricing[] = [];
  try {
    const response = await fetch(`/api/proxy/pricing`, { cache: "no-cache" });
    if (response.ok) {
      pricings = (await response.json()).results;
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Designed for business teams like yours
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Here at The hive we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            {pricings.map((pricings) => (
              <div
                key={pricings.id}
                className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white"
              >
                <h3 className="mb-4 text-2xl font-semibold">{pricings.name}</h3>
                <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  {pricings.description}
                </p>
                <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">
                    Ksh.{pricings.price / 1000} K
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    /{pricings.billingInterval}
                  </span>
                </div>
                {/* List */}
                <ul role="list" className="mb-8 space-y-4 text-left">
                  {pricings.featurePricing.map((limit) => (
                    <li className="flex items-center space-x-3">
                      {/* Icon */}
                      {limit.included ? (
                        <Check className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" />
                      ) : (
                        <X className="flex-shrink-0 w-5 h-5 text-red-500 dark:text-red-400" />
                      )}
                      <span>
                        {limit.feature?.name}:{" "}
                        <span className="font-semibold">{limit.limit}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="#"
                  className="font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  <Button className="w-full">Get started</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
