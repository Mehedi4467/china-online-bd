import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import logo from '../public/Images/Logo/logo.png';

export default function Home() {
  return (
   <div className={styles.gridContainer}>
      <div className={styles.item1}>menu</div>
      <div className={styles.item2}>
        <div className={styles.mainBody}>
            <div className={styles.mainTop}>
                <div>
                  <h2>Abb-B2b-285500972361804</h2>
                  <h5>PRODUCTS FROM <span>201</span> ABB-B2B-285500972361804</h5>
                </div>
                <div className={styles.productOptions}>
                  <div>
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
            <div>main product</div>
            <div>footer</div>
        </div>
      </div>
   </div>
  )
}
