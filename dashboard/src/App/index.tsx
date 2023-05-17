import GlobalStyles from "../GlobalStyled";
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar";
import * as S from "./styled";

function App() {
  return (
    <>
      <GlobalStyles />

      <S.ContainerApp>
        <SideBar />
        <Header />
      </S.ContainerApp>
    </>
  );
}

export default App;
