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
            image: 'https://www.starbucks.com.tw/common/objects/images/entertain/20200630123127827.jpg'
        },
        {
            title: 'Product-3',
            description: 'Product-3-description',
            price: 200,
            image: 'https://panmarket.asia/wp-content/uploads/2019/10/20170415171905911_1000-405x405.jpg'
        },
        {
            title: 'Product-4',
            description: 'Product-4-description',
            price: 150,
            image: 'https://img.ruten.com.tw/s1/3/41/f1/21944653793777_843.jpg'
        },
        {
            title: 'Product-5',
            description: 'Product-5-description',
            price: 50,
            image: 'https://www.starbucks.com.tw/common/objects/images/entertain/2019120217532703.jpg'
        },
        {
            title: 'Product-6',
            description: 'Product-6-description',
            price: 150,
            image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/%E9%BB%91%E8%B2%93%E5%90%B8%E8%A1%80%E9%AC%BC%E9%A6%AC%E5%85%8B%E6%9D%AF-%E5%94%AE%E5%83%B9-520-%E5%AE%B9%E9%87%8F-10oz-1-1601450357.jpg?crop=1xw:1xh;center,top&resize=480:*'
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
