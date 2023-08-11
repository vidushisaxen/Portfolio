import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import CertificationsContent from '../components/CertificationsContent'

function Certifications() {
  return (
    <div>
       <Navbar/>
       <Hero heading="Certifications." text="Another way of showcasing skills."/>
       <CertificationsContent/>
      <Footer/>
    </div>
  )
}


export default Certifications