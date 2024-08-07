
import React from 'react'

const Timeline = ({heading, description}) => {
  return (
    <div>
        <div className='timelinecontainer'>
        <div className='timelinecontent'>
            <h4>{heading}</h4>
            <p>{description}</p>
        </div>
        </div>
    </div>
  )
}

export default Timeline