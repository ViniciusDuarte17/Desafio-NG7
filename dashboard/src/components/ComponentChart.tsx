import * as S from "./styled";

import {  Doughnut } from 'react-chartjs-2';

import {  Tooltip, Chart,  Title, ArcElement } from 'chart.js';

Chart.register(Title, Tooltip, ArcElement);


function ComponentChart() {

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
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)'
              ],
            },
          ],
        }}
      />
    
    </S.Container>
  );
}

export default ComponentChart;
