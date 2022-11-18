import React from 'react';
import styles from '../../styles/Pagination.module.css';
const Pagination = () => {
    return (
        <div className={styles.paginationBody}>
           <div className={styles.paginationButton}>
                <button><i class="fa-solid fa-chevron-left"></i></button>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <button><i class="fa-solid fa-chevron-right"></i></button>
           </div>
        </div>
    );
};

export default Pagination;