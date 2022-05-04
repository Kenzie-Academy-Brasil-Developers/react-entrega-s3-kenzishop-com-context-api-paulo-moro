
import { useContext } from "react"
import { CartContext } from "../../providers/cart"
import Product from "../Product"
import {EmptyCart, StyledList, TotalContainer} from "./styles"


function MainCart(){

    const {cart}  = useContext(CartContext)  
    
    return(
       <>
        <StyledList>
          {cart.length > 0?cart?.map((cartItem)=>(                
            <Product key={Math.floor(Date.now() * Math.random()).toString(36)+cartItem.id} product={cartItem} isRemovable/>
          )):<EmptyCart>
              <h2>Carrinho vazio</h2>
            </EmptyCart>}
        </StyledList>
        <TotalContainer>
          <h2>Total da Compra:</h2>
          <span>{cart.reduce((acc,cartItem)=>{
            return (cartItem.preco+acc)
          },0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
          <button disabled={!cart}>Finalizar pedido</button>
        </TotalContainer>
      </> 
    )
}

export default MainCart