import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ present, late, absent }) {

  const data = {
    labels: ['Present', 'Absent', 'Late'],
    datasets: [{
      label: '% Percentage',
      data: [present, absent, late],
      borderWidth: 1,
      backgroundColor: [
        "#4ade80", // Emerald green (Present)
        "#f87171",  // Soft red (Absent)
        'orange'
      ],
      hoverOffset: 8
    }]
  }

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#333',
          font: {
            size: 14,
            family: 'Arial'
          }
        }
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    }
  }

  return (
    <Pie data={data} options={options} />
  )
}

export default PieChart;
