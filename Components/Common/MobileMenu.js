import React from 'react';
import styles from '../../styles/MobileMenu.module.css';
import mobileLogo from '../../public/Images/Logo/mobileMenuLogo.webp';
import Image from 'next/image';
const MobileMenu = () => {
    return (
        <div className={styles.mobileMenuMain}>
           <div className={styles.mobileMenuItem}>
                <i class="fa-solid fa-bars"></i>
                <p>Category</p>
           </div>
           <div className={styles.mobileMenuItem}>
                <i class="fa-regular fa-circle-user"></i>
                <p>Account</p>
           </div>
           <div className={styles.mobileLogo}>
                <Image height={45} width={45} src={mobileLogo} alt="Mobile Logo"></Image>
           </div>
           <div className={styles.mobileMenuItem}>
                <i class="fa-solid fa-phone"></i>
                <p>Call</p>
           </div>
           <div className={styles.mobileMenuItem}>
                <i class="fa-regular fa-comment-dots"></i>
                <p>Chat</p>
           </div>
        </div>
    );
};

export default MobileMenu;