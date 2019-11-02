import React from 'react'
import styles from './ProjectItems.module.css';
import ProjectCarousel from '../Projects/ProjectCarousel/ProjectCarousel';
import projects from './projects_data';
const ProjectItems = () => {

  return (
    <div className={styles.projects}>
      
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><h4>Divvy</h4></span>
          <p className={styles.cardText}>Android app with a large focus on Object Oriented Design, in both UI and API. Users are able to coordinate to split costs of living expenses and services which allow sharing subscriptions.
          </p>
          <div className={`${styles.cardFooter}`}>
            <a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" rel="noopener noreferrer" className={`btn btn-block ${styles.githubBtn}`}>Github</a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><h4>Portfolio</h4></span>
          <p className={styles.cardText}>This website you are currently viewing. It is a frontend website built using React. I use this to display projects that I have completed or am currently working on. 
          </p>
          <div className={`${styles.cardFooter}`}>
            <a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" rel="noopener noreferrer" className={`btn btn-block ${styles.githubBtn}`}>Github</a>
          </div>
        </div>
      </div>
      <ProjectCarousel
      name={projects.gatortrader.name}
      description={projects.gatortrader.description}
      images={projects.gatortrader.images}
      github={projects.gatortrader.github}
      />
      <ProjectCarousel
      name={projects.edhblocks.name}
      description={projects.edhblocks.description}
      images={projects.edhblocks.images}
      github={projects.edhblocks.github}
      />
    </div>
  )
}

export default ProjectItems
