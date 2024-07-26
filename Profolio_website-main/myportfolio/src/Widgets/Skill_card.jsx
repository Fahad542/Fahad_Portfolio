import React from 'react'

const Skill_card = ({heading,description}) => {
    return (
        <div className='about-card'>
       <div className="about-card-content">
       <h1 className="card-heading">{heading}</h1>
           <p className="card-description">{description}</p>
             </div>
        </div>
         )
}

export default Skill_card