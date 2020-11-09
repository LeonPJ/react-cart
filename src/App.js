import logo from './logo.svg';
import './App.css';
//import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alter from './components/alter';
import Menu from './components/menu';
import Commodity from './components/commodity';

function App() {
  return (
    <Container fluid="true">
      <Alter />
      <Menu />
      <Commodity />
    </Container>
  );
}

export default App;
