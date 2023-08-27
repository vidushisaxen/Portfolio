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
            <p>I am a react front-end developer. I create responsive and secure websites for my clients.</p><br></br>
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
    <h2 className="sheading">Education -</h2><br></br>
        <div className="eduone">
            <p>Institute of Engineering and Technology, <br></br> Dr. Ram Manohar Lohia Avadh University, Ayodhya. <br></br> Btech. (Computer Science)<br></br>  [August 2020 - August 2024] <br></br> <b>CGPA - </b> 8.5</p>
        </div>
        <div className="edutwo">
           <p>
            De Paul School, Budaun. <br></br> CISCE Board <br></br>XII (PCM with computers, Physical Education , English) <br></br> <b>Percentage -</b> 84.4
           </p>
        </div>
        <div className="eduthree">
        <p>
            De Paul School, Budaun. <br></br> CISCE Board <br></br>X (PCM , English, Computers, Hindi)  <br></br> <b>Percentage -</b> 88
           </p>
        </div>
    </div>
    <div className="skillset">
        <h2 className="sheading"> Technical Skills -</h2>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
            <li>Mongo Db</li>
            <li>Node JS</li>
            <li>ES6</li>
            <li>Media Query</li>
            <li>Java</li>
            <li>C</li>
            <li>Tailwind CSS</li>
            <li>Bootstrap</li>
            <li>Figma</li>
            <li>Canva</li>
            <li>UI/UX</li>
            <li>GIT</li>
            <li>Github</li>
            <li>Responsive Web Design</li>
            <li>Data Management </li>
            <li>Graphic designing</li>
            <li>MS Word</li>
            <li>MS Excel</li>
            <li>MS Powerpoint</li>
            
        </ul>
    </div>

    <div className="coding-links skillset">
    <h2 className="sheading">Coding profiles -</h2>
    <ul>
        <li><a href="https://leetcode.com/vidushisaxenabdn786/"> Leetcode</a></li>
        <li><a href="https://auth.geeksforgeeks.org/user/vidushisaxenabdn786/practice">Geeks for Geeks</a></li>
        <li><a href="https://www.hackerrank.com/vidushisaxenabd1">Hackerrank</a></li>
    </ul>

    <h2 className="sheading">Social handles -</h2>
    <ul>
        <li><a href="https://www.linkedin.com/in/vidushi-saxena-071786228/"> Linked in</a></li>
        <li><a href="https://github.com/vidushisaxen">Github</a></li>
        
    </ul>
    </div>
    <div className="skillset qualities">
        <h2 className="sheading">Qualities -</h2>
        <ul>
            <li>Hard-working</li>
            <li>Homework-driven</li>
            <li>Detailed</li>
            <li>Prep-oriented</li>
            <li>Passionate</li>
            <li>Quick Learner</li>
            <li>Leader</li>
            <li>Punctual</li>
            <li>Decision making</li>
            <li>Public speaking</li>
            <li>Communication</li>
            
        </ul>
    </div>
    </>
  )
} 


export default AboutContent