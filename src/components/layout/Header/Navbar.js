import React from 'react'

const Navbar = () => {
  return (
      <ul className="nav-bar">
        <li className='nav-bar-item'>
          <a href="#about" className='navbar__link' name ='about'>About</a>
        </li>
        <li className='nav-bar-item'>
          <a href="#projects" className='navbar__link' name='projects'>Projects</a>
        </li>
        <li className='nav-bar-item'>
          <a href="#resume"className='navbar__link' name='resume'>Resume</a>
        </li>
      </ul>
  )
}

export default Navbar
