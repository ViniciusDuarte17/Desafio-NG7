import * as S from "./styled";



export const SideBar = () => {

    return(
        <S.Nav>
            <ul>
                <li>Logo</li>
                <li>Dashboard</li>
                <li>Institution</li>
                <li>KPIs</li>
                
            </ul>

            <ul>
                <li>Configuração</li>

                <li>Alarme</li>

                <li>Profile</li>
            </ul>
        </S.Nav>
    )
}