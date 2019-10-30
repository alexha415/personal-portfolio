import React, {useState, useEffect, useRef} from 'react'

const Footer = ({app}) => {
  const [breakpoints, setBreakpoints] = useState([]);
  const footer = useRef(null);
  useEffect( () => {
    let children = Array.from(app.current.children);
    children.shift();
    let totalHeight = 0;
    
    let heightBreakpoints = children.map(childElement => {
      let height = Math.ceil(childElement.getBoundingClientRect().height)
      totalHeight += height;
      height = totalHeight - height;
      console.log(totalHeight);
      return height;
    })
    console.log(heightBreakpoints)
    setBreakpoints(heightBreakpoints);
  },[])

  const onClick = (e) => {
    console.log(breakpoints);
    console.log(window.scrollY);
    e.preventDefault();
    let pageTop = Math.ceil(window.scrollY);
    console.log(pageTop);
    for(let i = 0; i < breakpoints.length; i++){
      let point = breakpoints[i];
      if(pageTop < point){
        window.scroll(0, breakpoints[i]);
        break;
      }
    }

  }
  return (
    <div ref={footer} className="footer">
      <a href = {``} className="nav-down" onClick={onClick}></a>
    </div>
  )
}

export default Footer
