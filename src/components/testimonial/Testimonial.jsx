import React from 'react'
import './testimonial.css'
import AVTR4 from '../../assets/unknown.jpeg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data =[
  {
    avatar:AVTR4,
    name: 'M**** ******',
    review: 'Hey brother build yourself then try solve other person problems.'
  },
  {
    avatar:AVTR4,
    name: 'S**** W********',
    review: 'A re baba nko sangu mla mahit ahe tu kiti Chu**** ahe .'
  },
  {
    avatar:AVTR4,
    name: 'A***** T****** ',
    review: 'A re tuzi layki ahe ka mza sobat bolaychi mla tuza peksha jasta marks padlet.'
  },
  {
    avatar:AVTR4,
    name: 'A*** R******',
    review: ' Are me tuza sarkha ch*t* nahiye .'
  },
  {
    avatar:AVTR4,
    name: 'S**d** R*******',
    review: 'Ha gap mla pahiti yena ki tula ka* nahi yet te, ani ho lai yet ase pan nko krus.'
  },
]



const Testimonial = () => {
  return (
    <section id='testimonials' >
      <h5>Review from Classmate and Friends </h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name ,review}, index) =>{
            return(
              <SwiperSlide key={index} className='testimonial' >
                <div className="client__avatar">
                <img src={avatar}  />
                </div>
                  <h5 className='client__name' >{name}</h5>
                  <small className='client__review'> {review}</small>
            </SwiperSlide>
            )
          })
        }
        </Swiper>
    </section>
  )
}

export default Testimonial