import GlobalStyles from "../GlobalStyled";
import { BarChart } from "../components/BarChart";
import { Card } from "../components/Card";
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
                {/* barra 1 */}
                <BarChart />
              </div>

              <div>
                {/* barra 2 */}
                <BarChart />
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
