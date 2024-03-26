import React from 'react';
import './AchieveStyles.css';
import deep1 from '../assets/deep1.jpeg';
import deep2 from '../assets/deep2.jpeg';
import deep3 from '../assets/deep3.jpeg';
import deep4 from '../assets/deep4.jpeg';
import badge1 from '../assets/badge1.jpeg';
import badge2 from '../assets/badge2.jpeg';
import badge3 from '../assets/badge3.jpeg';
import badge4 from '../assets/badge4.jpeg';
import badge5 from '../assets/badge5.jpeg';
import badge6 from '../assets/badge6.jpeg';
import badge7 from '../assets/badge7.jpeg';
import badge8 from '../assets/badge8.jpeg';
import badge9 from '../assets/badge9.jpeg';
import badge10 from '../assets/badge10.jpeg';
import badge11 from '../assets/badge11.jpeg';
import badge12 from '../assets/badge12.jpeg';


const Achieve = () => {
  return (
    <>
    <h2 className='aheading'>Achievements</h2>
    <div className='picbox'>
        <div className='left'>

            <h2>Deepotsav App </h2>
            <h3>Launched by Hon'ble Governor (Smt. Anandiben Patel)</h3><br></br>
            <p> -- A team of 6 people created  an android application "DEEPOTSAV" for Deepotsav event of Ayodhya.<br></br>
• Created a chat section for this application to send and receive chat (only for authorized users).<br></br>
• Using mongo DB for storing the indexes , post-comments and image url.<br></br>
• Using cloudinary for storing images and heroku for processing request and give data to front end using rest api.</p>


        </div>
        <div className='right'>
            <div className='up'>
            <img src={deep1}></img>
            <img src={deep2}></img>
            </div>


            <div className='down'>
            <img src={deep3}></img>
            <img src={deep4}></img>
            </div>
        </div>

    </div>

    
    <h2 className='aheading'>Badges</h2>
    <div className='badgebox'>
        <div className='badge'>
            <img src={badge1}></img>
        </div>
        <div className='badge'>
            <img src={badge2}></img>
        </div>
        <div className='badge'>
            <img src={badge3}></img>
        </div>
        <div className='badge'>
            <img src={badge4}></img>
        </div>
        <div className='badge'>
            <img src={badge5}></img>
        </div>
        <div className='badge'>
            <img src={badge6}></img>
        </div>
        <div className='badge'>
            <img src={badge7}></img>
        </div>
        <div className='badge'>
            <img src={badge8}></img>
        </div>
        <div className='badge'>
            <img src={badge9}></img>
        </div>
        <div className='badge'>
            <img src={badge10}></img>
        </div>
        <div className='badge'>
            <img src={badge11}></img>
        </div>
        <div className='badge'>
            <img src={badge12}></img>
        </div>
    </div>
    </>
  )
}


export default Achieve