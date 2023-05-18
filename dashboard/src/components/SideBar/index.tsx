import * as S from "./styled";

import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AnalyticsSharpIcon from "@mui/icons-material/AnalyticsSharp";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PermDataSettingIcon from "@mui/icons-material/PermDataSetting";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";
import PersonPinIcon from "@mui/icons-material/PersonPin";

export const SideBar = () => {
  return (
    <S.Nav>
      <ul>
        <li>
          <a href="">
            <LogoDevIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a href="">
            <DashboardIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a href="">
            <AccountBalanceIcon fontSize="large" />
          </a>
        </li>
        <li>
          <a href="">
            <AnalyticsSharpIcon fontSize="large" />
          </a>
        </li>
      </ul>

      <ul>
        <li>
          <a href="">
            <PermDataSettingIcon fontSize="large" />
          </a>
        </li>

        <li>
          <a href="">
            <NotificationImportantIcon fontSize="large" />
          </a>
        </li>

        <li>
          <a href="">
            <PersonPinIcon fontSize="large" />
          </a>
        </li>
      </ul>
    </S.Nav>
  );
};
