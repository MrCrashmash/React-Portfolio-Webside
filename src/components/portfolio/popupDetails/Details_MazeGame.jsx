import React from 'react'
import './Details.css'
import MazeGame from '../../../assets/Portfolio/MazeGame/MazeGame.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

const Details_MazeGame = () => {
  return (
    <div className='details__wrapper'>
        {/* Top Picture */}
        <Swiper className='container details__container'
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            >
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${MazeGame})`, backgroundSize: 'cover'}}>
                  <img src={MazeGame} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>Das verrückte Labyrint</h1>
            <p>
              Im Studien Modul "Software Projekt 2" sollten wir als Gruppe das Bettspiel "Das verrückte Labyrint" 
              in Java umsetzten. <br/>
              <br/>
              Mindestanforderungen waren: <br/>
              - Umsetzung des Spiels gmäß der Orginal-Spielregeln. <br/>
              - 2 Spieler:innen, spielbar in Rechnernetzen (Client/Server).<br/>
              - Ein laufendes Spiel Kann jederzeit unterbrochen und beliebig später wieder aufgenommen werden.<br/>
              - ungültige Spielzüge werden abgelehnt, bezug auf "evil Client"<br/>
            </p>
            <br/>
            <p>
              Das Spiel sowie das gesamte Projekt ist unten im GitHub zu finden.
            </p>
    </div>
  )
}

export default Details_MazeGame