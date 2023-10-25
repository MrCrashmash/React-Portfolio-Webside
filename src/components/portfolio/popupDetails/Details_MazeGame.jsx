import React from 'react'
import './Details.css'
import MazeGameHome from '../../../assets/Portfolio/MazeGame/MainMenu2.png'
import MazeGame1 from '../../../assets/Portfolio/MazeGame/Move1.png'


// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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
              Im Rahmen des Studienmoduls "Software Projekt 2" haben wir als Gruppe die Aufgabe erhalten, das Brettspiel "Das verrückte Labyrinth" in Java umzusetzen.<br/>
              <br/>
              Die Mindestanforderungen für das Projekt sind:<br/>
              - die Einhaltung der Original-Spielregeln, <br/>
              - die Möglichkeit zur spielerischen Interaktion zwischen zwei Teilnehmer:innen via Client/Server-Schnittstelle, <br/>
              - ein jederzeit unterbrechbares und wieder aufnehmbares laufendes Spiel sowie die Ablehnung ungültiger Spielzüge.<br/>
            </p>
            <br/>
            <p>
              Um das Spiel zu starten, müssen zwei Instanzen geöffnet werden. Der erste Spieler wählt einen Port aus und drückt auf "Host Game". 
              Der zweite Spieler wählt "Join Game" und gibt den Port sowie die IP-Adresse des ersten Spielers an.
            </p>
            <br/>
            <p>
              Das Spiel sowie das gesamte Projekt ist auf GitHub zu finden.
            </p>
    </div>
  )
}

export default Details_MazeGame