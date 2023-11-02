import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Chart = ({ chartData }) => {
  const dataValue = [
    chartData.totalCaloriesBurned,
    chartData.totalCaloriesConsumed,
    chartData.totalCaloriesGoals,
    chartData.totalCaloriesRemaining,
  ];

  const data = {
    labels: [
      "Calories Burned",
      "Calories Consumed",
      "Calories Goals",
      "Calories Remaining",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: dataValue,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex justify-center m-4 mt-9 w-full lg1150:w-96 mx-auto">
      <Pie data={data} />
    </div>
  );
};

export default Chart;
