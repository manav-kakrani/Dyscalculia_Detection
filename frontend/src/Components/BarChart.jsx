import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ scores }) => {
  const data = {
    labels: ['Language', 'Memory', 'Speed', 'Visual', 'Audio', 'Survey'],
    datasets: [
      {
        label: 'Percentage',
        data: [
          scores.language * 100,
          scores.memory * 100,
          scores.speed * 100,
          scores.visual * 100,
          scores.audio * 100,
          scores.survey * 100
        ],
        backgroundColor: [
          'rgba(75,192,192,0.4)',
          'rgba(54, 162, 235, 0.4)',
          'rgba(255, 206, 86, 0.4)',
          'rgba(255, 99, 132, 0.4)',
          'rgba(153, 102, 255, 0.4)',
          'rgba(255, 159, 64, 0.4)'
        ],
        borderColor: [
          'rgba(75,192,192,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <Bar
      data={data}
      options={{
        scales: {
          y: {
            beginAtZero: true,
            max: 100,
            ticks: {
              callback: (value) => `${value}%`
            }
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Quiz Results'
          }
        }
      }}
    />
  );
};

export default BarChart;
