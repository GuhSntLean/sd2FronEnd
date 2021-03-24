import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import Orders from "./pages/Orders";

function Router(){
  return(
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;