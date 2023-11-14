"use client";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
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
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      // text: 'Monthly Data',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Death',
      data: [5057, 4835, 4522, 4765, 4243, 4175, 3948],
      borderColor: 'rgb(85, 156, 143, 1',
      backgroundColor: 'rgb(85, 156, 143, 0.7',
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}

export default LineChart;