import React from "react";
import {
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
  Select,
  Container,
} from "@chakra-ui/react";

import "./franchise_form.css";

// import franchise_pdf from '../../images/franchise/Milksha_Australia_Franchise_Pack.pdf'

export default function FranchiseSec2() {
  return (
    <Flex w={"full"} fontFamily={"Arial"} py={5} textAlign={"left"}>
      <VStack
        w={"full"}
        justify={"center"}
        align={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
      >
        <Stack
          maxW={"xl"}
          align={"flex-start"}
          spacing={0}
          ml={{ base: 3, md: 7 }}
        >
          <Text
            color={"primary.200"}
            fontSize={useBreakpointValue({ base: "md", md: "xl" })}
            py={5}
          >
            Be part of the <strong>Milksha Revolution.</strong>
            <br />
            <br />
            Consumers are becoming more aware and conscious about the product
            they are consuming and the impact on their health. Becoming part of
            the Milksha franchise network allows partners to build a company
            that values our philosophy on sustainability and high food standards
            - sharing Milksha's pureness and joy with everyone.
            <br />
            <br />
            We are accepting expressions of interest. <br />
            Please fill the form below and will be in contact soon.
          </Text>
        </Stack>
        <Container maxW={"xl"} align={"flex-start"} spacing={0}>
          <form method="post" action="https://formspree.io/f/xwkarwal">
            <Stack direction={["column", "row"]} spacing="10px">
              <FormControl id="firstName" isRequired>
                <FormLabel color={"primary.100"}>FIRST NAME</FormLabel>
                <Input name="firstName" type="text" placeholder="First Name" />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel color={"primary.100"}>LAST NAME</FormLabel>
                <Input name="lastName" type="text" placeholder="Last Name" />
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]} spacing="10px" pt={5}>
              <FormControl id="email" isRequired>
                <FormLabel color={"primary.100"}>EMAIL ADDRESS</FormLabel>
                <Input
                  type="email"
                  placeholder="Email Address"
                  name="_replyto"
                />
              </FormControl>
              <FormControl id="phoneNumber" isRequired>
                <FormLabel color={"primary.100"}>PHONE NUMBER</FormLabel>
                <Input
                  name="phoneNumber"
                  type="tel"
                  placeholder="Phone Number"
                />
              </FormControl>
            </Stack>
            <Stack direction={["column", "row"]} spacing="10px" pt={5}>
              <VStack align="start">
                <Text
                  color={"primary.100"}
                  fontSize={"1rem"}
                  fontWeight={"500"}
                  textAlign={"left"}
                >
                  STATE
                </Text>
                <Select placeholder="STATE">
                  <option value="New South Wales">New South Wales</option>
                  <option value="Victoria">Victoria</option>
                  <option value="Queensland">Queensland</option>
                  <option value="South Australia">South Australia</option>
                  <option value="Tasmania">Tasmania</option>
                  <option value="Western Australia">Western Australia</option>
                  <option value="Australian Capital Territory">
                    Australian Capital Territory
                  </option>
                  <option value="Northern Territory">Northern Territory</option>
                </Select>
              </VStack>
              <FormControl id="postcode">
                <FormLabel color={"primary.100"}>POST CODE</FormLabel>
                <Input name="postcode" type="number" placeholder="POST CODE" />
              </FormControl>
            </Stack>
            <Text
              pt={2}
              pb={2}
              color={"primary.100"}
              fontSize={"1rem"}
              fontWeight={"500"}
              textAlign={"left"}
            >
              MESSAGE
            </Text>
            <Textarea />
            <Button loadingText="Sending" variant="solid" mt={4} type="submit">
              Send
            </Button>
          </form>
        </Container>
      </VStack>
    </Flex>
  );
}
