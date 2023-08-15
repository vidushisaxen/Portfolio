import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import AboutContent from '../components/AboutContent'

function About() {
  return (
    <div> 
      <Navbar/>
      <Hero heading="It's me" text="Wanna know some facts about me."/>
      <AboutContent/>
    <Footer/>
    </div>
  )
}

export default About