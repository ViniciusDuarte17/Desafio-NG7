import GlobalStyles from "../GlobalStyled";
import { BarChart } from "../components/BarChart";
// import BatteryChart from "../components/BatteryChart";
import { Card } from "../components/Card";
import Chart from "../components/Chart";
import { Header } from "../components/Header";
import { LineChart } from "../components/LineChart";
import { SideBar } from "../components/SideBar";
import * as S from "./styled";

function App() {
  return (
    <>
      <GlobalStyles />

      <S.ContainerApp>
        <div>
          <SideBar />
        </div>
        <div>
          <Header />

          <S.SectionCard>
            <Card icon="icon" text="texto vai por aqui" price="2,119" />
            <Card icon="icon" text="texto vai por aqui" price="2,119" />
            <Card icon="icon" text="texto vai por aqui" price="2,119" />
            <Card icon="icon" text="texto vai por aqui" price="2,119" />
            <Card icon="icon" text="texto vai por aqui" price="2,119" />
          </S.SectionCard>

          <S.SectionAnalysis>
            <div>
              <LineChart />
            </div>
            <S.SectionBarChart>
              <div>
                {/* gráfico efeito pizza 1 */}
                <BarChart title="Attendance">
                  <Chart title="attendace" number={15} />
                  <Chart title="attendace" number={80} />
                  <Chart title="attendace" number={50} />
                </BarChart>
              </div>

              <div>
                {/* barra 2 */}
                <BarChart title="Barra horizontal">
                  {/* <BatteryChart data={[1, 2]} labels={['string', 'string']} /> */}
                  <p>teste</p>
                </BarChart>
              </div>
            </S.SectionBarChart>
          </S.SectionAnalysis>

          <S.SectionChartToNumber>
            <h1>compenetes com porcentagem</h1>
          </S.SectionChartToNumber>
        </div>
      </S.ContainerApp>
    </>
  );
}

export default App;
