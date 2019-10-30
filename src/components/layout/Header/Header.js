import React from 'react'
import './header.css';
import SocialIcons from '../SocialIcons/SocialIcons';
import Navbar from './Navbar';

const Header = ({handleNavigation}) => {
  return (
    <div className="flex-row header">
      <span className='header-label'>About</span>
      <Navbar/>
      <SocialIcons/>
    </div>
  )
}

export default Header
