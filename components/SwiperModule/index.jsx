import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'

const SwiperModule = () => {
  const slides = []

  for (let i = 0; i < 5; i++) {
    slides.push(
      <SwiperSlide key={`slide-${i}`}>
        {`Slide ${i}`}
      </SwiperSlide>
    )
    
  }
  return (
    <>
      <Swiper id='main'>
        {slides}
      </Swiper>
    </>
  )
}
	export default Swiper