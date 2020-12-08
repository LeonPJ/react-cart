import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Hint from './components/hint';
import Menu from './components/menu';
import { CartProvider } from './components/CartContext';
import Section from './components/section';
//import { Alert } from 'react-bootstrap';// console

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Hint />
        <div className="app">
          <Menu />
          <Section />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
