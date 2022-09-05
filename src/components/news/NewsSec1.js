import React from 'react'
import {
    Flex,
  } from '@chakra-ui/react';

  import news_hero_image from '../../images/news/hero-image.jpg'

  
  
  export default function NewsSec1() { 

    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={news_hero_image}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        fontFamily={"extrabold"}
      >
      </Flex>
    );
  }