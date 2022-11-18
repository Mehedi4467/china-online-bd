import React from 'react';
import styles from '../styles/Products.module.css';
import Product from './Product';
const Products = () => {
    return (
        <div className={styles.productBody}>
            <div className={styles.productContainer}>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
};

export default Products;