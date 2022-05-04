import styled from "styled-components"

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343B41;
    padding: 10px;
    border-radius: 10px;
    
    
    
    li{
        margin-top: 10px;
        margin-left: 10px;
        list-style: none;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 100px;
        margin-bottom: 10px;
        align-items: center;
        width: 270px;
        padding: 10px;
        justify-content: space-around;
        border: #868E96 2px solid;
        border-radius: 5px;
    }
    li h2{
        font-size: 10px;
        text-align: left;
        margin: 0px;
        width:100px;
        color: #FFFFFF;
        height: fit-content;
        
    }
    li section p{
        margin:0px;
        font-size: 8px;
        width: 100px;
        text-align: left;
        color: #FFFFFF;
        height: 55px;
        
    }
    section{
        display: flex;
        height: 100px;
        flex-direction: column;
        flex-wrap: wrap;
    }
    button{
        
        font-size:8px;
        line-height: 14px;
        color: #FFFFFF;
        background-color: #FF577F;
        border: #FF577F 2px solid;
        border-radius: 4px;
        
        
    }
   
    figure{
        margin: 0px 20px 0px 0px
    }
    img{
        width: 90px;
        border-radius: 5px;
    }
    span{
        
        color: #FFFFFF;
        padding: 6px;
        border-radius: 4px;
        font-size: 10px;
        text-align: left;

    }
`