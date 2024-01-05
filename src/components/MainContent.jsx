import React from 'react'
import './MainContentStyles.css'
import resume from "../assets/resume.jpg"
import MERN from "../assets/MERN.png"
const MainContent = () => {
  return (
    <>
    <div className='main-content'>
        <div className='mleft'>
          <h2> Tech-Stack</h2>
          <img src={MERN}></img>
            <p>AEM Frontend Intern @Techchefz Digital<br></br>Frontend developer @React <br></br> UI/UX Designer <br></br>Problem Solver DSA @Java
            </p>
        </div>
        <div className='right'>
         <img src= {resume}></img>
         <h3>VIDUSHI SAXENA RESUME</h3>
         <button className='btn'><a href="https://drive.google.com/file/d/1Hv7IjEinfksuHfDMOZ38Xh7E_wqy4hb6/view?usp=drive_link">Open</a></button>
        </div>
    </div>
    </>
  )
}

export default MainContent