import React, { useState, useContext } from 'react';
import { 
    Button,
    Navbar,
    Nav,
    Form
   } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from './product';


const Menu = () => {
    const [carts, setCarts] = React.useState([{}]);
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">線上商城</Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
                <Button variant="outline-primary">購物車({carts.length})</Button>
            </Form>
        </Navbar>
    );
};


export default Menu;
