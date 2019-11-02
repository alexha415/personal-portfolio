import React from 'react'
import styles from './header.module.css';
import SocialIcons from '../SocialIcons/SocialIcons';
import Navbar from './Navbar';

const Header = ({handleNavigation}) => {
  return (
    <div className={`flex-row ${styles.header}`}>
      <Navbar/>
      <SocialIcons/>
    </div>
  )
}

export default Header
