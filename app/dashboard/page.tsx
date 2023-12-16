import React from "react";
import { lusitana } from "../fonts";
import SummaryCard from "./components/display/SummaryCard";
import EaningTrendsChart from "./components/charts/EaningTrendsChart";
import LinChart from "./components/charts/LinChart";
import BarChart from "./components/charts/BarChart";
import DounartChart from "./components/charts/DounartChart";
import { Banknote, Clock4, LayoutList, Users } from "lucide-react";
import { Card, CardTitle } from "../components/ui/card";

// https://towardsdev.com/chart-js-next-js-beautiful-data-driven-dashboards-how-to-create-them-fast-and-efficiently-a59e313a3153

const DashBoard = () => {
  return (
    <div>
      <p className={`${lusitana.className} font-bold text-2xl m-3`}>
        DashBoard
      </p>
      <div className="mb-4 grid gap-3 grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
        <SummaryCard.SummaryCardConcrete
          title="Total Listings"
          subTitle="20 Properties"
          icon={LayoutList}
        />
        <SummaryCard.SummaryCardConcrete
          title="Total Tenants"
          subTitle="330 Tenants"
          icon={Users}
        />
        <SummaryCard.SummaryCardConcrete
          title="Total Earnings"
          subTitle="10k+ USD"
          icon={Banknote}
        />
        <SummaryCard.SummaryCardConcrete
          title="Pending "
          subTitle="12 Pending"
          icon={Clock4}
        />
      </div>
      <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
        <div className="grid gap-3 grid-cols-1 grid-rows-2">
          <BarChart
            x={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            y={[
              {
                data: [0.1, 0.4, 0.6, 0.5, 0.2, 0.6],
                label: "Dolars",
                backgroundColor: "rgba(255, 0, 0, 0.4)",
                borderColor: "rgba(255, 0, 0, 1)",
                borderRadius: 10,
                barThickness: 10,
              },
              {
                data: [0.4, 0.1, 0.6, 0.6, 0.2, 0.6],
                label: "Jeff",
                backgroundColor: "rgba(255, 245, 0, 0.4)",
                borderColor: "rgba(255, 0, 34, 1)",
                borderRadius: 10,
                barThickness: 10,
              },
            ]}
          />
          <LinChart
            x={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
            y={[
              {
                data: [0.1, 0.4, 0.6, 0.5, 0.2, 0.6],
                label: "Dolars",
                backgroundColor: "rgba(255, 0, 0, 0.4)",
                borderColor: "rgba(255, 0, 0, 1)",
              },
              {
                data: [0.4, 0.1, 0.6, 0.6, 0.2, 0.6],
                label: "Jeff",
                backgroundColor: "rgba(255, 245, 0, 0.4)",
                borderColor: "rgba(255, 0, 34, 1)",
              },
            ]}
          />
        </div>
        <Card>
          <CardTitle>Table here</CardTitle>
        </Card>
      </div>
    </div>
  );
};

export default DashBoard;
