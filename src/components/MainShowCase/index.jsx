
import { useContext } from "react";

import { ShowCaseContext } from "../../providers/showCase";
import Product from "../Product";
import { StyledList } from "./styles";


function MainShowCase(){
  const {showCase} = useContext(ShowCaseContext)
 

  
  return(
    <StyledList>
      {
      showCase?.map((product)=>( 
          <Product key={product.id} product={product}/>
        )
      )
    }
    </StyledList>
  )
}

export default MainShowCase