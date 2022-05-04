import {MdRemoveShoppingCart} from "react-icons/md"
import { CartWithItems } from "../MainCart/styles"
import {BsFillCartPlusFill} from 'react-icons/bs'
import { useContext } from "react"
import { CartContext } from "../../providers/cart"


function Product({product, isRemovable  = false}){
  const {nome, imagem, descricao,preco} = product  
    
  const {addToCart, removeFromCart } = useContext(CartContext)

  
  
  return(
      <CartWithItems>                    
          <figure>
              <img src={imagem} alt={nome} />
          </figure>                       

          <section>
            <h2>{nome}</h2>
            
            {!isRemovable ? <p>{descricao}  </p>: <p>{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>}
            
          </section>
            {!isRemovable? <><span>{preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span> <button onClick={()=>addToCart(product)}><BsFillCartPlusFill/></button></>:<button onClick={()=>removeFromCart(product)} > <MdRemoveShoppingCart/></button>}
      </CartWithItems>
  )
}


export default Product