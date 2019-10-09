import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
      <ul className="nav-bar">
        <li className='nav-bar-item'>
          <Link to='/home' className='header__link'>Home</Link>
        </li>
        <li className='nav-bar-item'>
          <Link to='/projects' className='header__link'>Projects</Link>
        </li>
        <li className='nav-bar-item'>
          <Link to='/resume' className='header__link'>Resume</Link>
        </li>
      </ul>
  )
}

export default Header
