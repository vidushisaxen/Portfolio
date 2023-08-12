import React from 'react'
import './ProjectcardStyles.css'
import Workcarddata from '../components/Workcarddata'
import Projectcard from './Projectcard'


const Work = () => {
  return (
    <>
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <div className='project-container'>
            {Workcarddata.map((val,ind)=>{
                return(
                    <Projectcard
                    key ={ind}
                    imgsrc = {val.imgsrc}
                    title = {val.title}
                    text = {val.text}
                    view = {val.view}
                    />
                )
            })}
           
        </div>
    </div>
    </>
  )
}

export default Work