

import { useHistory } from "react-router-dom";
import { StyledNav } from "./styles";



function NewNav({isLoggedIn = false, isCart=false}){
   
    const history = useHistory()

    return(
        <StyledNav>             
            {!isCart?<button onClick={()=>history.push("/cart")} >Cart</button>:<button onClick={()=>history.push("/")}>Home</button>}
            {!isLoggedIn?<button disabled>Login</button>:<button>Logout</button>}
        </StyledNav>
    )
}

export default NewNav