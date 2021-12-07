import React from 'react';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title, } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, Title,);

const data = {
  type: "doughnut",
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

const SurveyChart = () => {
  return (
    <div >
      <div style={{ width: "20%" , display:'inline-block'}}><Doughnut data={data} options={options}/></div>
      <div style={{ width: "20%",  display:'inline-block' }}><Doughnut data={data} options={options}/></div>
      <div style={{ width: "20%" , display:'inline-block'}}><Doughnut data={data} options={options}/></div>
      <div style={{ width: "20%",  display:'inline-block' }}><Doughnut data={data} options={options}/></div>
      
    </div>
  );
};

export default SurveyChart;
