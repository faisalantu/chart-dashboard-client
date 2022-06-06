import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export const options = {
  responsive: true,
  maintainAspectRatio : false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "likelihood Bar Chart",
      position: "bottom",
    },
  },
};


const BarChartLikelihood = ({ data }) => {
  const labels = [];
  const tempData = [];
  const counts = {};

  data?.forEach((element) => {
    return (counts[element.likelihood] = (counts[element.likelihood] || 0) + 1);
  });
  for (const key in counts) {
    labels.push(key?key:"⛔No likelihood");
    tempData.push(counts[key]);
  }

  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: tempData,
        backgroundColor: "rgba(214, 123, 103, 100)",
      },
    ],
  };
  return (
    <div>
      <Bar style={{ position: "relative", width: "100%", height:"420px" }} options={options} data={data2} />
    </div>
  );
};

export default BarChartLikelihood;
