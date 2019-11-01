import React from 'react'
import MinNavbar from './MinNavbar';

import styles from './header.module.css';
const Navbar = () => {
  
  const onClick = () => {
    console.log('test');
  }
  return (
    <span className={styles.navbar}>
      <MinNavbar handleClick = {onClick}/>
      <ul className={`${styles.list} ${styles.largeNavbar}`}>
        <li className={styles.item}>
          <a href="#about" className={styles.link} name ='about'>About</a>
        </li>
        <li className={styles.item}>
          <a href="#projects" className={styles.link} name='projects'>Projects</a>
        </li>
        <li className={styles.item}>
          <a href="#resume"className={styles.link} name='resume'>Resume</a>
        </li>
      </ul>
    </span>
  )
}

export default Navbar
