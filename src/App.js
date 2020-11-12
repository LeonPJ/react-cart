import logo from './logo.svg';
import './App.css';
//import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alter from './components/alter';
import Menu from './components/menu';
import {Product, List} from './components/product';
import React from 'react';

const App = () => {
  //const Context = React.createContext();
  return (
    <Container fluid="true">
      <Alter />
      <Menu />
      <div className="productList">
        <Product />
      </div>
      
      <List />
    </Container>
  );
};

export default App;
