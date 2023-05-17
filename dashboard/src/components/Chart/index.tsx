import * as S from "./styled";

import {  Doughnut } from 'react-chartjs-2';

import {  Tooltip, Chart as NewChart,  Title, ArcElement } from 'chart.js';

NewChart.register(Title, Tooltip, ArcElement);

function Chart() {

  return (
    <S.Container>
      <Doughnut
        width={200}
        height={200}
        options={{ maintainAspectRatio: false }}
        data={{
          labels: ['A', 'B' ],
          datasets: [
            {
              label: '# Teste',
              data: [20, 80],
              backgroundColor: [
                '#f5d7d7',
                '#220958'
              ],
            },
          ],
        }}
      />
    
    </S.Container>
  );
}

export default Chart;
