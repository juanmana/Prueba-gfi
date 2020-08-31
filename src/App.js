

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import {Home} from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";

function App() {


return(
  <h1>
      <Router>
       
        <>
          <Switch>
            <Route path="/" exact={true}>
              <Login />
            </Route>
             <Route path="/home" exact={true}>
              <Home />
            </Route>
          </Switch>
        </>
      </Router>
    </h1>
  );
}




export default App;
