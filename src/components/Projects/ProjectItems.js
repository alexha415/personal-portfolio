import React from 'react'
import './ProjectItems.css';
import '../layout/SocialIcons/SocialIcons';

const ProjectItems = () => {

  return (
    <div className="row">
      <div className=" col col-md-3 offset-md-1">
        <div className="card h-100">
          <div class="card-header">
            <strong>Divvy</strong>
            <i className='fa fa-mobile fa-2x project-type-icon'/>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">Android app with a large focus on Object Oriented Design, in both UI and API. Users are able to coordinate to split costs of living expenses and services which allow sharing subscriptions.</p>
          </div>
          <div className="card-footer">
            <a href="https://github.com/sfsu-csc-668-spring-2019/term-project-divvy-team03" target="_blank" className="btn btn-block github-btn">More</a>
          </div>
        </div>
      </div>
      <div className="col col-md-3">
        <div className="card h-100">
          <div class="card-header">
            <strong>Portfolio</strong>
            <i className='fa fa-chrome fa-2x project-type-icon'/>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">This website you are currently viewing. It is a frontend website built using React. I use this to display projects that I have completed or am currently working on.</p>
          </div>
          <div className="card-footer">
            <a href="https://github.com/almondjoys/personal-portfolio" target="_blank"className="btn btn-block github-btn">More</a>
          </div>
        </div>
      </div>
      <div className="col col-md-3">
        <div className="card h-100">
          <div class="card-header">
            <strong>EDHBlocks</strong>
            <i className='fa fa-chrome fa-2x project-type-icon'/>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">A website for Magic: The Gathering enthusiasts. With a heavy focus on the popular format "Elder Dragon Highlander", this website helps users build and prototype decks that are specific to this format. I worked on this project using a MERN stack.(WIP)</p>
          </div>
          <div className="card-footer">
            <a href="https://github.com/almondjoys/edhblocks" target="_blank"className="btn btn-block github-btn">More</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItems
