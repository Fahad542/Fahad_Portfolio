
import React from 'react'
import My_projects from './My_projects'

const Project = () => {
  return (
    <div className='container myproject text-center'>
        <h1 className="oleo do-h" style={{ marginTop: "50px" }}>
        My Projects
      </h1>
<div className='row projectcontainer'>
  <div className="col-sm-4 center-col">
  <My_projects heading={"Hello"} description={"Heydsfdsfsdfsdfdsfsdf"} />
        </div>
        <div className="col-sm-4 center-col">
  <My_projects heading={"Hello"} description={"sdfdfdsfsdfdsfsdfsdfHey"} />
        </div>
        <div className="col-sm-4 center-col">
  <My_projects heading={"Hello"} description={"dfdsfsdfdsfsdfdsfdsfHey"} />
        </div>
  
        </div>
    </div>
  )
}

export default Project