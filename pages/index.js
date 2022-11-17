import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import logo from '../public/Images/Logo/logo.png';

export default function Home() {
  return (
   <div className={styles.gridContainer}>
      <div className={styles.item1}>menu</div>
      <div className={styles.item2}>top Body</div>
      <div className={styles.item3}>main Body</div>
   </div>
  )
}
