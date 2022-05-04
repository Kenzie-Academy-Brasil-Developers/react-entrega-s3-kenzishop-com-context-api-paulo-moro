import styled from "styled-components"


export const StyledNav = styled.nav`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: space-between;

    button{
        width: 75px;
        height: 35px;
        font-size: 20px;
        border: none;
        background-color: #9ba9eb ;
        color: #FFFFFF;
        border-radius: 10px;
    }
    button:disabled{
        filter: opacity(0.5);
    }
`