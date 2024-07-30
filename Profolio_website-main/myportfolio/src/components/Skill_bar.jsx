
import React from 'react'

const Skill_bar = ({skillName,percentage}) => {
  return (
   <div className='SkillBar'>

       <div className="skill-bar-title">
        {skillName}
      </div>
      <div className="skill-bar-container">
        <div className="skill-bar-progress" style={{ width: `${percentage}%` }}></div>
      </div>
   </div>
  )
}

export default Skill_bar