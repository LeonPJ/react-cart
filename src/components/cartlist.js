import React, { useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

/*const CartList = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const handleRemoveCart = (productRemove) => {
        setCart(
            cart.filter((product) => product !== productRemove)
        );
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>名稱</th>
                        <th>單價</th>
                        <th></th>
                    </tr>
                </thead>
                {cart.map((product, idx) => (
                    <tbody key={idx}>

                        <tr>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td><Button variant="outline-danger" onClick={() => handleRemoveCart(product)} block>刪除</Button></td>
                        </tr>
                    </tbody>
                ))}
                <td>總金額:
                {
                        cart.reduce((sum, cart) => {
                            return sum + parseInt(cart.price)
                        }, 0)
                    }
                </td>
                <td></td>
                <td><Button variant="primary" disabled={!cart.length} block>結帳</Button></td>
            </Table>
        </div>
    );
};*/

const CartList = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const handleRemoveCart = (productRemove) => {
        setCart(
            cart.filter((product) => product !== productRemove)
        );
    }

    return (
        <div className="cartList">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>商品名稱</th>
                        <th>價錢</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((product, idx) => (
                        <tr key={idx}>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>
                                <Button variant="outline-danger" onClick={() => handleRemoveCart(product)} block>
                                    刪除
                                </Button>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td colSpan='2'>
                            <div className="totalPrice">
                                消費金額: {cart.reduce((sum, cart) => {
                                return sum + parseInt(cart.price)
                            }, 0)}
                            </div>
                        </td>
                        <td>
                            <Button variant="primary" disabled={!cart.length} block>結帳</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default CartList;
