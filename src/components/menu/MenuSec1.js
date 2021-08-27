import React from 'react'
import {
    Flex,
  } from '@chakra-ui/react';

  import menu_hero_image from '../../images/menu/hero-image.jpg'

  
  
  export default function MenuSec1() { 

    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={menu_hero_image}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        fontFamily={"extrabold"}
      >
      </Flex>
    );
  }