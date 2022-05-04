import styled from "styled-components"


export const TotalContainer = styled.section`
    display: flex;
    flex-direction: column;
    background-color: #868E96;
    align-items: center;
    height: 200px;
    justify-content: space-around;
    button{
        width: 150px;
        height: 35px;
        font-size: 16px;
        border: none;
        background-color: #108882;
        color: #FFFFFF;
        border-radius: 10px;
    }
    h2{
        color:#FFFFFF;
        font-size: 14px;
    }
    span{
        color: #FFFFFF;
    }
`

export const EmptyCart = styled.li`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;
    
    height: 100px;
    h2{
        
        text-align: left;
        margin: 0px;
        
        
        color: #FFFFFF;
        height: 40px;
        
    }
`

export const CartWithItems = styled.li`
    margin-top: 10px;
    margin-left: 10px;
    list-style: none;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 90px;
    margin-bottom: 10px;
    align-items: flex-start;
    width: 270px;
    padding: 10px;
    justify-content: space-around;
    border: #868E96 2px solid;
    border-radius: 5px;
    h2{
        font-size: 10px;
        text-align: left;
        margin: 0px;
        width:100px;
        line-height: 15px;
        color: #FFFFFF;
        height: 40px;
        
    }
`

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #343B41;
    padding: 10px;
    border-radius: 10px;
    
    section{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    li section p{
        margin:0px;
        font-size: 12px;
        text-align: left;
        color: #FFFFFF;
        height: 40px;
        vertical-align: middle;
       
        
    }
    button{
        
        
        line-height: 14px;
        color: #FFFFFF;
        background-color: #FF577F;
        border: #FF577F 2px solid;
        border-radius: 4px;
       
        
        
    }
    button:disabled{
        filter: opacity(0.5);
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
        background-color:#868E96;

    }
`