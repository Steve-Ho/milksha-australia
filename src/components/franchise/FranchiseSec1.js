import React from 'react'
import {
    Flex,
  } from '@chakra-ui/react';

  import franchise_hero_image from '../../images/franchise/hero-image.jpg'

  
  
  export default function FranchiseSec1() { 

    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={franchise_hero_image}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        fontFamily={"extrabold"}
      >
      </Flex>
    );
  }