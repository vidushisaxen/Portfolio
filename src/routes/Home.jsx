import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'

function Home() {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default Home