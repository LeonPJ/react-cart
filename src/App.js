import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Alter from './components/alter';
import Menu from './components/menu';
//import ProductList from './components/productlist';
//import Cart from './components/cart';
//import CartList from './components/cartlist';
import { CartProvider } from './components/CartContext';
import Section from './components/section';

/*const App = () => {
  return (
    <BrowserRouter>
      <h1>Hello user</h1>
      <CartProvider>
        <Menu />
        <Section />
      </CartProvider>
    </BrowserRouter>
  );
}*/

const App = () => {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Menu />
          <Section />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
