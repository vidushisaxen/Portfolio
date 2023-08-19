import './FormStyles.css'

import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type='text'></input>
            <label>Email</label>
            <input type='email'></input>
            <label>Subject</label>
            <input type='text'></input>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message'/>
            <button className='btn button'><a href="mailto:vidushisaxenabdn786@gmail.com" target="_blank">Send Email</a></button>            
        </form>
    </div>
  )
}

export default Form