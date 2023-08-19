import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import MainContent from '../components/MainContent'
import Achieve from '../components/Achieve'
import Streaks from '../components/Streaks'

function Home() {
  return (
    <div>
      <Navbar/>
      <Heroimg/>
      <MainContent/>
      <Achieve/>
      <Streaks/>
      <Footer/>
    </div>
  )
}

export default Home