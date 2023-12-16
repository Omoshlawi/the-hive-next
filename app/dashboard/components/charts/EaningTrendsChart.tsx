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
import { Bar, Line, Scatter, Bubble } from "react-chartjs-2";

const EaningTrendsChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              data: [0.1, 0.4, 0.6, 0.5, 0.2, 0.6],
              label: "Dorlars",
            }, // one line
          ],
        }}
        options={{
          plugins: { legend: { display: true } },
          elements: {
            line: {
              //   tension: 0,
              borderWidth: 2,
              borderColor: "rgba(255, 0, 0, 1)",
              fill: "start",
              //   fill: "end",
              backgroundColor: "rgba(255, 0, 0, 0.4)",
            },
            // point: {
            //   radius: 0,
            //   hitRadius: 0,
            // },
          },
          //   scales: {
          //     xAxis: {
          //       display: false,
          //     },
          //     yAxis: {
          //       display: false,
          //     },
          //   },
        }}
      />
    </div>
  );
};

export default EaningTrendsChart;
