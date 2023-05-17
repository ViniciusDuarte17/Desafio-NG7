import * as S from "./styled";

export const Header = () => {
  return (
    <S.ContainerHeader>
      <h1>KPI Dashboard</h1>

      <ul>
        <li>
          <select>
            <option value="">Institute</option>
            <option value="">Institute2</option>
            <option value="">Institute3</option>
          </select>
        </li>

        <li>
          <select>
            <option value="">2019 - 2020</option>
            <option value="">2021 - 2022</option>
            <option value="">2022 - 2023</option>
          </select>
        </li>
      </ul>
    </S.ContainerHeader>
  );
};
