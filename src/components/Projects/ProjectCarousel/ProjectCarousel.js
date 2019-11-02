import React, {useState, useEffect, useRef} from 'react'
import styles from './ProjectCarousel.module.css';
import {SocialIcon} from 'react-social-icons';
import iconStyles from '../../layout/SocialIcons/SocialIcon.module.css';
const ProjectCarousel = ({name, description, images, github}) => {
  const carouselEl = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const onClick = (direction) => {
    let newIndex = currentIndex + direction;
    if(newIndex < 0) {
      newIndex = 0;
    }
    if(newIndex > images.length){
      newIndex = images.length;
    }
    setCurrentIndex(newIndex);
  }

  useEffect( () => {
    carouselEl.current.scroll((currentIndex * carouselEl.current.clientWidth), 0);
  },[currentIndex]);


  return (
    <div className={`${styles.carouselContainer}`}>
      <div ref={carouselEl} className={`${styles.carousel} flex-row`}>
        <div className={`${styles.carouselItem} ${styles.landing} flex-col`}>
          <h4>{name}</h4>
          <p className={styles.description}>{description}</p>
          <SocialIcon className={iconStyles.mediaIcon} url={github}></SocialIcon>
        </div>
        {images.map(image => {
            return (
              <div key={image} className={`${styles.carouselItem} flex-col`}>
                <img src={image} alt=""/>
              </div>
            )
          })
        }
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
