
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

// import "./section5.css";

import { Image, Link } from '@chakra-ui/react';

import social1 from '../../images/social/social1.jpg'
import social2 from '../../images/social/social2.jpg'
import social3 from '../../images/social/social3.jpg'
import social4 from '../../images/social/social4.jpg'
import social5 from '../../images/social/social5.jpg'
import social6 from '../../images/social/social6.jpg'



// import Swiper core and required modules
import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Pagination,Navigation]);


export default function Section5() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        slidesPerGroup={3}
        breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 20
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 20
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 20
            }
          }}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link href="https://www.instagram.com/milksha_australia/" isExternal>
            <Image 
                src={social1}
            />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="https://www.instagram.com/milksha_australia/" isExternal>
            <Image 
                src={social2}
            />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="https://www.instagram.com/milksha_australia/" isExternal>
            <Image 
                src={social3}
            />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="https://www.instagram.com/milksha_australia/" isExternal>
            <Image 
                src={social4}
            />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="https://www.instagram.com/milksha_australia/" isExternal>
            <Image 
                src={social5}
            />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link href="https://www.instagram.com/milksha_australia/" isExternal>
            <Image 
                src={social6}
            />
            </Link>
        </SwiperSlide>
      </Swiper>
    </>
  );
}