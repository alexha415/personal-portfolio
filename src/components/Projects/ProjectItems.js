import React from 'react'
import {SocialIcon} from 'react-social-icons';
import './ProjectItems.css';

const ProjectItems = () => {
  return (
    <div className="row">
      <div className="col-2 offset-4">
        <div className="card h-100">
          <div class="card-header">
            <strong>SpeedBuddy</strong>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">Android app using Google's geolocation api to track user movement. Relays useful information back to the user</p>
          </div>
          <div className="card-footer">
            <SocialIcon id="media-icon" url="https://github.com/almondjoys/SpeedBuddy"/>
          </div>
        </div>
      </div>
      <div className="col-2">
        <div className="card h-100">
          <div class="card-header">
            <strong>Portfolio</strong>
          </div>
          <div className="card-body text-left">
            <p className="card-text text-dark">This website was created with React and provides useful information about myself to you.</p>
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
