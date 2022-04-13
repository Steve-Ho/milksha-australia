import React from 'react'
import {
    Box,
    Image,
    Stack,
    Text,
    Link
  } from '@chakra-ui/react';

  
  // import signature_drink_1 from '../../images/about/signature_drink_1.jpg'
  import signature_drink_2 from '../../images/about/signature_drink_2.jpg'
  
  export default function OnlineOrderSec1() { 


  return (
    <Stack direction={["column", "row"]} m="5" justify="center" spacing={10}>

<Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
<Link href="../store1">
        <Image src={signature_drink_2} alt="FRESH TARO MILK" />

        <Box p="6">
          <Box
            mt="1"
            mb="4"
            fontWeight="bold"
            as="h4"
            color="primary.100"
            lineHeight="tight"
            textAlign="left"
            textTransform="uppercase"
          >
            Elizabeth Store
          </Box>

          <Box>
            <Text color="primary.200" fontSize="sm" textAlign="left">
            134 Elizabeth St
                    <br />
                    Melbourne VIC 3000
            </Text>
          </Box>
        </Box>
        </Link>
      </Box>

      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Link href="../store2">
        <Image src={signature_drink_2} alt="FRESH TARO MILK" />

        <Box p="6">
          <Box
            mt="1"
            mb="4"
            fontWeight="bold"
            as="h4"
            color="primary.100"
            lineHeight="tight"
            textAlign="left"
            textTransform="uppercase"
          >
            Doncaster Store
          </Box>

          <Box>
            <Text color="primary.200" fontSize="sm" textAlign="left">
            Kiosk KG04 Westfield Doncaster
                    <br />
                    Doncaster VIC 3108
            </Text>
          </Box>
        </Box>
        </Link>
      </Box>
      
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Link href="../store3">
        <Image src={signature_drink_2} alt="FRESH TARO MILK" />

        <Box p="6">
          <Box
            mt="1"
            mb="4"
            fontWeight="bold"
            as="h4"
            color="primary.100"
            lineHeight="tight"
            textAlign="left"
            textTransform="uppercase"
          >
            Brisbane Store
          </Box>

          <Box>
            <Text color="primary.200" fontSize="sm" textAlign="left">
            Shop 2, 115 Albert Street
                    <br />
                    Brisbane QLD 4000
            </Text>
          </Box>
        </Box>
        </Link>
      </Box>
    </Stack>
  );


}
