import * as S from "./styled";

import { ReactNode } from "react"

interface PropsBarChart {
  children?: ReactNode;
  title: string;
}

export const BarChart = ({ children, title }: PropsBarChart) => {
  return (
    <S.Container>
      <h1> {title} </h1>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        {children}
      </div>
    </S.Container>
  );
};
