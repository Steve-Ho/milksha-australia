import React from 'react'
import {
    Box,
    Link,
    Stack,
    Text,
    Image,
  } from '@chakra-ui/react';

  import store1 from '../../images/onlineOrder/Elizabeth.jpg'
  import store2 from '../../images/onlineOrder/Doncaster.jpg'
  import store3 from '../../images/onlineOrder/Brisbane.jpg'
  
  export default function AllOnlineOrderPages() { 
    

    return (
        <Stack direction={["column", "row"]} m="5" justify="center">
            <Link href="/onlineOrder">
                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={store1} alt="Elizabeth Store" />

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
          </Box>
          </Link>
          <Link href="/onlineOrder2">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={store2} alt="Doncaster Store" />

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
          </Box>
          </Link>
          <Link href="/onlineOrder3">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={store3} alt="Brisbane Store" />

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
          </Box>
          </Link>
          </Stack>
    );
}
