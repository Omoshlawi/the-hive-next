"use client";

import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  Title,
  Legend,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";

Chart.register(
  CategoryScale,
  Title,
  Legend,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  LinearScale
);
import { Line } from "react-chartjs-2";
import assert from "assert";

interface YData {
  label: String;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  fill?: "start" | "end";
}

interface LineChartProps {
  y: YData[];
  x: string[];
}

const LinChart: React.FC<LineChartProps> = ({ x, y }) => {
  assert(
    y.every((val) => val.data.length === x.length),
    "x and y array must be equal length"
  );
  return (
    <div>
      <Line
        data={{
          labels: x,
          datasets: y as any,
        }}
        options={{
          plugins: { legend: { display: true } },
          //   elements: {
          //     line: {
          //         tension: 0,
          //         borderWidth: 2,
          //         borderColor: "rgba(255, 0, 0, 1)",
          //         fill: "start",
          //         // fill: "end",
          //         backgroundColor: "rgba(255, 0, 0, 0.4)",
          //     },
          //     point: {
          //       radius: 0,
          //       hitRadius: 0,
          //     },
          //   },
          //     scales: {
          //       xAxis: {
          //         display: false,
          //       },
          //       yAxis: {
          //         display: false,
          //       },
          //     },
        }}
      />
    </div>
  );
};

export default LinChart;
