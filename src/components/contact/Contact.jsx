import React from 'react'
import './Contact.css'
import {MdOutlineEmail} from 'react-icons/md'

function Contact() {
  return (
    <section id='contact'>
      <h2 className='contact_header'>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>Lennart3@uni-bremen.de</h5>
            <a href='mailto:Lennart3@uni-bremen.de'>Schreib eine E-Mail</a>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Contact