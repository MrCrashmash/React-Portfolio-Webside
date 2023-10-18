import React from 'react'
import './Testimonials.css'
import Avatar1 from '../../assets/images/camera.png'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const testimonialsData = 
[
{
  avatar: Avatar1,
  name: 'Tina Snow',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt, at voluptatem, magnam harum ratione libero necessitatibus nemo voluptatibus consequatur maxime distinctio, labore ipsum magni nihil quisquam blanditiis ullam accusantium.'
},
{
  avatar: Avatar1,
  name: 'Broady Pepper',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt, at voluptatem, magnam harum ratione libero necessitatibus nemo voluptatibus consequatur maxime distinctio, labore ipsum magni nihil quisquam blanditiis ullam accusantium.'
},
{
  avatar: Avatar1,
  name: 'Peter Lustig',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt, at voluptatem, magnam harum ratione libero necessitatibus nemo voluptatibus consequatur maxime distinctio, labore ipsum magni nihil quisquam blanditiis ullam accusantium.'
},
{
  avatar: Avatar1,
  name: 'Alex der Starke',
  review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia incidunt, at voluptatem, magnam harum ratione libero necessitatibus nemo voluptatibus consequatur maxime distinctio, labore ipsum magni nihil quisquam blanditiis ullam accusantium.'
}
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          testimonialsData.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
                <div className='client__avatar'>
                  <img src={avatar} alt='Avatar'/>
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials