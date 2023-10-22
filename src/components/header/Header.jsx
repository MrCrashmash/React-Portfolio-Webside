import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import ME from "../../assets/images/me.png"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey, ich bin</h5>
        <h1>Lennart Drescher</h1>
        <h4 className='text-light'>Informatik Student an der Universität Bremen</h4>
        <CTA />
        <HeaderSocials/>
        
        <div className='me'>
          <img src={ME} alt='me'/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>  
  )
}

export default Header