import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';
const Header = ({handleNavigation}) => {
  const onClick = (e) => {
    //e.preventDefault();
    //handleNavigation(e.target.name);
  }
  return (
      <ul className="nav-bar">
        <li className='nav-bar-item'>
          <a href="#home" className='header__link' name ='home' onClick={onClick}>Home</a>
        </li>
        <li className='nav-bar-item'>
          <a href="#projects" className='header__link' name='projects' onClick={onClick}>Projects</a>
        </li>
        <li className='nav-bar-item'>
          <a href=".resume"className='header__link' name='resume' onClick={onClick}>Resume</a>
        </li>
      </ul>
  )
}

export default Header
