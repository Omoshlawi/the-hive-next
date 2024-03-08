import { BASE_URL } from "@/app/lib/constants";
import { Feature, Pricing } from "@/app/lib/entities/sass";
import React from "react";
import ChooseSubscriptions from "./ChooseSubscriptions";

const SubscriptionsPage = async () => {
  let pricings: Pricing[] = [];
  let features: Feature[] = [];
  try {
    const response = await fetch(new URL(`/api/proxy/pricing`, BASE_URL), {
      cache: "no-cache",
    });
    const response_ = await fetch(
      new URL(`/api/proxy/pricing/features`, BASE_URL),
      {
        cache: "no-cache",
      }
    );
    if (response.ok) {
      pricings = (await response.json()).results;
    }
    if (response.ok) {
      features = (await response_.json()).results;
    }
  } catch (error) {
    console.log(error);
  }
  return (
    <div className="w-full">
      <div className=" mx-auto w-full rounded-2xl px-2 py-16 duration-150 ease-in-out sm:p-20 sm:pb-16 md:max-w-screen-xl">
        <h2 className="mb-12 w-full text-center text-4xl font-bold md:text-5xl">
          Manage subscriptions
        </h2>
        <table className="mb-10 w-full">
          <thead className="">
            <tr className="">
              <th className="pb-4 pl-2 text-left font-semibold md:pl-4">
                Feature
              </th>
              {pricings.map((pricing, index) => (
                <th className="px-1 pb-4 text-center font-semibold" key={index}>
                  {pricing.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-slate-50 dark:bg-slate-900 rounded-lg text-xs uppercase">
            {features.map((feature, index) => {
              return (
                <tr className="" key={index}>
                  <td className="pt-5 pb-2 pl-2 sm:pl-10">{feature.name}</td>
                  {feature.featurePricing.map((pricing, index) => (
                    <td className="w-1/12 pt-5 pb-2 text-center" key={index}>
                      {pricing.limit ?? " -"}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <ChooseSubscriptions pricings={pricings} />
      </div>
    </div>
  );
};

export default SubscriptionsPage;
