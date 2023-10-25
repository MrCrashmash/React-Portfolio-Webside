import React from 'react'
import './Details.css'

import MatratzeGIF from '../../../assets/Portfolio/Matratze/Matratze.gif'
import Matratze from '../../../assets/Portfolio/Matratze/Matratze.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Details_Matraze = () => {
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
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Matratze})`, backgroundSize: 'cover'}}>
                  <img src={Matratze} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${MatratzeGIF})`, backgroundSize: 'cover'}}>
                  <img src={MatratzeGIF} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>3D Matraze</h1>
            <p>
            Im Rahmen des Studienmoduls "Medieninformatik 2" habe ich ein 3D-Modell mit passender Animation zum Thema "Ein Tag am Strand" erstellt. In der finalen gerenderten Animation sind zudem Möwengeräusche und Meeresrauschen im Hintergrund zu hören.  
            </p>
            <br/>
            <br/>
            <p>
              Das gesamte Projekt ist auf GitHub zu finden.
            </p>

    </div>
  )
}

export default Details_Matraze