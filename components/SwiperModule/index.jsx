import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'

import 'swiper/swiper-bundle.css'
import styles from './styles.module.scss'

SwiperCore.use([Navigation, Pagination, Thumbs])

const SwiperModule = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [swipeList, setSwipeList] = useState([])

  useEffect(() => {
    window
      .fetch('api/swiper')
      .then(response =>response.json())
      .then(({ data }) => {
        setSwipeList(data)
      })
  }, [])

  return (
    <>
      <Swiper 
        id="thumbs"
        spaceBetween={0}
        slidesPerView={5}
        onSwiper={setThumbsSwiper}
        className={styles.thumb}
      >
        {swipeList.map(({id, icon, name}) => (
          <SwiperSlide key={`thumb-${id}`}>
            <Link href="#">
              <a className={styles.slide}>
                <img src={icon} alt={name} className={styles.slide__icon} />
                <div className={styles.slide__title}>{name}</div>
              </a>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper 
        id='main' 
        thumbs={{ swiper: thumbsSwiper }}
        tag='section' 
        className={styles.swiper}
        navigation
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => swiper.el.lastElementChild.children[swiper.activeIndex].firstElementChild.firstElementChild.firstElementChild.play()}
      >
        {swipeList.map(({id, video, icon, name, subtitle, description, attributes, finalText }) => (
          <SwiperSlide key={`slide-${id}`} className={styles.slide}>
            {
              <div className={styles.slide__container}>
                <div className={styles.video}>
                  <video id={`video-${id}`} width="240" height="484">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <div className={styles.title}>
                  <img src={icon} alt={name} />
                  <h3>{name}</h3>
                </div>
                <div className={styles.contents}>
                  <h4 className={styles.contents__subtitle}>{subtitle}</h4>
                  { description && <p className={styles.contents__description}>{description}</p> }
                  <ul className={styles.contents__attributes}>
                    {
                      attributes.map(attribute => <li>{attribute}</li>)
                    }
                  </ul>
                  {
                    finalText && <h4 className={styles.contents__finalText}>{finalText}</h4>
                  }
                  
                </div>
              </div>
            }
          </SwiperSlide>))}
      </Swiper>
    </>
  )
}
	export default SwiperModule