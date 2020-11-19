import React, { useState, Component, useContext } from 'react';
import { Button, Card, Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { CartContext } from './CartContext';

const pageProduct = 'product';
const pageCart = 'list';

const Product = () => {
    const [cart, setCart] = useState([]);
    const [page, setPage] = useState(pageProduct);
    const [products] = useState([
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
    ]);

    const handleAddCart = (product) => {
        setCart([...cart, { ...product }]);
    };

    const handleRemoveCart = (productRemove) => {
        setCart(
            cart.filter((product) => product !== productRemove)
        );
    };

    const navigateTo = (nextPage) => {
        setPage(nextPage);
    };

    const renderProduct = () => (
        <>
            <Button variant="outline-info" block onClick={() => navigateTo(pageCart)}>
                購物車({cart.length})
            </Button>
            <div className="productList">
                {products.map((product, idx) => (
                    <Card style={{ width: '18rem' }} className="productCard" key={idx}>
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Subtitle className="productPrice">$ {product.price}</Card.Subtitle>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="success" onClick={() => handleAddCart(product)} block>加入購物車</Button>
                        </Card.Body>
                    </Card>
                ))}
            </div>
        </>
    )

    const renderCart = () => (
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
    );

    return (
        <>
            {page === pageProduct && renderProduct()}
            {page === pageCart && renderCart()}
        </>
    );
};

export default Product;