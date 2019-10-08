import React from 'react'
import './ProjectItems.css';
import '../layout/SocialIcons/SocialIcons';

const ProjectItems = () => {

  return (
    <div className="row">
      <div className=" col col-md-4 offset-md-2">
        <div className="card h-100">
          <div class="card-header">
            <strong>SpeedBuddy</strong>
            <i className='fa fa-mobile fa-2x project-type-icon'/>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">Android app using Google's geolocation api to track user movement. Relays useful information back to the user. Allows the user to route places to go and lets them log the information.</p>
          </div>
          <div className="card-footer">
            <a href="https://github.com/almondjoys/SpeedBuddy" target="_blank" className="btn btn-block github-btn">More</a>
          </div>
        </div>
      </div>
      <div className="col col-md-4">
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
    </div>
  )
}

export default ProjectItems
