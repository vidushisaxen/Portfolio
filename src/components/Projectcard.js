import React from 'react'
import './ProjectcardStyles.css'
import { NavLink } from 'react-router-dom'


const Projectcard = (props) => {
  return (
    <>
   <div className='project-card'>
                <img src={props.imgsrc} alt='project image'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <NavLink to={props.view} className="btn">Live Link</NavLink>
                        <NavLink to={props.code} className="btn">Code repo</NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Projectcard