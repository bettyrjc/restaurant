import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import "./styles/css/style.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
