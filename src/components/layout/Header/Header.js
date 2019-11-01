import React from 'react'
import styles from './header.module.css';
import SocialIcons from '../SocialIcons/SocialIcons';
import Navbar from './Navbar';

const Header = ({handleNavigation}) => {
  return (
    <div className={`flex-row ${styles.header}`}>
      <span className={styles.label}>About</span>
      <Navbar/>
      <SocialIcons/>
    </div>
  )
}

export default Header
