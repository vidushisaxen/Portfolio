import "./AboutContentStyles.css"   
import React from 'react' 
import { Link } from "react-router-dom"
import WrapFrame from '../assets/WrapFrame.jpeg'
import Blackjack from '../assets/Blackjack.jpeg'

const AboutContent = () => {
  return (
    <>
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
                    <img src={WrapFrame} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Blackjack} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>

    <div className="skillset">
        <ul>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
    </div>
    </>
  )
} 


export default AboutContent