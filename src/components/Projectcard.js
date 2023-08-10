import React from 'react'
import './ProjectcardStyles.css'
import pro1 from '../assets/pro1.jpeg'
import { NavLink } from 'react-router-dom'


const Projectcard = () => {
  return (
    <>
   <div className='project-card'>
                <img src={pro1} alt='project image'/>
                <h2 className='project-title'> Project title</h2>
                <div className='pro-details'>
                    <p>wsredtyugvbhikjbgtyuhjbgyhj</p>
                    <div className='pro-btns'>
                        <NavLink to="url.com" className="btn">Live Link</NavLink>
                        <NavLink to="url.com" className="btn">Code repo</NavLink>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Projectcard