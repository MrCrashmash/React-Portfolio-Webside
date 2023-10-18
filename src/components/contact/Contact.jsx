import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'

function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Lennart.drescher@icloud.com</h5>
            <a href='mailto:Lennart.drescher@icloud.com'>Send a message</a>
          </article>
        </div>

        <form action=''>
          <input type='text' name='Name'  placeholder='Your Full Name' required />
          <input type='email' name='email'  placeholder='Your Email' required />
          <textarea name='message' rows={7} placeholder='Your Message' required />
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact