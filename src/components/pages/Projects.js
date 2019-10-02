import React, {Fragment} from 'react'
import Header from '../layout/Header/Header';
import ProjectItems from '../Projects/ProjectItems';
const Projects = () => {
  return (
    <Fragment>
      <div className="col text-center">
        <Header />
        <ProjectItems/>
      </div>
    </Fragment>
  )
}

export default Projects
