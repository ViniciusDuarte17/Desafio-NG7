import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import * as S from "./styled";

interface BatteryChartProps {
  data: number[];
  data2: number[];
  labels: string[];
}

const LineChart: React.FC<BatteryChartProps> = ({ data, data2, labels }) => {
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
          type: "line",
          data: {
            labels: labels,

            datasets: [
              {
                label: "Linha 1",
                data: data,
                backgroundColor: ["rgb(30, 82, 82)"],
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 0,
                fill: true,
              },

              {
                label: "Linha 2",
                data: data2,
                backgroundColor: ["rgb(4, 23, 23)"],
                borderColor: "#153347",
                borderWidth: 0,
                fill: true,
              },
            ],
          },
          options: {
            // indexAxis: "y",
            scales: {
              x: {
                // beginAtZero: true,
                display: true, // Exibir o eixo x
                title: {
                  display: true,
                  text: "Eixo X",
                },
              },
              y: {
                // beginAtZero: true,
                display: true, // Exibir o eixo y
                title: {
                  display: true,
                  text: "Eixo Y", // Título do eixo y
                },
              },
            },
          },
        });
      }
    }
  }, [data, data2, labels]);

  return (
    <S.Container>
      <canvas ref={chartRef} />
    </S.Container>
  );
};

export default LineChart;
