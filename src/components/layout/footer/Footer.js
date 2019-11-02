import React, {useState, useEffect, useRef} from 'react'
import styles from './footer.module.css'

const Footer = ({home}) => {
  const [breakpoints, setBreakpoints] = useState([]);
  const footer = useRef(null);
  useEffect( () => {
    let children = Array.from(home.current.children);
    children.shift();
    let totalHeight = 0;
    
    let heightBreakpoints = children.map(childElement => {
      let height = Math.ceil(childElement.getBoundingClientRect().height)
      totalHeight += height;
      height = totalHeight - height;
      return height;
    })
    setBreakpoints(heightBreakpoints);
    //eslint-disable-next-line
  },[])

  const onClick = (e) => {
    e.preventDefault();
    let pageTop = Math.ceil(window.scrollY);
    for(let i = 0; i < breakpoints.length; i++){
      let point = breakpoints[i];
      if(pageTop < point){
        window.scroll(0, breakpoints[i]);
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
