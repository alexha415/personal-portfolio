import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
      <ul>
        <li>
          <Link to='/home' className='header__link'>Home</Link>
        </li>
        <li>
          <Link to='/projects' className='header__link'>Projects</Link>
        </li>
        <li>
          <Link to='/resume' className='header__link'>Resume</Link>
        </li>
      </ul>
  )
}

export default Header
