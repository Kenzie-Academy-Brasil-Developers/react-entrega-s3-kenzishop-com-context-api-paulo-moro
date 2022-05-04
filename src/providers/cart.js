import { createContext,  useState } from "react"

export const CartContext = createContext([])

export const CartProvider = ({children}) =>{
    const [cart,setCart]= useState(
        JSON.parse(localStorage.getItem("cart")) || []
    )

    const addToCart = (item) =>{
        const newCartItem = {
            nome:item.nome,
            cartId:Math.floor(Date.now() * Math.random()),
            preco:item.preco,
            imagem:item.imagem
        } 
        const storage = JSON.parse(localStorage.getItem("cart"))
        localStorage.setItem("cart", JSON.stringify([...storage, newCartItem]))
        setCart([...cart, newCartItem])
    }

    const removeFromCart = (item) =>{
        console.log(item)
        const newCart = cart.filter((itemOnCart)=>itemOnCart.cartId !== item.cartId)
        localStorage.setItem("cart", JSON.stringify(newCart))
        setCart(newCart)
    }
    return(
        <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>

    )

}