import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { CartContext } from './CartContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Product = (props) => {
    const [cart, setCart] = useContext(CartContext);
    const handleAddCart = () => {
        const addCart = {
            title: props.title,
            price: props.price,
            key: props.idx
        }
        setCart(curr => [...curr, addCart]);
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} className="productCard">
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="productPrice">$ {props.price}</Card.Subtitle>
                    <Card.Text>{props.description}</Card.Text>
                    <Button variant="success" onClick={handleAddCart} block>加入購物車</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;