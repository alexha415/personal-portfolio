import React from 'react'
import styles from './ProjectItems.module.css';

const ProjectItems = () => {

  return (
    <div className={styles.projects}>
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardLeft}`}>
          <img src={require('../../images/alex.jpg')} alt=""/>
        </div>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><h4>Divvy</h4></span>
          <p className={styles.cardText}>Android app with a large focus on Object Oriented Design, in both UI and API. Users are able to coordinate to split costs of living expenses and services which allow sharing subscriptions.
          </p>
          <div className={`${styles.cardFooter}`}>
            <a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" className={`btn btn-block ${styles.githubBtn}`}>Github</a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardLeft}`}>
          <img src={require('../../images/alex.jpg')} alt=""/>
        </div>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><h4>Portfolio</h4></span>
          <p className={styles.cardText}>This website you are currently viewing. It is a frontend website built using React. I use this to display projects that I have completed or am currently working on.
          </p>
          <div className={`${styles.cardFooter}`}>
            <a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" className={`btn btn-block ${styles.githubBtn}`}>Github</a>
          </div>
        </div>
      </div>
      <div className={`${styles.projectItem} flex-row`}>
        <div className={`${styles.cardLeft}`}>
          <img src={require('../../images/alex.jpg')} alt=""/>
        </div>
        <div className={`${styles.cardRight} flex-col`}>
          <span className={`${styles.cardHeader}`}><h4>EDHBlocks</h4></span>
          <p className={styles.cardText}>A website for Magic: The Gathering enthusiasts. With a heavy focus on the popular format "Elder Dragon Highlander", this website helps users build and prototype decks that are specific to this format. I worked on this project using a MERN stack.(WIP)
          </p>
          <div className={`${styles.cardFooter}`}>
            <a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" className={`btn btn-block ${styles.githubBtn}`}>Github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItems
