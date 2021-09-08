import React from "react";

import {
    BrowserRouter as Router,
    Route, Switch
} from "react-router-dom";

import Home from "./pages/Home";
import TodosPaises from "./pages/TodosPaises";
import Vacinas from "./pages/Vacinas";

export default function Routes(){
    return(
        <Router>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/listar/" component={TodosPaises} exact />
            <Route path="/vacinas" component={Vacinas} exact />
          </Switch>
        </Router>
    )
} 