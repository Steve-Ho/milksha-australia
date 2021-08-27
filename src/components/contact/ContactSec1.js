import React from 'react'
import {
    Flex,
  } from '@chakra-ui/react';

  import contact_hero_image from '../../images/contact/hero-image.jpg'

  
  
  export default function ContactSec1() { 

    return (
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={contact_hero_image}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        fontFamily={"extrabold"}
      >
      </Flex>
    );
  }