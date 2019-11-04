import React, {useState, useEffect, useRef} from 'react'
import styles from './footer.module.css'

const Footer = ({home}) => {
  const [breakpoints, setBreakpoints] = useState([]);
  const footer = useRef(null);
  useEffect( () => {
    let children = Array.from(home.current.children);
    children.shift();
    children.pop();
    let totalHeight = 0;
    let heightBreakpoints = children.map(childElement => {
      let height = Math.ceil(childElement.getBoundingClientRect().height)
      totalHeight += (height);
      return totalHeight;
    })
    setBreakpoints([0, 797, 2800]);
    //eslint-disable-next-line
  },[])
  // [0, 797, 2800]
  const onClick = (e) => {
    e.preventDefault();
    let bottom = (window.scrollY + window.innerHeight);
    for(let i = 0; i < breakpoints.length; i++){
      let point = breakpoints[i];
      if(bottom <= point){
        window.scroll(0, point);
        break;
      }
    }

  }
  return (
    <div ref={footer} className={styles.footer}>
      <div className={styles.navDown} onClick={onClick}/>
    </div>
  )
}

export default Footer
