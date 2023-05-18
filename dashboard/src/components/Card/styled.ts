import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 190px;
  height: 90px;
  background: #15152b;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Paragraph = styled.p`
  display: flex;
  flex-direction: column;
  gap: 12px;

  span {
    font-family: Raleway;
    font-style: "Regular";
    font-size: 14px;
    line-height: 16px;
    line-height: 100%;
    color: #c5ced9;
  }

  div {
    font-style: bold;
    font-size: 18px;
    line-height: 16px;
    line-height: 100%;
    color: #c5ced9;
  }
`;
