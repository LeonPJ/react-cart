import React, { useContext } from 'react';
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand>
                    <Link to='/'>線上商城</Link>
                </Navbar.Brand>
                <Nav className="mr-auto"></Nav>
                <Form inline>
                    <Link to='/cart'>
                        <Button variant="outline-primary">
                            購物車({cart.length})
                        </Button>
                    </Link>
                </Form>
            </Navbar>
        </div>
    );
};

export default Menu;
