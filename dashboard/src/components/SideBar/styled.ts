import styled from "styled-components"


export const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color:#15152B;

    ul {
        list-style: none;
        height: 50vh;
        display: flex;
        flex-direction: column;
        margin-bottom: 13vh;
        align-items: center;
        justify-content: space-evenly;
    }

    li {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;
        &:hover{
            cursor: pointer;
            background-color: #090E16;
        }
    }

    a {
        text-decoration: none;
        border: none;
    }
`