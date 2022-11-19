import React from 'react';
import styles from '../styles/Product.module.css';
const Product = ({product}) => {
    return (
        <div className={styles.productBody}>
            <div className={styles.productImage}>
                <a href='#'>
                    <picture>
                        <img title={product.name} className={styles.Image} width={225} height={230} src={product.img} alt={product.name}></img>
                    </picture>
                </a>
            </div>
            <div className={styles.productInfo}>
                <p title={product.name}>{product.name.slice(0,30)}</p>
                <div className={styles.productPrice}>
                    <p>{product.price} Taka</p>
                    <span>SOLD: {product.sold}</span>
                </div>
            </div>
        </div>
    );
};

export default Product;