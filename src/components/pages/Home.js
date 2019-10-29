import React, {useRef, useEffect, useState} from 'react'


const Home = () => {

  const [fade, setFade] = useState('false');
  const home = useRef(null);

  const handleScroll = (e) => {
    let boundingRect = home.current.getBoundingClientRect()
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
    <div ref={home} id= 'home' className={`home row mr-0 ${fade ? 'section-fadeIn' : 'section-fadeOut'}`}>
      <div className="col text-center">
        <h4 className="name-header">Alex Ha</h4>
        <br/>
        <img src={alex} alt="Alex Ha" className="portrait"/>
        <br/>
        <p className="description">         
              I am a frontend Node.js engineer looking for a front-end position in web development. I graduated from San Francisco State University in May of 2019. I am currently learning REST API's with python as well as Express. Some of my skills involve, HTML, JavaScript, CSS, and React. I am looking for a great environment to polish my skills and grow my programming knowledge even further. 
      </p>
      </div>
    </div>
  )
}

export default Home
