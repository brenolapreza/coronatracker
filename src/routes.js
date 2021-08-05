import React from "react";

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import TodosPaises from "./pages/TodosPaises";

export default function Routes(){
    return(
        <Router>
            <Route path="/" component={Home} exact />
            <Route path="/listar" component={TodosPaises} exact />
        </Router>
    )
} 