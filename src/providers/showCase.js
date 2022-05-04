import { createContext,  useState } from "react"
import { products } from "./products"

export const ShowCaseContext = createContext([])

export const ShowCaseProvider = ({children}) =>{
    const [showCase,setShowCase]= useState(products)   

    
    return(
        <ShowCaseContext.Provider value={{showCase, setShowCase}}>
            {children}
        </ShowCaseContext.Provider>

    )

}