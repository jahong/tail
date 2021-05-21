import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';

const Twitter = () => {

  return (
    <div className="section-pad bg-bl">
      <div>
        <div className="text-center">
            <div className="font-semibold text-prm">
            FOLLOW US
            </div>
            <div className="setion-title pt-3 text-wh">
            Share your skills
            </div>
        </div>
        <div className="pt-10">
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              //onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                  <div className="text-wh">test</div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="text-wh">test</div>
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Twitter
