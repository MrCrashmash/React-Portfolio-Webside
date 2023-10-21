import React from 'react'
import './Details.css'

import MatrazeGIF from '../../../assets/Portfolio/Matraze/Matraze.gif'
import Matraze from '../../../assets/Portfolio/Matraze/Matraze.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Matraze})`, backgroundSize: 'cover'}}>
                  <img src={Matraze} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${MatrazeGIF})`, backgroundSize: 'cover'}}>
                  <img src={MatrazeGIF} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>3D Matraze</h1>
            <p>
              Im Studien Modul "Medien Informatik 2" wurde erwartet, dass wir ein zufällig ausgewähltes 3D Modell erstellen sollten 
              und dieses dann noch animieren. Ich sollte eine Luftmatraze erstellen. Als Animation hab ich mich dazu entschieden sie auf dem Wasser
              schwimmen zu lassen und im Finalen Video sind auch geräusche eingebaut. 
            </p>
            <br/>
            <p>
              Eben so wurder verlangt, das wir das in Blender erstellte Model in ein bewegtes Video einbauen, hier sollte das Modell ebenfall leicht von 
              einem beliebigen Objekt im Video verdeckt werden.
            </p>
            <br/>
            <p>
              Die Matraze bzw. das gesamte Projekt ist unten im GitHub zu finden.
            </p>

    </div>
  )
}

export default Details_Matraze