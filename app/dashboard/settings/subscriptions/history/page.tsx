import { BASE_URL } from "@/app/lib/constants";
import { UserSubscription } from "@/app/lib/entities/sass";
import React from "react";
import { cookies } from "next/headers";
import moment from "moment/moment";

const SubscriptionHistoryPage = async () => {
  let subscriptions: UserSubscription[] = [];
  const userCookie = cookies().get("session-token")?.value;
  const myHeaders = new Headers();
  myHeaders.append("Cookie", `session-token=${userCookie}`);
  try {
    const response = await fetch(
      new URL(`/api/proxy/pricing/subscriptions`, BASE_URL),
      {
        cache: "no-cache",
        headers: myHeaders,
      }
    );
    if (response.ok) {
      subscriptions = (await response.json()).results;
    }
  } catch (error) {
    // console.log(error);
  }
  return (
    <div className="w-full">
      <div className=" mx-auto w-full rounded-2xl px-2 py-4 duration-150 ease-in-out sm:p-20 sm:pb-16 md:max-w-screen-xl">
        <h2 className="mb-4 w-full text-center text-4xl font-bold md:text-5xl">
          Subscriptions History
        </h2>

        <div className="grid grid-cols-1 gap-3">
          {/* <pre>{JSON.stringify(subscriptions, null, 2)}</pre> */}
          <div className="bg-accent p-4 grid grid-cols-5 gap-3 font-bold">
            <div>Pricing Plan</div>
            <div>Amount</div>
            <div>Start date</div>
            <div>Expiry date</div>
            <div>Status</div>
          </div>
          {subscriptions.map(
            ({ id, pricing, payment, startDate, endDate, status }, index) => (
              <div key={index} className="bg-accent p-2 grid grid-cols-5 gap-3">
                <div>{pricing?.name ?? "Pricing"}</div>
                <div>{payment.amount}</div>
                <div>{moment(startDate).format("Do MMM yyy")}</div>
                <div>{moment(endDate).format("Do MMM yyy")}</div>
                <div>{status}</div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionHistoryPage;
