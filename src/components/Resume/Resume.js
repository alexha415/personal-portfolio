import React, {useState, useRef, useEffect} from 'react'
import styles from './resume.module.css';
const Resume = () => {
  const [fade, setFade] = useState('false');
const resume = useRef(null);

const handleScroll = (e) => {
  let boundingRect = resume.current.getBoundingClientRect()
  if(boundingRect.top > boundingRect.height - (boundingRect.height / 1.4)){
    setFade(false);
  }else{
    setFade(true);
  }
}
useEffect( () => {
  window.addEventListener('scroll', handleScroll);
  //eslint-ignore-next-line
},[]);
  return (
    <div ref={resume} id = "resume" className={`${resume} section ${fade ? 'section-fadeIn' : 'section-fadeOut'}`}>
      <h4 className={styles.header}>Education</h4>
      <ul className = {styles.list}>
        <li><span>San Francisco State University 2016 - 2019</span></li>
        <li><span>Bachelor of Computer Science</span></li>
      </ul>
      <h4 className={styles.header}>Languages</h4>
      <ul className = {styles.list}>
        <li><span>JavaScript</span></li>
        <li><span>Java</span></li>
        <li><span>Python</span></li>
        <li><span>CSS</span></li>
        <li><span>HTML</span></li>
        <li><span>SQL</span></li>
      </ul>
      <h4 className={styles.header}>Technologies</h4>
      <ul className = {styles.list}>
        <li><span>Node.js</span></li>
        <li><span>React.js</span></li>
        <li><span>Redux</span></li>
        <li><span>Sass</span></li>
        <li><span>Express</span></li>
      </ul>
      <h4 className={styles.header}>Skills</h4>
      <ul className = {styles.list}>
        <li><span>Data Structures</span></li>
        <li><span>Algorithms</span></li>
        <li><span>SCRUM</span></li>
        <li><span>RESTful API</span></li>
        <li><span>Object Oriented Design Patterns</span></li>
        <li><span>Teamwork</span></li>
        <li><span>Collaboration</span></li>
        <li><span>Communication</span></li>
      </ul>
    </div>
  )
}

export default Resume
