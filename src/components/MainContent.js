import React from 'react'
import './MainContentStyles.css'
import resume from "../assets/resume.jpeg"

const MainContent = () => {
  return (
    <>
    <div className='main-content'>
        <div className='left'>
            <p>Loreehjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            </p>
        </div>
        <div className='right'>
         <img src= {resume}></img>
         <h3>VIDUSHI SAXENA RESUME</h3>
         <button className='btn'>Open</button>
        </div>
    </div>
    </>
  )
}

export default MainContent