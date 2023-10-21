import React from 'react'
import './About.css'
import ME from '../../assets/images/Me-SW.png'
import {MdOutlineWork} from 'react-icons/md'
import {MdSportsMartialArts} from 'react-icons/md'
import {HiMapPin} from 'react-icons/hi2'

import {FaShieldDog} from 'react-icons/fa6'
import {GiLava} from 'react-icons/gi'
import {GiMountainClimbing} from 'react-icons/gi'
import {RiBoxingLine} from 'react-icons/ri'

function About() {
  return (
    <section id='about'>
      <h5 >Wer bin ich?</h5>
      <h2 className='about_header'>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={ME} alt='About Me'/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
              <MdOutlineWork className='about__icon'/>
              <h5>DFKI Bremen</h5>
              <small>2 Jahre als Wissischaftliche Hilfskraft</small>
            </article>
            <article className='about__card'>
              <MdSportsMartialArts className='about__icon'/>
              <h5>Hobbys</h5>
              <small>Karate, Kajak fahren, Uni-Sport, Gaming</small>
            </article>
            <article className='about__card'>
              <HiMapPin className='about__icon'/>
              <h5>Heimat</h5>
              <small>Verden, Niedersachsen</small>
            </article>
          </div>

          <p>
            Hier sind zwei Wahrheiten & eine Lüge über mich:
          </p>

          <div className='TL__cards'>
            <article className='TL__card'>
              <div> <FaShieldDog className='TL__icon'/> </div>
              <div> <h5>Ich habe Polizeihunde ausgebildet</h5> </div>
              
            </article>
            <article className='TL__card'>
              <div> <RiBoxingLine className='TL__icon'/> </div>
              <div> <h5>Ich musste gegen ein Wildschwein kämpfen</h5> </div>
              
            </article>
            <article className='TL__card'>
              <div> <GiLava className='TL__icon'/> </div>
              <div> <h5>Ich war auf einem Vulkan</h5>  </div>
              
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About