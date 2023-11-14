"use client";
import { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
        labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
        datasets: [
            {
                label: 'Death New',
                data: [87, 169, 126, 185, 153, 62, 55],
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgb(85, 156, 143, 0.7',
            }, 
        ]
    })
    setChartOptions({
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                // text: 'Daily Data'
            }
        },
        maintainAspectRatio: false,
        responsive: true
    })
  }, [])

  return (
      <div className='p-2'>
        <Bar data={chartData} options={chartOptions} />
      </div>
  );
};

export default BarChart;