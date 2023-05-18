import styled from "styled-components";



export const ContainerHeader = styled.header`
    display: flex;
    width: 110%;
    height: 4.25em;
    justify-content: space-between;
    /* border: 1px solid green; */

    h1{
        padding-left: 5%;
        padding-top: 2%;
    }

    ul{
        width: 14em;
        border: 1px solid red;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`