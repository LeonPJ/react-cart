import React, { useState, Component, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { CartContext } from './CartContext';


const products = [
    {
        title: 'Product-1',
        description: 'Product-1-description',
        price: 20,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'
    },
    {
        title: 'Product-2',
        description: 'Product-2-description',
        price: 10,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'
    },
    {
        title: 'Product-3',
        description: 'Product-3-description',
        price: 200,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'
    },
    {
        title: 'Product-4',
        description: 'Product-4-description',
        price: 150,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'
    },
    {
        title: 'Product-5',
        description: 'Product-5-description',
        price: 50,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'
    },
    {
        title: 'Product-6',
        description: 'Product-6-description',
        price: 150,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'
    }
];

const Product = () => {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <>
            <Button variant="outline-primary" className="cart">
                <Link to='/cart'>購物車({cart.length})</Link>
            </Button>
            <div className="productList">
                {
                    products.map(product => (
                        <div key={product.title}>
                            <Card style={{ width: '18rem' }} className="productCard">
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Subtitle className="productPrice">$ {product.price}</Card.Subtitle>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Button variant="success" onClick={() => addToCart(product)} block>加入購物車</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Product;