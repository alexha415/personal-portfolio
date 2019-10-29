import React, {Fragment, useEffect, useState, useRef} from 'react'
import Header from '../layout/Header/Header';
import ProjectItems from '../Projects/ProjectItems';
const Projects = () => {  
  
  const [fade, setFade] = useState('false');
  const projects = useRef(null);

  const handleScroll = (e) => {
  let boundingRect = projects.current.getBoundingClientRect()
  
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

  return (
    <div ref={projects} id='projects' className={`projects row ${fade ? 'section-fadeIn' : 'section-fadeOut'}`}>
      <div className="col text-center">
        <ProjectItems/>
      </div>
    </div>
  )
}

export default Projects
