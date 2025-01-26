import React from "react";
//import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
// } from "chart.js";

//ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PlatformInsights = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Platform Insights",
        data: [10, 15, 8, 20, 18, 25, 30],
        borderColor: "rgba(59, 130, 246, 1)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
      },
    },
  };

  return (
    <div className="col-span-8 bg-gray-200 text-black p-6 rounded-lg shadow-lg">
      <h2 className="text-xl mb-4">Platform Insights</h2>
      {/* <Line data={data} options={options} /> */}
    </div>
  );
};

export default PlatformInsights;
