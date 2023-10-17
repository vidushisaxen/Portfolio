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
            <p>Frontend developer @React <br></br> UI/UX Designer <br></br>Problem Solver DSA @Java
            </p>
        </div>
        <div className='right'>
         <img src= {resume}></img>
         <h3>VIDUSHI SAXENA RESUME</h3>
         <button className='btn'><a href="https://drive.google.com/file/d/1ys-7_3kYr_DhgotRi32dPTrRn8Ebt5VR/view?usp=drive_link">Open</a></button>
        </div>
    </div>
    </>
  )
}

export default MainContent