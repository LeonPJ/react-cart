import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Alter from './components/alter';
import Menu from './components/menu';
import Product from './components/product';
import Cart from './components/cart';
//import { CartContext } from './components/CartContext';

const App = () => {
  return (
    <Router>
      <Menu />

      <Route path='/' exact component={Product} />
      <Route path='/cart' exact component={Cart} />

    </Router>
  );
}

export default App;
