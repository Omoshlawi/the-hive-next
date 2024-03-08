import { BASE_URL } from "@/app/lib/constants";
import { Pricing } from "@/app/lib/entities/sass";
import React from "react";

const SubscriptionsPage = async () => {
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
      <pre>{JSON.stringify(pricings, null, 2)}</pre>
    </div>
  );
};

export default SubscriptionsPage;
