import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Analytics = () => {
  const data = {
    labels: ["Complete", "Ongoing", "Incomplete"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        borderWidth: 0,
        spacing: 4,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,

    plugins: {
      legend: {
        display: true,
        labels: {},
      },
    },
  };

  return (
    <div className="h-96 bg-white dark:bg-dark-200">
      <div className="p-4">
        <h6 className="text-sm tracking-wide mb-4">Tasks analytics</h6>
        <div className="h-[300px] flex items-center justify-center w-full">
          <Doughnut options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
