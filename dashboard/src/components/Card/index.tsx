import * as S from "./styled";

import {ReactNode} from "react";

interface Props {
    // icon: string;
    text: string;
    price: string;
    children?: ReactNode;
}

export const Card = ({ text, price, children}: Props) => {
  return (
    <S.Container>
       <section>
          {children}
       </section>

       <S.Paragraph>
         <span>{text}</span>
         <div>
            <strong>{price}</strong>
         </div>
       </S.Paragraph>
    </S.Container>
  );
};
