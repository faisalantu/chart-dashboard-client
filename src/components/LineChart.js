import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
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
      text: "Country Line Chart",
      position: "bottom",
    },
  },
};


const LineChart = ({ data }) => {
  const labels = [];
  const tempData = [];
  const counts = {};

  data?.forEach((element) => {
    return (counts[element.country] = (counts[element.country] || 0) + 1);
  });
  for (const key in counts) {
    labels.push(key?key:"⛔No Country");
    tempData.push(counts[key]);
  }

  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: tempData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Line style={{ position: "relative", width: "100%", height:"420px" }} options={options} data={data2} />
    </div>
  );
};

export default LineChart;
