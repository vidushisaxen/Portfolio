import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Projectcard from '../components/Projectcard'

function Projects() {
  return (
    <>
     <Navbar/>
     <Hero heading="PROJECTS." text="Some of my most recent works."/>
     <Projectcard/>
      <Footer/>
    </>
  )
}

export default Projects