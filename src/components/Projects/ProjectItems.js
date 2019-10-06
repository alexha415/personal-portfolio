import React from 'react'
import {SocialIcon} from 'react-social-icons';
import './ProjectItems.css';

const ProjectItems = () => {

  return (
    <div className="row">
      <div className="col-md-4 offset-2">
        <div className="card h-100">
          <div class="card-header">
            <strong style={{verticalAlign: 'middle'}}>SpeedBuddy</strong>
            <i className='fa fa-mobile fa-2x secondary-content' style={{float: 'right'}}/>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">Android app using Google's geolocation api to track user movement. Relays useful information back to the user. Allows the user to route places to go and lets them log the information.</p>
          </div>
          <div className="card-footer">
            <SocialIcon id="media-icon" url="https://github.com/almondjoys/SpeedBuddy"/>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card h-100">
          <div class="card-header">
            <strong style={{verticalAlign: 'middle'}}>Portfolio</strong>
            <i className='fa fa-chrome fa-2x secondary-content' style={{float: 'right'}}/>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">This website you are currently viewing. It is a frontend website built using React. I use this to display projects that I have completed or am currently working on.</p>
          </div>
          <div class="card-footer">
            <SocialIcon id="media-icon" url="https://github.com/almondjoys/Portfolio"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectItems
