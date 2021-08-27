import React from 'react'
import {
    Flex,
  } from '@chakra-ui/react';

  import about_hero_image from '../../images/about/hero-image.png'

  
  
  export default function AboutSec1() { 

    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={about_hero_image}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        fontFamily={"extrabold"}
      >
      </Flex>
    );
  }