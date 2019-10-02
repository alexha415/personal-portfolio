import React from 'react'
import {Link} from 'react-router-dom';
import './header.css';
const Header = () => {
  return (
    <div className="row justify-content-end" style={{margin: '0px 0px 10vh 0px', padding: '0px', width: '100%'}}>
      <ul>
        <li style={{borderRight: '2px solid white', paddingRight: '10px'}}>
          <Link to="/" id='nav-link' className='text-light'>Home</Link>
        </li>
        <li style={{borderRight: '2px solid white', paddingRight: '10px'}}>
          <Link to="/projects" id='nav-link' className='text-light'>Projects</Link>
        </li>
        <li>
          <Link to="/resume" id='nav-link' className='text-light'>Resume</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
