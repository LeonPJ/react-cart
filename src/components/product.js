import React, { useState, useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
/*const Product = () => {
    const [activeItem, setActiveItem] = React.useState('');
    const [products, setProducts] = React.useState([
        {title: 'Product-1', description: 'Product-1-description', price: 20, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'},
        {title: 'Product-2', description: 'Product-2-description', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'},
        {title: 'Product-3', description: 'Product-3-description', price: 100, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'},
        {title: 'Product-4', description: 'Product-4-description', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'},
        {title: 'Product-5', description: 'Product-5-description', price: 30, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'},
        {title: 'Product-6', description: 'Product-6-description', price: 10, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Z3zouAWLEDD-K-LaTxh1I5Va92XgWZsCBw&usqp=CAU'}
    ]);
    const Context = React.createContext({count: 1});
    console.log(Context);
    return (
        <div className="productList">
            {
                products.map(product => (
                    <Card style={{ width: '18rem' }} className="productCard">
                        <Card.Img variant="top" src={product.image} />
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Subtitle className="productPrice">$ {product.price}</Card.Subtitle>
                            <Card.Text>{product.description}</Card.Text>
                            <Button variant="success" size="lg" block>加入購物車</Button>
                        </Card.Body>
                    </Card>
                ))
            }
        </div> 
    );
};*/

const list = [
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
    },
];

const handleAddCart = (title, price) => console.log(title);

class Product extends React.Component {
    render() {
        return (
            <div className="productList">
                {
                    list.map(product => (
                        <div key={product.title}>
                            <Card style={{ width: '18rem' }} className="productCard">
                                <Card.Img variant="top" src={product.image} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Subtitle className="productPrice">$ {product.price}</Card.Subtitle>
                                    <Card.Text>{product.description}</Card.Text>
                                    <Button variant="success" onClick={() => handleAddCart(product.title, product.price)} block>加入購物車</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </div>
        )
    }
}


const List = () => {
    return (
        <div>
            Hi this is List stage.
        </div>
    )
}

export { Product, List };
//export default Product;