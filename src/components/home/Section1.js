import React from 'react'
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
  } from '@chakra-ui/react';

  import homeHeroImage from '../../images/hero-image.jpg'

  
  
  export default function Section1() { 

    return (
      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={homeHeroImage}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        fontFamily={'extrabold'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          align={'flex-start'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Button
                bg={'white'}
                rounded={'full'}
                color={'primary.100'}
                textTransform={"uppercase"}
                textAlign={'left'}
                size={'lg'}
                py={8}
            >
              <Link href="./allOnlineOrders">
                Taste the <br/>freshness today!
              </Link>
            </Button>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '2xl', md: '6xl' })}>
              ALL WE HAVE IS <br />PURENESS AND JOY 
            </Text>
          </Stack>
        </VStack>
      </Flex>
    );
  }