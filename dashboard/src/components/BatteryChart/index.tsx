import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

interface BatteryChart {
  data: number[];
  labels: string[];
}
import { Tooltip, Chart as NewChart, Title, ArcElement } from "chart.js";

NewChart.register(Title, Tooltip, ArcElement);

const BatteryChart: React.FC<BatteryChart> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {

    if (chartRef.current) {

      const ctx = chartRef.current.getContext('2d');

      if (ctx) {
        new Chart(ctx, {
          type: 'bar',
          data: {
            labels: labels,
            datasets: [
              {
                label: 'Vendas',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });
      }
    }
  }, [data, labels]);

  return <canvas ref={chartRef} />;
};

export default BatteryChart;
