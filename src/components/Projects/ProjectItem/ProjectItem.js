import React from 'react'
import styles from './ProjectItem.module.css';
import ProjectCarousel from '../ProjectCarousel/ProjectCarousel';
const ProjectItem = ({title, github, description, images}) => {

  const carousel = () => {
    if(images && images.length > 0) 
    return (
      <div className={`${styles.cardFooter}`}>
        <ProjectCarousel
        images={images}
        />
      </div>
    )
  }
  return (
    <div className={`${styles.projectItem} flex-row`}>
      <div className={`${styles.card} flex-col`}>
        <span className={`${styles.cardHeader}`}><a href={github} target="_blank" rel="noopener noreferrer">{title}</a></span>
        <p className={styles.cardText}>{description}</p>
        {carousel()}
      </div>
    </div>
  )
}

export default ProjectItem
