import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

function Contact() {
  return (
    <div>
       <Navbar/>
       <Hero heading="Let's catch up." text="Feel free to contact."/>
      <Footer/>
    </div>
  )
}

export default Contact