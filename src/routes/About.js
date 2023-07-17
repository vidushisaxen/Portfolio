import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function About() {
  return (
    <div> 
      <Navbar/>
      <Hero heading="It's me" text="Wanna know some facts about me."/>
    <Footer/>
    </div>
  )
}

export default About