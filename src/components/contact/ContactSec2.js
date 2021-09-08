import React from 'react'
import {
    Tab,
    TabList,
    Tabs,
    TabPanel,
    TabPanels,
    Image,
    Flex,
    VStack,
    Stack,
    Text,
    useBreakpointValue,
    FormControl,
    FormLabel,
    Input,
    Textarea,
    Button,
    Link,
  } from '@chakra-ui/react';

  import "./form.css";

  
import map_eliz from '../../images/contact/map1.png'
  
  
  export default function ContactSec2() { 

    return (
      <Tabs variant="soft-rounded" mt={10} align="center">
        <TabList mb="1em">
          <Tab _selected={{ color: "white", bg: "primary.100" }}>LOCATION</Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>CONTACT</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Image src={map_eliz} maxWidth={{ base: "100%", md: "500px" }} />
            <Flex w={"full"} fontFamily={"Arial"} py={5} textAlign={"left"}>
              <VStack
                w={"full"}
                justify={"center"}
                align={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
              >
                <Stack maxW={"2xl"} align={"flex-start"} spacing={0}>
                  <Text
                    color={"primary.100"}
                    fontSize={useBreakpointValue({ base: "md", md: "2xl" })}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                  >
                    <Link href="https://www.google.com/maps/place/Milksha+Elizabeth/@-37.8149236,144.961587,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad643216ce803b1:0xb7f2aa25d70634f1!8m2!3d-37.8149236!4d144.9637757" isExternal>Elizabeth Street Store</Link>
                  </Text>
                  <Text
                    color={"primary.200"}
                    fontSize={useBreakpointValue({ base: "md", md: "xl" })}
                  >
                    134 Elizabeth St
                    <br />
                    Melbourne VIC 3000
                  </Text>
                  <Text
                    color={"primary.100"}
                    fontSize={useBreakpointValue({ base: "md", md: "2xl" })}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    pt={10}
                  >
                    <Link href="https://www.google.com/maps/place/Milksha+Westfield+Doncaster/@-37.7847572,145.1234272,17z/data=!3m2!4b1!5s0x6ad6476f76067425:0x6e3ce34b236bdbd5!4m5!3m4!1s0x6ad647ecaa216b4d:0x263787f8bf016f07!8m2!3d-37.7847615!4d145.1256212" isExternal>westfield doncaster shopping centre</Link>
                  </Text>
                  <Text
                    color={"primary.200"}
                    fontSize={useBreakpointValue({ base: "md", md: "xl" })}
                  >
                    Kiosk KG04 Westfield Doncaster
                    <br />
                    Doncaster VIC 3108
                  </Text>
                  <Text
                    color={"primary.100"}
                    fontSize={useBreakpointValue({ base: "md", md: "2xl" })}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    pt={10}
                  >
                    Victoria suburbs coming soon...
                  </Text>
                  <Text
                    color={"primary.100"}
                    fontSize={useBreakpointValue({ base: "md", md: "2xl" })}
                    fontWeight={"bold"}
                    textTransform={"uppercase"}
                    pt={10}
                  >
                    Queensland coming soon...
                  </Text>
                </Stack>
              </VStack>
            </Flex>
          </TabPanel>
          <TabPanel maxWidth="800px">
            
              <form method="post" action="https://formspree.io/f/xwkarwal">
              <Stack direction={['column', 'row']} spacing="10px">
                    <FormControl id="firstName" isRequired>
                        <FormLabel color={'primary.100'}>FIRST NAME</FormLabel>
                        <Input name="firstName" type="text" placeholder="First Name" />
                    </FormControl>
                    <FormControl id="lastName" isRequired>
                        <FormLabel color={'primary.100'}>LAST NAME</FormLabel>
                        <Input name="lastName" type="text" placeholder="Last Name" />
                    </FormControl>
                </Stack>
                <Stack direction={['column', 'row']} spacing="10px" mt="3">
                <FormControl id="email" isRequired>
                    <FormLabel color={'primary.100'}>EMAIL</FormLabel>
                    <Input type="email" placeholder="Email" name="_replyto" />
                </FormControl>
                <FormControl id="phoneNumber" isRequired>
                    <FormLabel color={'primary.100'}>PHONE NUMBER</FormLabel>
                    <Input name="phoneNumber" type="tel" placeholder="Phone Number" />
                </FormControl>
                </Stack>
                <FormControl id="message">
                <Text my="8px" color={'primary.100'} fontSize={'1rem'} fontWeight={'500'} textAlign={'left'}>MESSAGE</Text>
                <Textarea name="message" />
                </FormControl>
                <Button
                    loadingText="Sending"
                    variant="solid"
                    mt={4}    
                    type="submit"
                >
                    Send
                </Button>
              </form>
            
          </TabPanel>
        </TabPanels>
      </Tabs>
    );
  }