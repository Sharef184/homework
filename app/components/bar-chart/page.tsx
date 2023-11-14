"use client";
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

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
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
   // text: 'Daily Data'
    },
  },
};

const labels = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Death New',
      data: [87, 169, 126, 185, 153, 62, 55],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgb(85, 156, 143, 0.7',
    },
  ],
};

export function BarChart() {
  return <Bar options={options} data={data} />;
}

export default BarChart;
