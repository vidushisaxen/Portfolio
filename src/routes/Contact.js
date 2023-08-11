import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
       <Navbar/>
       <Hero heading="Let's catch up." text="Feel free to contact."/>
       <Form/>
      <Footer/>
    </div>
  )
}

export default Contact