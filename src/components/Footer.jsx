import React from 'react'
import './FooterStyles.css'
import { FaCopyright, FaGithub, FaHackerrank, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
         <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"white", marginRight:"1rem"}}/>
           <div>
            <p>Ayodhya, India.</p>
            </div>
         </div>
         <div className='email'>
         <h4><FaMailBulk size={20} style={{color:"white", marginRight:"1rem"}}/>vidushisaxenabdn786@gmail.com</h4>
         </div>
         </div>

         <div className='right'>
         <h4> About me</h4>
         <p>This is Vidushi Saxena. Final-year student (Btech CSE). </p>
         <p>I enjoy playing with code and design new challenges to make them in my own way.</p>
         <div className='social'>
         <a href='https://www.linkedin.com/in/vidushi-saxena-071786228/'><FaLinkedin size={20} style={{color:"white", marginRight:"1rem"}}/></a>
         <a href='https://github.com/vidushisaxen'><FaGithub size={20} style={{color:"white", marginRight:"1rem"}}/></a>
         <a href='https://www.hackerrank.com/vidushisaxenabd1'><FaHackerrank size={20} style={{color:"white", marginRight:"1rem"}}/></a>
         </div>
         </div>
         {/* <div className='footerbottom'>
         <FaCopyright size={20} style={{color:"white", marginRight:"1rem"}}/>
         <p>2023</p>
         <p>Vidushi Saxena</p>
         </div> */}
        </div>
    </div>
    </>
  )
}



export default Footer