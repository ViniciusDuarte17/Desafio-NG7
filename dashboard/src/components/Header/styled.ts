import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  width: 100%;
  height: 4.25em;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: Raleway;
    font-style: Bold;
    font-size: 26px;
    line-height: 23px;
    line-height: 100%;
    padding-left: 5%;
    padding-top: 0%;
  }

  ul {
    width: 16.75em;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 24px;
  }

`;

export const Select = styled.select`
  border: none;
  background: #121244;
  color: #c4cbd3;
  width: 8.75em;
  height: 2.75em;
  border-radius: 32px;

  font-family: Raleway;
  font-style: 'Regular';
  font-size: 14px;
  line-height: 16px;
  line-height: 100%;
  padding-left: 10%;
  cursor: pointer;
`;

