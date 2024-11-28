import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { CategoryTotal } from '../types';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface ExpenseChartProps {
  categoryTotals: CategoryTotal[];
}

export default function ExpenseChart({ categoryTotals }: ExpenseChartProps) {
  const data = {
    labels: categoryTotals.map((ct) => ct.category),
    datasets: [
      {
        data: categoryTotals.map((ct) => ct.total),
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF9F40',
        ],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'Expenses by Category',
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Pie data={data} options={options} />
    </div>
  );
}