import React from 'react'
import styles from './ProjectItems.module.css';
import projects from '../projects_data';
import ProjectItem from '../ProjectItem/ProjectItem';

const ProjectItems = () => {

  return (
    <div className={`${styles.projects} flex-col`}>
      <ProjectItem
      title={projects.divvy.title}
      description={projects.divvy.description}
      github={projects.divvy.github}
      />
      <ProjectItem
      title={'Portfolio'}
      description={'This website you are currently viewing. It is a frontend website built using React. I use this to display projects that I have completed or am currently working on.'}
      github={'https://github.com/almondjoys/personal-portfolio'}
      />
      <ProjectItem
      title={projects.gatortrader.title}
      description={projects.gatortrader.description}
      github={projects.gatortrader.github}
      images={projects.gatortrader.images}
      />
      <ProjectItem
      title={projects.edhblocks.title}
      description={projects.edhblocks.description}
      github={projects.edhblocks.github}
      images={projects.edhblocks.images}
      />
    </div>
  )
}

export default ProjectItems
