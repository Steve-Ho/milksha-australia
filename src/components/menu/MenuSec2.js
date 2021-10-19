import React from "react";
import {
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Stack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

import premiumFreshMilk_1 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_1.jpg";
import premiumFreshMilk_2 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_2.jpg";
import premiumFreshMilk_3 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_3.jpg";
import premiumFreshMilk_4 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_4.jpg";
import premiumFreshMilk_5 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_5.jpg";
import premiumFreshMilk_6 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_6.jpg";
import premiumFreshMilk_7 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_7.jpg";
import premiumFreshMilk_8 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_8.jpg";
import premiumFreshMilk_9 from "../../images/menu/premiumFreshMilk/premiumFreshMilk_9.jpg";

import teaLatte_1 from "../../images/menu/teaLatte/teaLatte_1.jpg";
import teaLatte_2 from "../../images/menu/teaLatte/teaLatte_2.jpg";
import teaLatte_3 from "../../images/menu/teaLatte/teaLatte_3.jpg";
import teaLatte_4 from "../../images/menu/teaLatte/teaLatte_4.jpg";
import teaLatte_5 from "../../images/menu/teaLatte/teaLatte_5.jpg";
import teaLatte_6 from "../../images/menu/teaLatte/teaLatte_6.jpg";

import specialty_1 from "../../images/menu/specialty/specialty_1.jpg";
import specialty_2 from "../../images/menu/specialty/specialty_2.jpg";
import specialty_3 from "../../images/menu/specialty/specialty_3.jpg";
import specialty_4 from "../../images/menu/specialty/specialty_4.jpg";
import specialty_5 from "../../images/menu/specialty/specialty_5.jpg";

import cloudyCreamSeries_1 from "../../images/menu/cloudyCreamSeries/cloudyCreamSeries_1.jpg";
import cloudyCreamSeries_2 from "../../images/menu/cloudyCreamSeries/cloudyCreamSeries_2.jpg";

import staliColdBrewCoffee_1 from "../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_1.jpg";
import staliColdBrewCoffee_2 from "../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_2.jpg";
import staliColdBrewCoffee_3 from "../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_3.jpg";
import staliColdBrewCoffee_4 from "../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_4.jpg";
import staliColdBrewCoffee_5 from "../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_5.jpg";

import premiumTea_1 from "../../images/menu/premiumTea/premiumTea_1.jpg";
import premiumTea_2 from "../../images/menu/premiumTea/premiumTea_2.jpg";
import premiumTea_3 from "../../images/menu/premiumTea/premiumTea_3.jpg";

export default function MenuSec2() {
  return (
    <Tabs variant="soft-rounded" mt={10} align="center" size="sm" isFitted>
      <TabList>
        <Stack direction={["column", "row"]}>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            PREMIUM FRESH MILK
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>TEA LATTE</Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>SPECIALTY</Tab>
        </Stack>
        <Stack direction={["column", "row"]}>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            CLOUDY CREAM SERIES
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            ST. ALI COLD BREW COFFEE
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
            PREMIUM TEA
          </Tab>
        </Stack>
      </TabList>
      <TabPanels>
        <TabPanel>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_1}
              />
              <Text fontFamily="bold" color="primary.100">
                Brown Sugar Milk
              </Text>
            </VStack>
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_2}
              />
              <Text fontFamily="bold" color="primary.100">
                Genmaicha Milk
              </Text>
            </VStack>
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_3}
              />
              <Text fontFamily="bold" color="primary.100">
                Herbal Jelly Milk
              </Text>
            </VStack>
          </Stack>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_4}
              />
              <Text fontFamily="bold" color="primary.100">
                Honey Pearl Milk
              </Text>
            </VStack>
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_5}
              />
              <Text fontFamily="bold" color="primary.100">
                Matcha Milk
              </Text>
            </VStack>
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_6}
              />
              <Text fontFamily="bold" color="primary.100">
                Pudding Soy Milk
              </Text>
            </VStack>
          </Stack>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_7}
              />
              <Text fontFamily="bold" color="primary.100">
                Taro Milk
              </Text>
            </VStack>
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_8}
              />
              <Text fontFamily="bold" color="primary.100">
                Valrhona Cocoa Milk
              </Text>
            </VStack>
            <VStack>
              <Image
                boxSize="250px"
                objectFit="contain"
                src={premiumFreshMilk_9}
              />
              <Text fontFamily="bold" color="primary.100">
                Wintermelon Milk
              </Text>
            </VStack>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={teaLatte_1} />
            <Text fontFamily="bold" color="primary.100">Barley Latte</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={teaLatte_2} />
            <Text fontFamily="bold" color="primary.100">Earl Grey Latte</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={teaLatte_3} />
            <Text fontFamily="bold" color="primary.100">Jasmine Green Latte</Text>
            </VStack>
            </Stack>
            <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={teaLatte_4} />
            <Text fontFamily="bold" color="primary.100">Light-Roasted Oolong Latte</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={teaLatte_5} />
            <Text fontFamily="bold" color="primary.100">Mango Earl Grey Latte</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={teaLatte_6} />
            <Text fontFamily="bold" color="primary.100">Oolong Latte</Text>
            </VStack>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={specialty_1} />
            <Text fontFamily="bold" color="primary.100">Ice Blended Lemon Green Tea</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={specialty_2} />
            <Text fontFamily="bold" color="primary.100">Ice Blended Orange Green Tea</Text>
            </VStack>
          </Stack>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={specialty_3} />
            <Text fontFamily="bold" color="primary.100">Mango Green Tea</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={specialty_4} />
            <Text fontFamily="bold" color="primary.100">Orange Green Tea</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={specialty_5} />
            <Text fontFamily="bold" color="primary.100">Wintermelon Lemon Juice</Text>
            </VStack>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image
              boxSize="250px"
              objectFit="contain"
              src={cloudyCreamSeries_1}
            />
            <Text fontFamily="bold" color="primary.100">Cloud Cream Jasmine Green Tea</Text>
            </VStack>
            <VStack>
            <Image
              boxSize="250px"
              objectFit="contain"
              src={cloudyCreamSeries_2}
            />
            <Text fontFamily="bold" color="primary.100">Cloudy Cream Earl Grey Tea</Text>
            </VStack>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image
              boxSize="250px"
              objectFit="contain"
              src={staliColdBrewCoffee_1}
            />
            <Text fontFamily="bold" color="primary.100">Brown Sugar Coffee Latte</Text>
            </VStack>
            <VStack>
            <Image
              boxSize="250px"
              objectFit="contain"
              src={staliColdBrewCoffee_2}
            />
            <Text fontFamily="bold" color="primary.100">Cloudy Cream Coconut Coffee</Text>
            </VStack>
            </Stack>
            <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image
              boxSize="250px"
              objectFit="contain"
              src={staliColdBrewCoffee_3}
            />
            <Text fontFamily="bold" color="primary.100">Cloudy Cream Dirty Matcha</Text>
            </VStack>
            <VStack>
            <Image
              boxSize="250px"
              objectFit="contain"
              src={staliColdBrewCoffee_4}
            />
            <Text fontFamily="bold" color="primary.100">Cold Brew Coffee with Jasmine Tea</Text>
            </VStack>
            <VStack>
            <Image
              boxSize="250px"
              objectFit="contain"
              src={staliColdBrewCoffee_5}
            />
            <Text fontFamily="bold" color="primary.100">Cold Brew Latte</Text>
            </VStack>
          </Stack>
        </TabPanel>
        <TabPanel>
          <Stack
            direction={["column", "row"]}
            justify="center"
            align="center"
            mt="5"
            spacing={10}
          >
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={premiumTea_1} />
            <Text fontFamily="bold" color="primary.100">Barley Tea</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={premiumTea_2} />
            <Text fontFamily="bold" color="primary.100">Earl Grey Tea</Text>
            </VStack>
            <VStack>
            <Image boxSize="250px" objectFit="contain" src={premiumTea_3} />
            <Text fontFamily="bold" color="primary.100">Jasmine Tea</Text>
            </VStack>
          </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
