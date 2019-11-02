import React, {useEffect, useState, useRef} from 'react'
import ProjectItems from '../Projects/ProjectItems';
import styles from './projects.module.css';
const Projects = () => {  
  
  const [fade, setFade] = useState('false');
  const projects = useRef(null);

  const handleScroll = (e) => {
  let boundingRect = projects.current.getBoundingClientRect()
  
  if(boundingRect.top > boundingRect.height - (boundingRect.height / 2) || boundingRect.bottom < 0 + (boundingRect.height / 5)){
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
    <div ref={projects} id={`projects`} className={`section ${styles.projects}`}>
      <h4 className = {styles.header}>Projects</h4>
      <div className={`${fade ? 'section-fadeIn' : 'section-fadeOut'}`}>
        <ProjectItems/>
      </div>
    </div>
  )
}

export default Projects
