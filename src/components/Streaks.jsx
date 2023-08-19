import React from 'react'
import './StreaksStyles.css'
import StreaksGFG from '../assets/StreaksGFG.jpeg'
import StreaksGithub from '../assets/StreaksGithub.jpeg'
import StreaksHackerrank from '../assets/StreaksHackerrank.jpeg'
import streaksLeetcode from '../assets/streaksLeetcode.jpeg'

const Streaks = () => {
  return (
    <>
    <h2 className='aheading'>Streaks and Heatmaps</h2>
    <div className='picbox'>
        <div className='left'>
            <ul>
                <li>Github-<br></br><a href='https://github.com/vidushisaxen'> vidushisaxen</a></li>
                <li>Geeks for Geeks- <br></br><a href='https://auth.geeksforgeeks.org/user/vidushisaxenabdn786'>vidushisaxenabdn786</a></li>
                <li>Leetcode- <br></br><a href='https://leetcode.com/vidushisaxenabdn786/'>vidushisaxenabdn786/</a></li>
                <li>Hackerrank- <br></br><a href='https://www.hackerrank.com/vidushisaxenabd1'>vidushisaxenabd1</a></li>
            </ul>
        </div>
        <div className='right'>
        <div className='up'>
            <img src={StreaksGFG}></img>
            <img src={StreaksGithub}></img>
            </div>
            <div className='down'>
            <img src={StreaksHackerrank}></img>
            <img src={streaksLeetcode}></img>
            </div>
        </div>
    </div>
    </>
  )
}

export default Streaks