import React from 'react';
import Product from './product';
import '../index.css';


const ProductList = () => {

    const productData = [
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
    ]

    return (
        <div className="productList">
            {
                productData.map((item, idx) => (
                    <Product
                        title={item.title}
                        description={item.description}
                        price={item.price}
                        image={item.image}
                        key={idx}
                    />
                ))
            }
        </div>
    )
}

export default ProductList;
