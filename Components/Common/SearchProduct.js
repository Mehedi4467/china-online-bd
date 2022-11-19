import React from 'react';
import styles from '../../styles/SearchProduct.module.css';
const SearchProduct = () => {
    return (
         
         <div className={styles.OptionSearchArea}>
         <div className={styles.inputArea}>
         <input  type="text" placeholder='Search by China online Bangladesh'></input>
         </div>
         <div className={styles.headerIcons}>
             <div className={styles.icon1}><i className="fa-solid fa-camera"></i></div>
             <div className={styles.icon}><i className="fa-solid fa-magnifying-glass"></i></div>
         </div>
     </div>
    );
};

export default SearchProduct;