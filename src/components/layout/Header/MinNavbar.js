import React, {useState, Fragment} from 'react'
import styles from './header.module.css';

const MinNavbar = () => {

  const [active, setActive] = useState(false);

  const onClick = (e) => {
    e.preventDefault();
    setActive(!active);
    console.log(active);
  }

  const navLinks = () => {
    if(active) return (
    <ul className={`${styles.list} ${styles.minList}`}>
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
    )
    
  }
  
  return (
    <Fragment>
      <a href="#" onClick={onClick} className={styles.smallNavbar}>
        <i className='fa fa-bars fa-2x' onClick={onClick}></i>
      </a>
      {navLinks()}
    </Fragment>
  )
}

export default MinNavbar
