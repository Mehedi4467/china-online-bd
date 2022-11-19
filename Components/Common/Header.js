import React from 'react';
import Image from 'next/image';
import Script from 'next/script'
import styles from '../../styles/Header.module.css';
import logo from '../../public/Images/Logo/logo.png';
import SearchProduct from './SearchProduct';
const Header = () => {
    return (
        <>
        <div className={`${styles.gridContainer} ${styles.sticky}`}>
            <Script src="https://kit.fontawesome.com/de3d1d0a30.js" crossorigin="anonymous"></Script>

            {/* logo area  */}
            <div className={styles.logo}>
                <Image src={logo} alt='logo'></Image>
            </div>


            {/* search area html  */}
            <div className={styles.headerSearchArea}>
                <div className={styles.inputArea}>
                <input  type="text" placeholder='Search by China online Bangladesh'></input>
                </div>
                <div className={styles.headerIcons}>
                    <div className={styles.icon1}><i className="fa-solid fa-camera"></i></div>
                    <div className={styles.icon}><i className="fa-solid fa-magnifying-glass"></i></div>
                </div>
            </div>

 
            {/* user area  */}
            <div className={styles.userArea}>
                <div className={styles.userAreaIcons}>
                    <div className={styles.cartDiv}>
                        <i className="fa-solid fa-cart-shopping"></i>
                            <span className={styles.cartSpan}>0</span>
                    </div>
                    <div className={styles.cartDiv}>
                        <i className="fa-regular fa-heart"></i>
                        <span className={styles.cartSpan}>0</span>
                    </div>
                    <div>
                        <i className="fa-regular fa-circle-user"></i>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.optionalSearBar}>
                <SearchProduct></SearchProduct>
        </div>
        
        </>
    );
};

export default Header;