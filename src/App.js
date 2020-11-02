import logo from './logo.svg';
import './App.css';
//import { Button } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
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
function App() {
  return (
    <Container fluid="true">
      <AlertDismissible/>
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Nav className="mr-auto"></Nav>
          <Form inline>
            <Button variant="outline-primary">購物車</Button>
          </Form>
        </Navbar>
      </>
    </Container>
  );
}

function AlertDismissible() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>How's it going?!</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me y'all!
          </Button>
        </div>
      </Alert>
    </>
  );
}

export default App;
