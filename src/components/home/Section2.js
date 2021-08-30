import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
    Image,
  } from '@chakra-ui/react';

  import milkImage from '../../images/milkybg.png'

  import sec2_img from '../../images/sec2_img.png'
  
  export default function Section2() { 

    return (
      <Flex
        w={'full'}
        backgroundImage={milkImage}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        fontFamily={'extrabold'}
        backgroundColor={'#E9EFDC'}
        py={8}
      >
        <VStack
          w={'full'}
          justify={'center'}
          align={'flex-start'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={-3}>
            <Text
              color={'primary.100'}
              fontFamily={'extrabold'}
              
              fontSize={useBreakpointValue({ base: '2xl', md: '4xl' })}>
              FRESHNESS
            </Text>
            <Text
              color={'primary.100'}
              fontFamily={'extrabold'}
            
              fontSize={useBreakpointValue({ base: 'md', md: '2xl' })}>
              YOU CAN TASTE
            </Text>
            </Stack>
            <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
                fontFamily={'Arial'}
                fontSize={useBreakpointValue({ base: 'xs', md: 'lg' })}
            >
            We are passionate bubble tea drinkers. We care about what we consume. “Healthy” is probably not a word people normally associate with bubble tea, yet we are challenging that notion by doing things with the utmost care and providing what we believe is the best product. We are a bubble tea revolution.
            <strong> Using premium-quality milk and only fresh ingredients, we strive to bring you the best bubble tea in Australia.</strong>
            <br /><br />
            We believe in caring for our environment and not littering it with plastic, therefore we are choosing paper, or renewable resources like bamboo, over plastic. The biodegradable bamboo straws in each beverage are both sustainable and effective—it will not melt or swell or break in your drink like other plastic alternatives. Going forward, we will continue to strive for minimal impact on the environment while not compromising on taste or quality.
            </Text>
            <Button
                bg={'white'}
                rounded={'full'}
                color={'primary.100'}
                textTransform={"uppercase"}
                textAlign={'left'}
                size={'lg'}
                p={8}
            >
              <Link href="./about">
                Milksha’s <br />Philosophy
              </Link>
            </Button>

          </Stack>
        </VStack>
        <Image 
          display={{base: 'none', lg: 'block'}}
          src={sec2_img} 
          width='300px'
          mt='-100px'
        />
      </Flex>
    );
  }