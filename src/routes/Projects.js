import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projectcard from '../components/Projectcard'
import Work from '../components/Work'

function Projects() {
  return (
    <>
     <Navbar/>
     <Hero heading="PROJECTS." text="Some of my most recent works."/>
     <Work/>
      <Footer/>
    </>
  )
}

export default Projects