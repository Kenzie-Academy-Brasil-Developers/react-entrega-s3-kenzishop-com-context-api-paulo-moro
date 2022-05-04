
import MainShowCase from "../components/MainShowCase"
import NewNav from "../components/StyledNav"



function MainPage(){
  return(
  <>
    <header>
      <h3>Kenzie <span>Shop</span></h3>
      <NewNav/>             
    </header>
    <main>
      <MainShowCase/>
    </main>
    
  </>
)
}

export default MainPage