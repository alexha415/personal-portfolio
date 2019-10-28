import React, {Fragment} from 'react'
import Header from '../layout/Header/Header';
import ProjectItems from '../Projects/ProjectItems';
const Projects = () => {
  return (
    <div className="projects row">
      <div className="col text-center">
        <ProjectItems/>
      </div>
    </div>
  )
}

export default Projects
