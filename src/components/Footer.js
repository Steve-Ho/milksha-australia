import React from 'react';

import Logo from "./logo";

import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    Image,
  } from '@chakra-ui/react';

  

  import instagramIcon from '../images/icons/ig.svg'
  import fbIcon from '../images/icons/fb.svg'
  
  document.getElementById("year").innerHTML = new Date().getFullYear();

  export default function Footer() {
    return (
      <Box
        mt={8}
        bg={'white'}
        color={'primary.200'}

       >
        <Box
        borderTopWidth={2}
        borderStyle={'solid'}
        borderColor={'primary.100'}
        w={'85%'}
        margin={'0 auto'}
        ></Box>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          spacing={4}
          justify={'center'}
          align={'center'}>
          <Logo
            width={{ base: '20%', md: '10%'}}
          />
          <Stack direction={'row'} spacing={6}>
            <Link href={"/"}>Home</Link>
            <Link href={"/menu"}>Menu</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
          </Stack>
        </Container>
  
        <Box>
          <Container
            as={Stack}
            maxW={'100%'}
            py={4}
            direction={{ base: 'column', md: 'row' }}
            spacing={4}
            justify={{ base: 'center', md: 'space-between' }}
            align={{ base: 'center', md: 'center' }}
            bgColor={'primary.100'}
            color={'white'}
        >
            <Text>
                © <span id="year"></span> Milksha. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={3}>
                <Link href="https://www.instagram.com/milksha_australia/" isExternal>
                    <Image src={instagramIcon} />
                </Link>
                <Link href="https://www.facebook.com/MilkshaAustralia/" isExternal>
                    <Image src={fbIcon} />
                </Link>
            </Stack>
          </Container>
        </Box>
      </Box>
    );
  }