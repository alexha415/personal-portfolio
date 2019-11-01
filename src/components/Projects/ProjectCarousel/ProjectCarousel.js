import React, {useState, useEffect, useRef} from 'react'
import styles from './ProjectCarousel.module.css';

const ProjectCarousel = () => {
  const carouselEl = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [items, setItems] = useState([]);
  
  const onClick = (direction) => {
    setCurrentIndex( (currentIndex + direction) % 3);
  }

  useEffect( () => {
    console.log(carouselEl.current);
    carouselEl.current.scroll((currentIndex * carouselEl.current.clientWidth), 0);
  },[currentIndex]);
  return (
    <div className={`${styles.carouselContainer}`}>
      <div ref={carouselEl} className={`${styles.carousel}`}>
        <div className={`${styles.carouselItem}`}></div>
        <div className={`${styles.carouselItem}`}></div>
        <div className={`${styles.carouselItem}`}></div>
      </div>
      <div className={`${styles.navigation}`}>
        <div className={`${styles.leftNav}`} onClick={() => {onClick(-1)}}>
        </div>
        <div className={`${styles.rightNav}`} onClick={() => {onClick(1)}}>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
