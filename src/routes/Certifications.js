import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Work from '../components/Work'
import Cerificate from '../components/Cerificate'

function Certifications() {
  return (
    <div>
       <Navbar/>
       <Hero heading="Certifications." text="Another way of showcasing skills."/>
      <Cerificate/>
      <Footer/>
    </div>
  )
}


export default Certifications