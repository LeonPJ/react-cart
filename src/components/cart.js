import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div>
            <Button variant="outline-info" block>購物車({cart.length})</Button>
        </div >
    )
}

export default Cart;