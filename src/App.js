import logo from './logo.svg';
import './App.css';
//import { Button } from 'semantic-ui-react';
//import 'semantic-ui-css/semantic.min.css';
import { 
  Button,
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Form,
  FormControl
 } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Container fluid="true">
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

export default App;
