import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://de.linkedin.com/in/lennart-drescher-644565265' target='_blank'><BsLinkedin/></a>
        <a href='https://github.com/MrCrashmash' target='_blank'><FaGithub/></a>

    
    </div>
  )
}

export default HeaderSocials