import React from 'react'

const My_projects = ({imageSrc, title,description, icon, icon1}) => {
  return (
    <div className='project-card'>
      <div className='card-content'>
      <img src={imageSrc} alt="Project" className="project-image" />
      <div className='project-icon'>
      <img src={icon} alt="Project" className="project-icon" />
      <img src={icon1} alt="Project" className="project-icon" />
      <img src={icon} alt="Project" className="project-icon" />
      </div>
      </div>
      <div className = "project-overlay">
      <h4>{title}</h4>
      <p>{description}</p>
      <a href="#preview" className="preview-button">Preview</a>
      </div>
    </div>
  )
}

export default My_projects