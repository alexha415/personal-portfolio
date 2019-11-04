import React, {useState, useEffect, useRef} from 'react'
import styles from './ProjectCarousel.module.css';

const ProjectCarousel = ({images}) => {
  const carouselEl = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const onClick = (direction) => {
    let newIndex = currentIndex + direction;
    if(newIndex < 0) {
      newIndex = 0;
    }
    if(newIndex > images.length - 1){
      newIndex = images.length - 1;
    }
    setCurrentIndex(newIndex);
  }

  useEffect( () => {
    carouselEl.current.scroll((currentIndex * carouselEl.current.clientWidth), 0);
  },[currentIndex]);


  return (
    <div className={`${styles.carouselContainer} flex-col`}>
      <div ref={carouselEl} className={`${styles.carousel} flex-row`}>
        {images.map(image => {
            return (
              <div key={image} className={`${styles.carouselItem}`}>
                <img src={image} alt=""/>
              </div>
            )
          })
        }
      </div>
      <div className={`${styles.legend} flex-row`}>
        {images.map((image, index) => {
          return (
            <span key={image} className={`${index == currentIndex ? styles.activeSlide : ''} ${styles.legendButton}`} onClick={ () => {
              setCurrentIndex(index);
            }}></span>
          )
        })}
      </div>
      <div className={`${styles.navigation}`}>
        <div className={`${styles.nav} ${styles.leftNav}`} onClick={() => {onClick(-1)}}>
        </div>
        <div className={`${styles.nav} ${styles.rightNav}`} onClick={() => {onClick(1)}}>
        </div>
      </div>
    </div>
  )
}

export default ProjectCarousel
