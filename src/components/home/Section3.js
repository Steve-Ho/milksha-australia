import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Image, Text, VStack } from '@chakra-ui/react';

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
      <Text fontSize={{ base: 'xl', md: '2xl' }} color="primary.100" pt={{ base: 10, md: 10 }} pl={{ base: 0, md: 20 }} textAlign={{ base: 'center' , md: 'left' }} fontFamily={'extrabold'}>Top 10 Signature Drinks &#8594;</Text>
      <Swiper
        slidesPerView={1}
        spaceBetween={5}
        // pagination={{
        //   clickable: true
        // }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          "@1.50": {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <VStack>
            <Image src={Drink1} />
            <Text fontFamily="bold" color="primary.100">
              Brown Sugar Milk <br/><small>with coffee jelly</small>
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink2} />
            <Text fontFamily="bold" color="primary.100">
              Valrhona 100% Cocoa Milk <br/><small>with honey pearls</small>
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink3} />
            <Text fontFamily="bold" color="primary.100">
              Earl Grey Tea Latte <br/><small>with honey pearls</small>
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink4} />
            <Text fontFamily="bold" color="primary.100">
              Fresh Taro Milk
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink5} />
            <Text fontFamily="bold" color="primary.100">
              Genmaicha Milk <br/><small>with honey pearls</small>
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink6} />
            <Text fontFamily="bold" color="primary.100">
              Iced Blended<br/>Lemon Green Tea
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink7} />
            <Text fontFamily="bold" color="primary.100">
              Japanese Matcha Milk <br/><small>with red beans</small>
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink8} />
            <Text fontFamily="bold" color="primary.100">
              Orange Green Tea
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink9} />
            <Text fontFamily="bold" color="primary.100">
              Soy Oolong Tea Latte <br/><small>with pudding</small>
            </Text>
          </VStack>
        </SwiperSlide>
        <SwiperSlide>
        <VStack>
            <Image src={Drink10} />
            <Text fontFamily="bold" color="primary.100">
              Wintermelon Lemon Juice <br/><small>with herbal jelly</small>
            </Text>
          </VStack>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
