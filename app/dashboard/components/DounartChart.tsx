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
  BarElement,
  ArcElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  Title,
  Legend,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
  LinearScale,
  ArcElement
);
import { Doughnut } from "react-chartjs-2";
import assert from "assert";

interface YData {
  label: String;
  data: number[];
  borderColor?: string;
  backgroundColor?: string | string[];
  barThickness?: number;
  borderRadius?: number;
}

//   interface BarChartProps {
//     y: YData[];
//     x: string[];
//   }

type Props = {
  y: YData[];
  x: string[];
};

const DounartChart = ({ x, y }: Props) => {
  assert(
    y.every((val) => {
      const xyLengtheEqual = val.data.length === x.length;
      if (val.backgroundColor instanceof Array) {
        return xyLengtheEqual && true;
      }
      return xyLengtheEqual;
    }),
    "x and y array must be equal length"
  );
  return (
    <div>
      <Doughnut data={{ labels: x, datasets: y as any }} />
    </div>
  );
};

export default DounartChart;
