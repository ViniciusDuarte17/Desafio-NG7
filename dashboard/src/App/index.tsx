import GlobalStyles from "../GlobalStyled";
import { BarChart } from "../components/BarChart";
import BatteryChart from "../components/BatteryChart";
import { Card } from "../components/Card";
import Chart from "../components/Chart";
import { Header } from "../components/Header";
import LineChart from "../components/LineChart";
import { SideBar } from "../components/SideBar";
import * as S from "./styled";

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import SchoolIcon from "@mui/icons-material/School";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import SecurityIcon from "@mui/icons-material/Security";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";

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
            <Card text="texto vai por aqui" price="2,119">
              <PermIdentitySharpIcon />
            </Card>
            <Card text="texto vai por aqui" price="2,119">
              <FormatListBulletedIcon />
            </Card>
            <Card text="texto vai por aqui" price="2,119">
              <SchoolIcon />
            </Card>
            <Card text="texto vai por aqui" price="2,119">
              <SecurityIcon />
            </Card>
            <Card text="texto vai por aqui" price="2,119">
              <ImportContactsIcon />
            </Card>
          </S.SectionCard>

          <S.SectionAnalysis>
            <div>
              <LineChart
                data={[65, 59, 80]}
                data2={[69, 75, 90]}
                labels={["A", "B", "C"]}
              />
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
                <BatteryChart data={[50, 20]} labels={["Homens", "Mulheres"]} />
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
