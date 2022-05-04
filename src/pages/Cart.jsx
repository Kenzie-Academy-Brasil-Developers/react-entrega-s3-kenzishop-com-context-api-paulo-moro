import MainCart from "../components/MainCart";

import NewNav from "../components/StyledNav";



function Cart(){
    return(
      <>
        <header>
          <h3>Kenzie <span>Shop</span></h3>
          <NewNav isCart/>            
        </header>
        <main>
          <MainCart/>
        </main>
        
      </>
    )
}

export default Cart