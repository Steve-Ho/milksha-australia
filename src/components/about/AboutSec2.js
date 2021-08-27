import React from "react";
import {
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Stack,
  Text,
  Box,
  Image,
} from "@chakra-ui/react";

import ingredients_1 from '../../images/about/ingredients_1.jpg'
import ingredients_2 from '../../images/about/ingredients_2.jpg'
import ingredients_3 from '../../images/about/ingredients_3.png'
import ingredients_4 from '../../images/about/ingredients_4.png'

import signature_drink_1 from '../../images/about/signature_drink_1.jpg'
import signature_drink_2 from '../../images/about/signature_drink_2.jpg'
import signature_drink_3 from '../../images/about/signature_drink_3.jpg'
import signature_drink_4 from '../../images/about/signature_drink_4.jpg'
import signature_drink_5 from '../../images/about/signature_drink_5.jpg'

export default function AboutSec2() {
  return (
    <Tabs variant="soft-rounded" mt={10} align="center" size="sm" isFitted>
      <TabList>
        <Stack direction={["column", "row"]}>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            WHO ARE WE
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            PREMIUM INGREDIENTS
          </Tab>
        </Stack>
        <Stack direction={["column", "row"]}>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            BRAND PHILOSOPHY
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            SIGNATURE DRINKS
          </Tab>
        </Stack>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Text textAlign="left" p={5} maxW="2xl">
            Milksha Australia hails from the well-established bubble tea brand,
            Milkshop, in Taiwan. The company's emphasis on healthy and unique
            flavours coupled with delivering customer-orientated service has
            carved out a niche for itself in the handmade beverage market.
            Milkshop has over 200 stores in Taiwan and around the world, and now
            the long-awaited bubble tea brand has arrived in Australia, with its
            first flagship store located in the Melbourne CBD.
          </Text>
        </TabPanel>
        <TabPanel>
        <Stack direction={["column", "row"]} mt="5" justify="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={ingredients_1} alt="honey pearl" />

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
                Honey Pearl
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                Our signature honey pearls are cooked fresh in-store daily. They are free from all preservatives, additives and colouring, delivered fresh from Taiwan.The time-honouring process involves over 90 minutes of cooking, and alternating the temperature from hot to cold to ensure each pearl is perfectly translucent but retains its texture.
                </Text>
              </Box>

            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={ingredients_2} alt="Milk" />

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
                Milk
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                The founder of Milksha is a third-generation dairy farmer from Southern Taiwan. He saw a gap for fresh milk as a base for handmade beverages and started using milk from his farm, whilst solving the problem of over supplying milk in winter and a low purchase price. To honour the spirit of the brand’s origins, we will support local farmers and work closely with Saint David Dairy, based in Victoria.<br /><br />

                At Saint David Dairy, they are taking a fresh approach to farming by combining small scale processing with intricate attention to quality. St David Dairy provide milk to Melbourne with milk sourced amongst the rolling hills of Gippsland, just outside of Melbourne to their factory door. The milk is produced by all three generations of the Atherton Family, with each cow on their dairy farm having over two pastures each to roam.<br /><br />

                Saint David Dairy was awarded a Gold at the 2019 Australian Food Awards.
                </Text>
              </Box>

            </Box>
          </Box>
          </Stack>
          <Stack direction={["column", "row"]} mt="5" justify="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={ingredients_3} alt="Bamboo fiber straw" />

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
                BAMBOO FIBER STRAW
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                100% Biodegradable. Plastic-Free &amp; Natural. Sturdy &amp; Safe.
                Our bamboo fibre straws are able to break down naturally. The chemical-free straws can be safely disposed as general waste after use. Grown and made in Taiwan, the straws are composed from natural bamboo fibre. They are completely free from plastic, bioplastic, and PLA. The straws can withstand temperatures between -20~100°C, and will never get soggy. They have also passed stringent tests including SGS, FDA, LFGB, HALAL FOOD, and Food Contact Material Tests.
                </Text>
              </Box>

            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={ingredients_4} alt="Tea leaf" />

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
                TEA LEAF
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                We source high quality loose leaf tea from various regions around the world. Our tea leaves are brewed and tested regularly for quality control. The water used across all our stores go through a multi-step filtration process. This all goes on behind the scenes, but we believe in providing the best quality we can for our discerning customers.
                </Text>
              </Box>

            </Box>
          </Box>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Text textAlign="left" p={5} maxW="2xl">
            We are passionate bubble tea drinkers and we care about what we
            consume. “Healthy” is not probably a word people normally associate
            with bubble tea, yet we are challenging that notion by doing things
            with the utmost care and providing what we believe is the best
            product. Using top-quality milk and ingredients, we are striving to
            bring you the best bubble tea in Australia. <br />
            <br />
            We believe in caring for our environment and not littering it with
            plastic, therefore we are choosing paper, or renewable resources
            like bamboo, over plastic. The biodegradable bamboo straws in each
            beverage are both sustainable and effective—it will not melt or
            swell or break in your drink like other plastic alternatives. Going
            forwards, we will continue to strive for minimal impact on the
            environment while not compromising on taste or quality.
          </Text>
        </TabPanel>
        <TabPanel>
        <Stack direction={["column", "row"]} mt="5" justify="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={signature_drink_1} alt="EARL GREY TEA LATTE WITH HONEY PEARL" />

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
                EARL GREY TEA LATTE WITH HONEY PEARL
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                Our signature honey pearls are cooked fresh in-store daily. The pearls are soaked in local Victorian honey for natural sweetness. Paired with our Earl Grey tea blend which has an invigorating citrus aroma, finished off with the smoothness of  St. David Dairy premium fresh milk. Enjoy either hot or cold.
                </Text>
              </Box>

            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
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
                FRESH TARO MILK
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                Fresh Taro Milk is one of our top sellers—for a good reason. We use taro from Dajia (大甲), where the best Taro is found in Taiwan. The taro is steamed and hand-mashed in-store, and with each sip you will taste the natural flavour of taro. We are proud to offer this authentic taste of Taiwan to our customers in Australia.
                </Text>
              </Box>

            </Box>
          </Box>
          </Stack>
          <Stack direction={["column", "row"]} mt="5" justify="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={signature_drink_3} alt="JAPANESE MATCHA MILK" />

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
                JAPANESE MATCHA MILK
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                In order to find the highest quality matcha powder, the Milksha headquarters took a trip to Izumo, Japan to find matcha from the century-old Japanese brand Izumo Tousuien (桃翠園). The chosen matcha has a unique and sweet flavour profile which is utterly delicious and used across our Matcha Milk.
                </Text>
              </Box>

            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={signature_drink_4} alt="VALRHONA 100% COCOA MILK" />

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
                VALRHONA 100% COCOA MILK
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                Our indulgent Cocoa Milk calls for the use of premium Valrhona cocoa from France. Every sip is sweet, rich and addictive. Valrhona is a premium chocolate brand established in 1922 by French pastry chef Albéric Guironnet from the Rhône Valley —focusing on high-grade luxury chocolate and specialising in the cocoa production process.
                </Text>
              </Box>

            </Box>
          </Box>
          </Stack>
          <Stack direction={["column", "row"]} mt="5" justify="center">
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={signature_drink_5} alt="ICE BLENDED ORANGE GREEN TEA" />

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
                ICE BLENDED ORANGE GREEN TEA
              </Box>

              <Box>
                <Text color="primary.200" fontSize="sm" textAlign="left">
                We carefully select natural ingredients as a base for all Milksha beverages. Fresh orange juice is pressed, sterilised and snap-frozen to lock in all the goodness and no added sugar. Our Ice Blended Orange Green Tea boasts refreshing citrus notes.
                </Text>
              </Box>

            </Box>
          </Box>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
