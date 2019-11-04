import React from 'react'
import styles from './ProjectItems.module.css';
import ProjectCarousel from '../Projects/ProjectCarousel/ProjectCarousel';
import projects from './projects_data';
const ProjectItems = () => {

  return (
    <div className={`${styles.projects} flex-col`}>
        <div className={`${styles.projectItem} flex-row`}>
          <div className={`${styles.cardRight} flex-col`}>
            <span className={`${styles.cardHeader}`}><a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" rel="noopener noreferrer">Divvy</a></span>
            <p className={styles.cardText}>Android app with a large focus on Object Oriented Design, in both UI and API. Users are able to coordinate to split costs of living expenses and services which allow sharing subscriptions.
            </p>
          </div>
        </div>
      
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><a href="https://github.com/almondjoys/personal-portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a></span>
          <p className={styles.cardText}>This website you are currently viewing. It is a frontend website built using React. I use this to display projects that I have completed or am currently working on. 
          </p>
        </div>
      </div>
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" rel="noopener noreferrer">GatorTrader</a></span>
          <p className={styles.cardText}>{projects.gatortrader.description}</p>
          <div className={`${styles.cardFooter}`}>
            <ProjectCarousel
            images={projects.gatortrader.images}
            github={projects.gatortrader.github}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><a href="https://github.com/almondjoys/edhblocks" target="_blank" rel="noopener noreferrer">EDHBlocks</a></span>
          <p className={styles.cardText}>{projects.edhblocks.description}</p>
          <div className={`${styles.cardFooter}`}>
            <ProjectCarousel
            images={projects.edhblocks.images}
            github={projects.edhblocks.github}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItems
