import React, { useState, useContext } from 'react';
import { Button, Navbar, Nav, Form } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Menu = () => {
    const [carts, setCarts] = React.useState([{}]);
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand>
                <Link to='/'>線上商城</Link>
            </Navbar.Brand>
            <Nav className="mr-auto"></Nav>
            <Form inline>
                <Button variant="outline-primary">
                    <Link to='/cart'>購物車({carts.length})</Link>
                </Button>
            </Form>
        </Navbar>
    );
};


export default Menu;
