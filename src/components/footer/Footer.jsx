import React from 'react'
import './Footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Lennart Drescher</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/*<li><a href='#services'>Services</a></li>*/}
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://de.linkedin.com/in/lennart-drescher-644565265' target='_blank'>    <BsLinkedin/>   </a>
        <a href='https://github.com/MrCrashmash' target='_blank'>   <FaGithub/> </a>
      </div>

      <div className='footer__copyright'>
        <small> 
          &copy; Lennart Drescher.
        </small>
      </div>
    </footer>
  )
}

export default Footer