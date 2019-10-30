import React, {useRef, useEffect, useState} from 'react'
import styles from './about.module.css';

const About = () => {

  const [fade, setFade] = useState('false');
  const about = useRef(null);

  const handleScroll = (e) => {
    let boundingRect = about.current.getBoundingClientRect()
    if(boundingRect.top > boundingRect.height - (boundingRect.height / 2) || boundingRect.bottom < 0 + (boundingRect.height /2)){
      setFade(false);
    }else{
      setFade(true);
    }
  }

  useEffect( () => {
    window.addEventListener('scroll', handleScroll);
    //eslint-ignore-next-line
  },[]);
  const alex = require('../../images/alex.jpg');
  return (
    <div ref={about} id= 'about' className={`${styles.about} flex-col section ${fade ? 'section-fadeIn' : 'section-fadeOut'}`}>
        <h4 className={styles.header}>Alex Ha</h4>
        <br/>
        <img src={alex} alt="Alex Ha" className={styles.portrait}/>
        <br/>
        <p className={styles.description}>         
              I am a frontend Node.js engineer looking for a front-end position in web development. I graduated from San Francisco State University in May of 2019. I am currently learning REST API's with python as well as Express. Some of my skills involve, HTML, JavaScript, CSS, and React. I am looking for a great environment to polish my skills and grow my programming knowledge even further. 
      </p>
    </div>
  )
}

export default About
