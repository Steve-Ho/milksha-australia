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
    HStack,
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
            <Flex w={"full"} fontFamily={"bold"} p={5} textAlign={"left"}>
              <HStack w={"full"} align={"center"} justify={"center"}>
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
                      <Link href="https://www.google.com/maps/place/Milksha+Elizabeth/@-37.8149236,144.961587,17z/data=!3m1!4b1!4m5!3m4!1s0x6ad643216ce803b1:0xb7f2aa25d70634f1!8m2!3d-37.8149236!4d144.9637757" isExternal>Milksha Melbourne</Link>
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
                      <Link href="https://www.google.com/maps/place/Milksha+QV/@-37.8103574,144.9633455,17z/data=!3m1!4b1!4m6!3m5!1s0x6ad643481b8ca625:0x5a6caaca03a99086!8m2!3d-37.8103574!4d144.9655342!16s%2Fg%2F11txj9dj4d" isExternal>Milksha QV</Link>
                    </Text>
                    <Text
                      color={"primary.200"}
                      fontSize={useBreakpointValue({ base: "md", md: "xl" })}
                    >
                      QV Square
                      <br />
                      15 Red Cape Lane
                      <br />
                      Melbourne VIC 3000
                    </Text>
                  </Stack>
                </VStack>
              </HStack>
              <HStack w={"full"} align={"flex-start"} justify={"center"}>
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
                      <Link href="https://www.google.com/maps/place/Shop+2%2F115+Albert+St,+Brisbane+City+QLD+4000/@-27.4713329,153.0248546,17z/data=!3m1!4b1!4m5!3m4!1s0x6b915a1b30bde04b:0x42d9d1d395646a16!8m2!3d-27.4713329!4d153.0270433" isExternal>Milksha Brisbane</Link>
                    </Text>
                    <Text
                      color={"primary.200"}
                      fontSize={useBreakpointValue({ base: "md", md: "xl" })}
                    >
                      Shop 2, 115 Albert Street
                      <br />
                      Brisbane QLD 4000
                    </Text>
                    <Text
                      color={"primary.100"}
                      fontSize={useBreakpointValue({ base: "md", md: "2xl" })}
                      fontWeight={"bold"}
                      textTransform={"uppercase"}
                      pt={10}
                    >
                      <Link href="https://www.google.com/maps/place/Shop+3%2F14+Zamia+St,+Sunnybank+QLD+4109/@-27.5706508,153.0619508,17z/data=!3m1!4b1!4m5!3m4!1s0x6b9144d875db55c3:0x4521be486658cc51!8m2!3d-27.5706508!4d153.0619508?entry=ttu" isExternal>Milksha Sunnybank</Link>
                    </Text>
                    <Text
                      color={"primary.200"}
                      fontSize={useBreakpointValue({ base: "md", md: "xl" })}
                    >
                      Shop 3, 14 Zamia St
                      <br />
                      Sunnybank QLD 4109
                    </Text>
                  </Stack>
                </VStack>
              </HStack>
              <HStack w={"full"} align={"flex-start"} justify={"center"}>
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
                      <Link href="https://www.google.com/maps/place/653+George+St,+Haymarket+NSW+2000/@-33.8790259,151.2052948,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae2342d38549:0x12500b60b882f26d!8m2!3d-33.8790259!4d151.2052948!16s%2Fg%2F11csgsxh0m?entry=ttu" isExternal>Milksha Sydney</Link>
                    </Text>
                    <Text
                      color={"primary.200"}
                      fontSize={useBreakpointValue({ base: "md", md: "xl" })}
                    >
                      653 George St
                      <br />
                      Haymarket NSW 2000
                    </Text>
                  </Stack>
                </VStack>
              </HStack>
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