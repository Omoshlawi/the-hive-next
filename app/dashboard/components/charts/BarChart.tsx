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
  BarElement
);
import { Bar } from "react-chartjs-2";
import assert from "assert";

interface YData {
  label: String;
  data: number[];
  borderColor?: string;
  backgroundColor?: string;
  barThickness?: number;
  borderRadius?: number;
}

interface BarChartProps {
  y: YData[];
  x: string[];
}

const BarChart: React.FC<BarChartProps> = ({ x, y }) => {
  assert(
    y.every((val) => val.data.length === x.length),
    "x and y array must be equal length"
  );
  return (
    <div>
      <Bar data={{ labels: x, datasets: y as any }} />
    </div>
  );
};

export default BarChart;
