import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Image } from '@chakra-ui/react';

import Drink1 from '../../images/top10drinks/drink1.png'
import Drink2 from '../../images/top10drinks/drink2.png'
import Drink3 from '../../images/top10drinks/drink3.png'
import Drink4 from '../../images/top10drinks/drink4.png'
import Drink5 from '../../images/top10drinks/drink5.png'
import Drink6 from '../../images/top10drinks/drink6.png'
import Drink7 from '../../images/top10drinks/drink7.png'
import Drink8 from '../../images/top10drinks/drink8.png'
import Drink9 from '../../images/top10drinks/drink9.png'
import Drink10 from '../../images/top10drinks/drink10.png'

// Import Swiper styles
import "swiper/swiper.min.css";
// import "swiper/components/pagination/pagination.min.css"

import "./section3.css";

// import Swiper core and required modules
// import SwiperCore, { Pagination } from "swiper/core";

// install Swiper modules
// SwiperCore.use([Pagination]);

export default function Section3() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        // pagination={{
        //   clickable: true
        // }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 0
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image 
            src={Drink1}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink2}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink3}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink4}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink5}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink6}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink7}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink8}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink9}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image 
            src={Drink10}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
