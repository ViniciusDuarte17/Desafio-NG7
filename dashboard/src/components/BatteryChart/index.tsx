import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

interface BatteryChartProps {
  data: number[];
  labels: string[];
}

const BatteryChart: React.FC<BatteryChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        // Destruir o gráfico anterior, se existir
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        // Criar o novo gráfico
        chartInstance.current = new Chart(ctx, {
          type: "bar",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Dataset",
                data: data,
                backgroundColor: ["rgba(58, 164, 235, 0.5)", "#9e1197"],
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 0,
                barPercentage: 0.7,
              },
            ],
          },
          options: {
            indexAxis: "y",
            scales: {
              x: {
                beginAtZero: true,
              },
            },

            plugins: {
              legend: {
                display: true,
              },
            },
            layout: {
              padding: {
                top: 2,
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
