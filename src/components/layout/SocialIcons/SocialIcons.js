import React from 'react'
import {SocialIcon} from 'react-social-icons';
import './SocialIcon.css';
const SocialIcons = () => {
  return (
    <ul className = 'social-icons'>
        <li>
        <SocialIcon className='media-icon' url='https://www.facebook.com/alex.g.ha'></SocialIcon>
        </li>
        <li>
        <SocialIcon className='media-icon' url='https://github.com/almondjoys'></SocialIcon>
        </li>
        <li>
        <SocialIcon className='media-icon' url='https://www.linkedin.com/in/alexha415/'></SocialIcon>
        </li>
    </ul>
  )
}

export default SocialIcons
