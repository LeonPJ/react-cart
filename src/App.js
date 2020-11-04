import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { 
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl,
  Alert,
  Heading,
  Link
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Alter from './components/alter';

function App() {
  return (
    <Container fluid="true">
      <Alter />
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">線上商城</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Button variant="outline-primary">購物車</Button>
          </Form>
        </Navbar>
      </>
    </Container>
  );
}

export default App;
