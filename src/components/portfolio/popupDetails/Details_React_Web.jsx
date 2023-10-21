import React from 'react'
import './Details.css'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

const Details_React_Web = () => {
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
                <SwiperSlide className='details_images'>
                    REACT
                </SwiperSlide>
                <SwiperSlide className='details_images'>
                    REACT !!!!
                </SwiperSlide>
        </Swiper>


        {/* Text */}
        <h1>Das </h1>
            <p>
              
            </p>
            <br/>
            <p>
              Das 
            </p>
    </div>
  )
}

export default Details_React_Web