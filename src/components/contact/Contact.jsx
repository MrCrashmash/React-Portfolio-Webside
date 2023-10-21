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
      </div>
    </section>
  )
}

export default Contact