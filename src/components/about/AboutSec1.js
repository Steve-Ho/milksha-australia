import React from 'react'
import {
    // Flex,
    AspectRatio,
  } from '@chakra-ui/react';

  // import about_hero_image from '../../images/about/hero-image.png'

  import milkshaVideo from '../../images/about/Milksha_video.mp4'
  
  export default function AboutSec1() { 

    return (
      // <Flex
      //   w={"full"}
      //   h={"100vh"}
      //   backgroundImage={about_hero_image}
      //   backgroundSize={"cover"}
      //   backgroundPosition={"center center"}
      //   fontFamily={"extrabold"}
      // >

      // </Flex>



      <AspectRatio ratio={16/9}>
        <video muted controls playsinline width="1920" height="1080">
          <source src={milkshaVideo} type="video/mp4" />
        </video>
      </AspectRatio>
    );
  }