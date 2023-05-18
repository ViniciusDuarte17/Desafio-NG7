import styled from "styled-components";

export const ContainerApp = styled.main`
  display: grid;
  grid-template-columns: 80px 1fr;
  margin: auto;
  margin-top: 3%;
  width: 90%;
  min-height: 100vh;
  background-color: #090e16;
  color: #fff;
`;

export const SectionCard = styled.section`
  display: grid;
  grid-template-columns: 220px 220px 220px 220px 220px;
  margin-left: 3%;
  margin-top: 3%;
`;

export const SectionAnalysis = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 3%;
  margin-left: 3%;
`;

export const SectionBarChart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
