import * as S from "./styled";

import { Doughnut } from "react-chartjs-2";

import { Tooltip, Chart as NewChart, Title, ArcElement } from "chart.js";

NewChart.register(Title, Tooltip, ArcElement);

interface ChartProps {
  number: number;
  title: string;
}

function Chart({ number, title }: ChartProps) {
  const sobraDivisao = number - 100;

  return (
    <S.Container>
      <Doughnut
        width={200}
        height={200}
        options={{
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: `${title}`,
            },
          },
        }}
        data={{
          labels: ["A", "B"],
          datasets: [
            {
              label: "# Teste",
              data: [number, sobraDivisao],
              backgroundColor: ["#cfcccc", "#26ff2dce"],
              borderAlign: "center",
              borderWidth: 0.2,
              hoverBorderWidth: 0.8,
            },
          ],
        }}
      />
    </S.Container>
  );
}

export default Chart;
