import React from 'react'

const My_projects = ({heading,description}) => {
  return (
    <div className='project-card'>
      <div className="project-card-content">
        <h1 className="project-heading">{heading}</h1>
        <p className="project-description">{description}</p>
      </div>
    </div>
  )
}

export default My_projects