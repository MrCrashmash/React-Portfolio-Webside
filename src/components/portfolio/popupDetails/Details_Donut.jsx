import React from 'react'
import './Details.css'
import DonutGIF from '../../../assets/Portfolio/Donut/Donut.gif'
import Donut from '../../../assets/Portfolio/Donut/Donut.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

export const Details_Donut = () => {
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
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${Donut})`, backgroundSize: 'cover'}}>
                    <img src={Donut} style={{visibility:'hidden'}}/>
                </SwiperSlide>
                <SwiperSlide className='details_images' style={{backgroundImage: `url(${DonutGIF})`, backgroundSize: 'cover'}}>
                  <img src={DonutGIF} style={{visibility:'hidden'}}/>
                </SwiperSlide>
        </Swiper>


        {/* Text */}
            <h1>3D DONUT</h1>
            <p>
              Um mich auf das Studienmodul "Medieninformatik 2" vorzubereiten, habe ich diesen leckeren Donut als mein erstes
              3D Objekt in Blender modeliert.
            </p>
            <br/>
            <p>
              Den Donut bzw. das gesamte Projekt ist unten im GitHub zu finden.
            </p>

    </div>
  )
}

export default Details_Donut