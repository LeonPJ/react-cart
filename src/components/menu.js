import React, { useState, Component } from 'react';
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        console.log("in add to cart!");
        setCart([...cart, product]);
    };

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <Link to='/'>線上商城</Link>
            </Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
                <Button variant="outline-primary">
                    <Link to='/cart'>購物車({cart.length})</Link>
                </Button>
            </Form>
        </Navbar>
    );
};

export default Menu;
