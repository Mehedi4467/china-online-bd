import React from 'react';
import styles from '../styles/Product.module.css';
import productImage from '../public/Images/menuIcons/17885021853_1375463041.310x310.jpg';
import Image from 'next/image';
const Product = () => {
    return (
        <div className={styles.productBody}>
            <div className={styles.productImage}>
                <a href='#'>
                    <Image className={styles.Image} width={225} height={230} src={productImage} alt="product Image"></Image>
                </a>
            </div>
            <div className={styles.productInfo}>
                <p>Crose border forgain trde 200</p>
                <div className={styles.productPrice}>
                    <p>864 Taka</p>
                    <span>SOLD: 0</span>
                </div>
            </div>
        </div>
    );
};

export default Product;