import "./AboutContentStyles.css"   
import React from 'react' 
import { Link } from "react-router-dom"
import pro1 from '../assets/pro1.jpeg'
import pro2 from '../assets/pro2.jpeg'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1> Who am I ?</h1>
            <p>I am a react front-end developer. I create responsive and secure websites for my clients.</p>
           <Link to="/contact">
            <button className="btn">Contact</button>
           </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={pro1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={pro2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
} 

export default AboutContent