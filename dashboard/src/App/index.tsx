import GlobalStyles from "../GlobalStyled";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
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
            <Card
              icon="icon"
              text="texto vai por aqui"
              price= '2,119'
            />
            <Card
              icon="icon"
              text="texto vai por aqui"
              price= '2,119'
            />
            <Card
              icon="icon"
              text="texto vai por aqui"
              price= '2,119'
            />
            <Card
              icon="icon"
              text="texto vai por aqui"
              price= '2,119'
            />
            <Card
              icon="icon"
              text="texto vai por aqui"
              price= '2,119'
            />
          </S.SectionCard>

          <section>
            aqui vai outro conteudo
          </section>
        </div>
      </S.ContainerApp>
    </>
  );
}

export default App;
