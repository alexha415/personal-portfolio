import React, {useState, useRef, useEffect} from 'react'
import styles from './resume.module.css';
import Section from './Section/Section';

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

const languages = [
  'JavaScript',
  'CSS',
  'HTML',
  'Java',
  'Python',
  'SQL'
]
const education = [
  'San Francisco State University 2016 - 2019', 
  'Bachelor of Computer Science'
];

const technologies = [
  'Node.js',
  'React.js',
  'Redux',
  'Sass',
  'Express'
]
const skills = [
  'Data Structures',
  'Algorithms',
  'SCRUM',
  'RESTful API',
  'Object Oriented Design Patterns',
  'Teamwork',
  'Collaboration',
  'Communication'
]
  return (
    <div ref={resume} id = "resume" className={`${styles.resume} section ${fade ? 'section-fadeIn' : 'section-fadeOut'}`}>
      <Section title={'education'} items={education}/>
      <Section title={'languages'} items={languages}/>
      <Section  title={'technologies'} items={technologies}/>
      <Section  title={'skills'} items={skills}/>
    </div>
  )
}

export default Resume
