import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Foods from "./pages/foods";

import Food from "./components/commons/foods/food";

import Blog from "./pages/blog";
import BlogGrilla from "./pages/blog-grill";
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
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blogGrilla" component={BlogGrilla} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
