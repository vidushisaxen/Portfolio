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
            <h1 className="project-heading"> Who am I ?</h1>
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
   
    <div className="education skillset">
    <h2 className="sheading">Education</h2><br></br>
        <div className="eduone"></div>
        <div className="edutwo"></div>
        <div className="eduthree"></div>
    </div>
    <div className="skillset">
        <h2 className="sheading">Skills</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Java</li>
            <li>C</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Java</li>
            <li>C</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
        </ul>
    </div>

    <div className="coding-links skillset">
    <h2 className="sheading">Coding profiles handles.</h2>
    <ul>
        <li><a href="https://leetcode.com/vidushisaxenabdn786/"> Leetcode</a></li>
        <li><a href="https://auth.geeksforgeeks.org/user/vidushisaxenabdn786/practice">Geeks for Geeks</a></li>
        <li><a href="https://www.hackerrank.com/vidushisaxenabd1">Hackerrank</a></li>
    </ul>

    <h2 className="sheading">Social handles.</h2>
    <ul>
        <li><a href="https://www.linkedin.com/in/vidushi-saxena-071786228/"> Linked in</a></li>
        <li><a href="https://github.com/vidushisaxen">Github</a></li>
        
    </ul>
    </div>
    <div className="skillset qualities">
        <h2 className="sheading">Qualities</h2>
        <ul>
            <li>Hard-working</li>
            <li>Homework-driven</li>
            <li>Passionate</li>
            <li>Quick Learner</li>
            <li>Leader</li>
            <li>C</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Java</li>
            <li>C</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
        </ul>
    </div>
    </>
  )
} 


export default AboutContent