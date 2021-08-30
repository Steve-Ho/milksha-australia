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
  
  import sec4_img from '../../images/sec4_img.png'
  
  export default function Section4() { 

    return (
      <Flex
        w={'full'}
        backgroundSize={'contain'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={{ lg: 'center right', xl: 'center right 20%'}}
        backgroundImage={{ base: 'none', lg: sec4_img }}
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
              JOIN OUR FAMILY
            </Text>
            <Text
              color={'primary.100'}
              fontFamily={'extrabold'}
            
              fontSize={useBreakpointValue({ base: 'md', md: '2xl' })}>
              AND BE PART OF THE REVOLUTION
            </Text>
            </Stack>
            <Stack maxW={'xl'} align={'flex-start'} spacing={6}>
            <Text
                fontFamily={'Arial'}
                fontSize={useBreakpointValue({ base: 'xs', md: 'lg' })}
            >
            We are looking for enthusiastic and passionate individuals who want to be a part of Milksha’s franchise network, that not only offers great financial reward and support but provides customers a chance to be part of change. <br/>
            <strong>This is the Milksha Milk Revolution.</strong> Consumers are becoming more aware and conscious about the product they are consuming and the impact on their health. Becoming part of the Milksha franchise network allows partners to build a company that values our philosophy on sustainability and high food standards - giving everyone a fresh and natural tasting product that nourishes the body. 
            <br/><br/>
            We are just starting in Melbourne, now accepting expressions of interest. Please drop us a call or fill the form below. 
            </Text>
            <Button
                bg={'white'}
                rounded={'full'}
                color={'primary.100'}
                textTransform={"uppercase"}
                textAlign={'left'}
                size={'md'}
            >
              <Link href="./franchise">
                ENQUIRE TODAY
              </Link>
            </Button>

          </Stack>
        </VStack>
      </Flex>
    );
  }