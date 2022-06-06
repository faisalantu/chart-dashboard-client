import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import stringtocolor from 'string-to-color';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  maintainAspectRatio : false,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Relevance Pie Chart",
      position: "bottom",
    },
  },
};


const PieChartRelevance = ({ data }) => {
  const labels = [];
  const tempData = [];
  const counts = {};
  const colors=[];

  data?.forEach((element) => {
    return (counts[element.relevance] = (counts[element.relevance] || 0) + 1);
  });
  for (const key in counts) {
    labels.push(key?key:"⛔No Relevance");
    tempData.push(counts[key]);
    colors.push(stringtocolor(key))
  }

  const data2 = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: tempData,
        backgroundColor: colors,
      },
    ],
  };
  return (
    <div>
      <Pie options={options} style={{ position: "relative", width: "100%", height:"420px" }}  data={data2} />
    </div>
  );
};

export default PieChartRelevance;
