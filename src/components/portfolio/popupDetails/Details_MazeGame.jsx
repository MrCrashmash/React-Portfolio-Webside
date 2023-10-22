import React from 'react'
import './Details.css'
import MazeGameHome from '../../../assets/Portfolio/MazeGame/MainMenu2.png'
import MazeGame1 from '../../../assets/Portfolio/MazeGame/Move1.png'


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
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${MazeGameHome})`, backgroundSize: 'cover'}}>
                  <img src={MazeGameHome} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${MazeGame1})`, backgroundSize: 'cover'}}>
                  <img src={MazeGame1} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>Das verrückte Labyrinth</h1>
            <p>
              Im Studien Modul "Software Projekt 2" sollten wir als Gruppe das Bettspiel "Das verrückte Labyrinth" 
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
              Es müssen zwei Instanzen des spiels geöffnet werden, der Erste Spieler muss "Host" drücken und sich einen Port aussuchen, mit dem sich Spieler zwei verbinden soll. 
              Der zweite Spieler drückt auf "join" und gibt den Port und die IP-adresse vom ersten Spieler ein.
              
              Das Spiel sowie das gesamte Projekt ist unten im GitHub zu finden.
            </p>
    </div>
  )
}

export default Details_MazeGame