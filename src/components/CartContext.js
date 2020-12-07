import React, { createContext, useEffect, useState } from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const LocalStorage = JSON.parse(localStorage.getItem('cart'));
    const [cart, setCart] = useState(LocalStorage);
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))// localStorage.setItem(key, value)
    }, [cart]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider };