import React from 'react'
import './MainContentStyles.css'
import resume from "../assets/resume.jpeg"
import MERN from "../assets/MERN.png"
const MainContent = () => {
  return (
    <>
    <div className='main-content'>
        <div className='mleft'>
          <h2> Tech-Stack</h2>
          <img src={MERN}></img>
            <p>Loreehjbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
            </p>
        </div>
        <div className='right'>
         <img src= {resume}></img>
         <h3>VIDUSHI SAXENA RESUME</h3>
         <button className='btn'><a href="https://drive.google.com/file/d/1ZL25dRTJhbLI9jd28lHSjurkj2fNt8Iz/view?usp=drive_link">Open</a></button>
        </div>
    </div>
    </>
  )
}

export default MainContent