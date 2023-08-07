import React from 'react'
import './FooterStyles.css'
import { FaGithub, FaHackerrank, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'

function Footer() {
  return (
    <>
    <div className='footer'>
        <div className='footer-container'>
         <div className='left'>
            <div className='location'>
                <FaHome size={20} style={{color:"white", marginRight:"1rem"}}/>
           <div>
            <p>Faizabad bypass</p>
            <p>Ayodhya, India.</p>
            </div>
         </div>
         <div className='phone'>
         <h4><FaPhone size={20} style={{color:"white", marginRight:"1rem"}}/>+91 8433180613</h4>
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
         <FaLinkedin size={20} style={{color:"white", marginRight:"1rem"}}/>
         <FaGithub size={20} style={{color:"white", marginRight:"1rem"}}/>
         <FaHackerrank size={20} style={{color:"white", marginRight:"1rem"}}/>
         </div>
         </div>
        </div>
    </div>
    </>
  )
}


export default Footer