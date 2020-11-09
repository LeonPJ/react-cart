import { 
    Button,
    Navbar,
    Nav,
    Form
   } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    return (
        <>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">線上商城</Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                    <Button variant="outline-primary">購物車</Button>
                </Form>
            </Navbar>
        </>

    );
};

export default Menu;
