import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <div className="row justify-content-end" style={{margin: '2em 0px 5em 0px', padding: '0px', width: '100%'}}>
      <ul>
        <li style={{borderRight: '2px solid white', padding: '2vh 2vw 0 2vw'}}>
          <Link to="/" id='nav-link' className='text-light'>Home</Link>
        </li>
        <li style={{borderRight: '2px solid white', padding: '2vh 2vw 0 2vw'}}>
          <Link to="/projects" id='nav-link' className='text-light'>Projects</Link>
        </li>
        <li style={{padding: '2vh 2vw 0 2vw'}}>
          <Link to="/resume" id='nav-link' className='text-light'>Resume</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
