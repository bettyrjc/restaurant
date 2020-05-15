import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Foods from "./pages/foods";

import Food from "./components/commons/foods/food";
import "./components/styles/css/style.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/comidas" component={Foods} />
            <Route exact path="/comidas/:id" component={Food} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
