import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./container/Home";
import "./components/styles/css/style.css";
const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
