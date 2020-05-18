import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//
import { Provider } from "react-redux";
import store from "./store";

import Home from "./pages/Home";
import Foods from "./pages/Foods";

import Food from "./components/commons/foods/Food";

import Blog from "./pages/Blog";
import BlogGrilla from "./pages/Blog-grill";
import PasoUno from "./components/commons/paids/paidOne";
import PasoDos from "./components/commons/paids/paidTwo";
import Cart from "./pages/Paid";
import "./components/styles/css/style.css";
import Wishlist from "./pages/Wishlist";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/favoritos" component={Wishlist} />
            <Route exact path="/comidas" component={Foods} />
            <Route exact path="/comidas/:id" component={Food} />
          </Switch>
          <Switch>
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/blogGrilla" component={BlogGrilla} />
          </Switch>
          <Switch>
            <Route exact path="/carrito" component={Cart} />
            <Route exact path="/carrito/paso-uno" component={PasoUno} />
            <Route exact path="/carrito/paso-dos" component={PasoDos} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
