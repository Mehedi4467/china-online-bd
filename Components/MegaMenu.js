import React, { useEffect, useState } from 'react';
import styles from '../styles/MegaMenu.module.css';
import axios from "axios";
const MegaMenu = ({ imageUrl }) => {
    const [menus,setMenus]=useState([]);
    useEffect(()=>{
        axios.get('./category.json').then((response) => {
            setMenus(response.data);
          });
    },[]);

    return (
        <div className={styles.MegaMenuContainer}>

            {
                menus.map((menu,index)=>{
                    return(
                        <div key={index} className={styles.menuItems}>
                    <div className={styles.menuItem}>
                        <div className={styles.menuIcon}>
                            <picture>
                                {/* <source srcSet="https://example.com/test" type="image/webp" /> */}
                                <img src={menu.icon} width={26} height={26} alt="category icon"></img>
                            </picture>
                         
                            <p>{menu.name}</p>
                        </div>
                        <i className="fa-solid fa-arrow-right-long"></i>
                    </div>
                  </div>
                    )
                })
            }
        </div>
    );
};

export default MegaMenu;