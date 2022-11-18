import React from 'react';
import Image from 'next/image';
import Script from 'next/script'
import styles from '../../styles/Header.module.css';
import logo from '../../public/Images/Logo/logo.png';
const Header = () => {
    return (
        <div className={`${styles.gridContainer} ${styles.sticky}`}>
            <Script src="https://kit.fontawesome.com/de3d1d0a30.js" crossorigin="anonymous"></Script>

            {/* logo area  */}
            <div>
                <Image src={logo} alt='logo'></Image>
            </div>


            {/* search area html  */}
            <div className={styles.headerSearchArea}>
                <div className={styles.inputArea}>
                <input  type="text" placeholder='Shop by China online'></input>
                </div>
                <div className={styles.headerIcons}>
                    <div className={styles.icon1}><i class="fa-solid fa-camera"></i></div>
                    <div className={styles.icon}><i class="fa-solid fa-magnifying-glass"></i></div>
                </div>
            </div>


            {/* user area  */}
            <div className={styles.userArea}>
                <div className={styles.userAreaIcons}>
                    <div className={styles.cartDiv}>
                        <i class="fa-solid fa-cart-shopping"></i>
                            <span className={styles.cartSpan}>0</span>
                    </div>
                    <div className={styles.cartDiv}>
                        <i class="fa-regular fa-heart"></i>
                        <span className={styles.cartSpan}>0</span>
                    </div>
                    <div>
                        <i class="fa-regular fa-circle-user"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;