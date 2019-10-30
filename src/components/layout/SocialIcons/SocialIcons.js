import React from 'react'
import {SocialIcon} from 'react-social-icons';
import styles from './SocialIcon.module.css';
const SocialIcons = () => {
  return (
    <ul className = {styles.socialIcons}>
        <li className={styles.listItem}>
        <SocialIcon className={styles.mediaIcon} url='https://www.facebook.com/alex.g.ha'></SocialIcon>
        </li>
        <li className={styles.listItem}>
        <SocialIcon className={styles.mediaIcon} url='https://github.com/almondjoys'></SocialIcon>
        </li>
        <li className={styles.listItem}>
        <SocialIcon className={styles.mediaIcon} url='https://www.linkedin.com/in/alexha415/'></SocialIcon>
        </li>
    </ul>
  )
}

export default SocialIcons
