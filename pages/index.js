import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import logo from '../public/Images/Logo/logo.png';
import Footer from '../Components/Common/Footer';
import MegaMenu from '../Components/MegaMenu';
import Products from '../Components/Products';
import Pagination from '../Components/Common/Pagination';
import MobileMenu from '../Components/Common/MobileMenu';

export default function Home() {
  const [taggle,setTaggle] =useState(false);
  console.log(taggle);
  return (
   <div className={styles.gridContainer}>
      <div className={styles.item1}>
        <MegaMenu></MegaMenu>
      </div>

      <div className={styles.item2}>
        <div className={styles.mainBody}>


            <div className={styles.mainTop}>
                <div>
                  <h2>Abb-B2b-285500972361804</h2>
                  <h5>PRODUCTS FROM <span>201</span> ABB-B2B-285500972361804</h5>
                </div>
                <div className={styles.productOptions}>
                  <div className={styles.selectOptions}>
                    <select>
                          <option value="Default">Default</option>
                          <option value="Price Low To High">Price Low To High</option>
                          <option value="Price High To Low">Price High To Low</option>
                          <option value="Offer">Offer</option>
                          <option value="Seller Rating">Seller Rating</option>
                          <option value="Most Sold">Most Sold</option>
                    </select>
                  </div>
                  <div>
                  <input type="text" placeholder='Min Price'></input>
                  </div>
                  <div>
                    <input type="text" placeholder='Max Price'></input>
                  </div>
                  <div>
                    <button>Filter</button>
                  </div>
                </div>
            </div>


            <div className={styles.mainProductBody}>
              <Products></Products>
              <Pagination></Pagination>
            </div>

            <div>
              <Footer></Footer>
            </div>
        </div>
      </div>
      <MobileMenu setTaggle={setTaggle} taggle={taggle}></MobileMenu>
   </div>
  )
}
