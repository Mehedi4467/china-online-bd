import React, { useEffect, useState } from 'react';
import styles from '../styles/Products.module.css';
import Product from './Product';
import axios from "axios";
const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get('/products.json').then((response) => {
            setProducts(response.data);
          });
    },[])

console.log(products)
    return (
        <div className={styles.productBody}>
            <div className={styles.productContainer}>
                {
                    products.map((product,index)=> <Product key={index} product={product}></Product>)
                }
              
            </div>
        </div>
    );
};

export default Products;