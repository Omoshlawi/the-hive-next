import { BASE_URL } from "@/app/lib/constants";
import { UserSubscription } from "@/app/lib/entities/sass";
import React from "react";
import moment from "moment/moment";
import { getHeaderWithCookie } from "@/app/lib/serverutils";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { TourSchedule } from "@/app/lib/entities/listings";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/accordion";

const NotificationsPage = async () => {
  let schedules: TourSchedule[] = [];
  try {
    const response = await fetch(
      new URL(`/api/proxy/listings/tours`, BASE_URL),
      {
        cache: "no-cache",
        headers: await getHeaderWithCookie(),
      }
    );
    if (response.ok) {
      schedules = (await response.json()).results;
    }
  } catch (error) {
    // console.log(error);
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Tour Schedules</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-1 gap-3">
                <div className="grid grid-cols-5 gap-3 bg-accent p-3">
                  <span>#</span>
                  <span>Listing</span>
                  <span>Date</span>
                  <span>Time</span>
                  <span>Status</span>
                </div>
                {schedules.map(
                  ({ date, notes, person, time, listing, status }, index) => (
                    <div className="grid grid-cols-5 gap-3 p-3" key={index}>
                      <span>{index + 1}</span>
                      <span>{listing.title}</span>
                      <span>{moment(date).format("Do ddd MMM yyy")}</span>
                      <span>{time}</span>
                      <span>{status}</span>
                    </div>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default NotificationsPage;
