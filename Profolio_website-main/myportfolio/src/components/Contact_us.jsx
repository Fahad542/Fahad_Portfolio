
import React from 'react'

const Contact_us = () => {
  return (
    <section id="contact">
           <h1 className="container oleo contact-h text-center">Contact us</h1>
           <form>
            <div className='input-box'>
              <label>Name</label>
              <input  type='text' className='feild' placeholder='Enter your name' required/>
            </div>
            <div className='input-box'>
              <label>Name: </label>
              <input  type='text' className='feild' placeholder='Enter your name' required/>

            </div>
            <div className='input-box'>
              <label>your message</label>
              <input  type='text' className='feild' placeholder='Enter your name' required/>

            </div>
            <button type='submit'>Send Message</button>
           </form>
        
    </section>
);

}


export default Contact_us