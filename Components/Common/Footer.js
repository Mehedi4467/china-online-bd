import Image from 'next/image';
import React from 'react';
import styles from '../../styles/Footer.module.css';
import logo from '../../public/Images/Logo/footer-logo.webp';
import appLogo from '../../public/Images/Logo/app-logo.webp';
import facebook from '../../public/Images/Logo/facebook.webp';
import youtube from '../../public/Images/Logo/youtube.webp';
import paymentLogo from '../../public/Images/others/payment.webp';
import copyRight from '../../public/Images/others/copyRight.webp';
const Footer = () => {
    return (
        <div className={styles.footerContainer}>
          <div>
            <Image src={logo} width={215} alt="footer logo"></Image>

            <div>
                <div className={styles.logoInfo}>
                    <h5><i className="fa-solid fa-location-dot"></i> HEAD OFFICE :</h5>
                    <h6>House - 29, Road - 11, Sector - 10, Uttara, Dhaka - 1230</h6>
                </div>
                <div className={styles.logoInfo}>
                    <h5><i className="fa-solid fa-location-dot"></i> REGISTERED OFFICE:</h5>
                    <h6>664, Prembagan, Gawair, Dakshinkhan, Dhaka- 1229</h6>
                </div>
                <div className={styles.logoInfo}>
                    <h5><i className="fa-regular fa-envelope"></i> EMAIL:</h5>
                    <h6>info.chinaonlinebd@gmail.com</h6>
                </div>
                <div className={styles.logoInfo}>
                    <h5><i className="fa-solid fa-phone"></i> PHONE:</h5>
                    <h6>+8801811677154</h6>
                </div>
                
            </div>
          </div>
          <div>
            <p>CUSTOMER</p>
            <a href='#'>Account</a>
            <a href='#'>Cart</a>
            <a href='#'>Wishlist</a>
            <a href='#'>Support</a>
          </div>
          <div>
            <p>INFORMATION</p>
            <a href='#'>About us</a>
            <a href='#'>Contact Us</a>
            <a href='#'>Privacy Policy</a>
            <a href='#'>Returns & Refund</a>
            <a href='#'>Terms & Conditions</a>
            <a href='#'>Why do you believe us?</a>
            <a href='#'>Certificates</a>
            <a href='#'>Prohibited items</a>
          </div>
          <div>
            <p>MOBILE APPS</p>
            <Image src={appLogo} alt="app logo"></Image>
            <p>SOCIAL LINKS</p>
            <div className={styles.socialIcon}>
                <Image src={facebook} alt="facebook icon"></Image>
                <Image src={youtube} alt="youtube icon"></Image>
            </div>
          </div>

        <div className={styles.footerBottom}>
            <div className={styles.paymentLogo}>
                <Image className={styles.pymanetImage} src={paymentLogo} alt="payment logo"></Image>
            </div>
            <div className={styles.copyRight}>
                <Image src={copyRight} alt="copyRight"></Image>
                <h5>CHINA ONLINE BD.2022 - Present All rights reserved</h5>
            </div>
        </div>
        </div>
    );
};

export default Footer;
