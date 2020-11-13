//Wimport logo from './logo.svg';
//import React, { useState } from 'react';
//import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Alter from './components/alter';
import Menu from './components/menu';
import { Product } from './components/product';
//import { Product, List } from './components/product';
import Cart from './components/cart';
import { Alert } from 'react-bootstrap';

const App = () => {
  //const Context = React.createContext();
  return (
    <Router>
      <Route path='/' exact component={() => (// 商城
        <React.Fragment>
          <Alter />
          <Menu />
          <Product />
        </React.Fragment>
      )} />
      <Route path='/cart' exact component={() => (// 購物車
        <React.Fragment>
          <Menu />
          <Cart />
        </React.Fragment>
      )} />
    </Router>
  );
}

export default App;
