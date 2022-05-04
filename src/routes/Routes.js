import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Cart from "../pages/Cart";
import MainPage from "../pages/MainPage";



function Routes(){
    return(
        <Switch>
          <Route exact path="/">
            <MainPage/>
          </Route>
          <Route exact path="/cart">
            <Cart/>
          </Route>  
      </Switch>
    )
}


export default Routes