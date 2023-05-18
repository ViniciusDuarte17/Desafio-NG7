import * as S from "./styled";

interface Props {
    icon: string;
    text: string;
    price: string
}

export const Card = ({icon, text, price}: Props) => {
  return (
    <S.Container>
       <section>
          {icon}
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
