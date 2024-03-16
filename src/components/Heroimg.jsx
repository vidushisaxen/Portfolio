import React from 'react'
import './HeroimgStyles.css'
import { Link } from 'react-router-dom'


function Heroimg() {
  return (
    <>
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img' src='https://getwallpapers.com/wallpaper/full/0/8/1/574978.jpg' alt='Image'></img>
        </div>
        <div className='content'>
            <p> Hello! I am Vidushi Saxena.</p>
            <h1>React Developer</h1>
          <div className='main-btns'>
            <Link to="/projects" className='btn'> Projects</Link>
            <Link to="/contact" className=' btn btn-light'> Contact</Link>
          </div>
        </div>
    </div>
    </>
  )
}

export default Heroimg