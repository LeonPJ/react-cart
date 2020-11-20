import React from 'react'
import { Route } from 'react-router-dom';
import ProductList from './productlist';
import CartList from './cartlist';

const Section = () => {
    return (
        <section>
            <Route path='/' component={ProductList} exact />
            <Route path='/cart' component={CartList} exact />
        </section>
    );
};

export default Section;