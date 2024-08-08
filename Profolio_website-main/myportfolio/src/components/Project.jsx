
import React from 'react'
import My_projects from './My_projects'
import Img from '../assets/Icons/project.jpeg'
import flutter from '../assets/Icons/flu.png'
import firebase from '../assets/Icons/firebase.png'

const Project = () => {
  return (
    <div className='container myproject text-center'>
        <h1 className="oleo do-h" style={{ marginTop: "50px" }}>
        My Projects
      </h1>
   <div className='row projectcontainer'>
  <div className="col-sm-4 center-col">
      <My_projects imageSrc={Img} title="Mobile Application" description="Ppema is using firebase as backend. Features that include videos playing, multilingual languages, survey taken, etc.
Flutter / Dart"  icon={flutter} icon1={firebase}/>
        </div>
        <div className="col-sm-4 center-col">
        <My_projects imageSrc={Img} title="Mobile Application" description="Ppema is using firebase as backend. Features that include videos playing, multilingual languages, survey taken, etc.
Flutter / Dart" />
        </div>
        <div className="col-sm-4 center-col">
        <My_projects imageSrc={Img} title="Mobile Application" description="Ppema is using firebase as backend. Features that include videos playing, multilingual languages, survey taken, etc.
Flutter / Dart" />
        </div>
        <div className="col-sm-4 center-col">
      <My_projects imageSrc={Img} title="Mobile Application" description="Ppema is using firebase as backend. Features that include videos playing, multilingual languages, survey taken, etc.
Flutter / Dart" />
        </div>
        <div className="col-sm-4 center-col">
        <My_projects imageSrc={Img} title="Mobile Application" description="Ppema is using firebase as backend. Features that include videos playing, multilingual languages, survey taken, etc.
Flutter / Dart" />
        </div>
        <div className="col-sm-4 center-col">
        <My_projects imageSrc={Img} title="Mobile Application" description="Ppema is using firebase as backend. Features that include videos playing, multilingual languages, survey taken, etc.
Flutter / Dart" />
        </div>
        </div>
    </div>
  )
}

export default Project