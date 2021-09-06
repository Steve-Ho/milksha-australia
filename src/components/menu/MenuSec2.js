import React from "react";
import {
  Tab,
  TabList,
  Tabs,
  TabPanel,
  TabPanels,
  Stack,
  Image,
} from "@chakra-ui/react";



import premiumFreshMilk_1 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_1.png'
import premiumFreshMilk_2 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_2.png'
import premiumFreshMilk_3 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_3.png'
import premiumFreshMilk_4 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_4.png'
import premiumFreshMilk_5 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_5.png'
import premiumFreshMilk_6 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_6.png'
import premiumFreshMilk_7 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_7.png'
import premiumFreshMilk_8 from '../../images/menu/premiumFreshMilk/premiumFreshMilk_8.png'

import teaLatte_1 from '../../images/menu/teaLatte/teaLatte_1.png'
import teaLatte_2 from '../../images/menu/teaLatte/teaLatte_2.png'
import teaLatte_3 from '../../images/menu/teaLatte/teaLatte_3.png'
import teaLatte_4 from '../../images/menu/teaLatte/teaLatte_4.png'

import specialty_1 from '../../images/menu/specialty/specialty_1.png'
import specialty_2 from '../../images/menu/specialty/specialty_2.png'
import specialty_3 from '../../images/menu/specialty/specialty_3.png'
import specialty_4 from '../../images/menu/specialty/specialty_4.png'
import specialty_5 from '../../images/menu/specialty/specialty_5.png'

import seasonal_1 from '../../images/menu/seasonal/seasonal_1.png'
import seasonal_2 from '../../images/menu/seasonal/seasonal_2.png'
import seasonal_3 from '../../images/menu/seasonal/seasonal_3.png'
import seasonal_4 from '../../images/menu/seasonal/seasonal_4.png'

import staliColdBrewCoffee_1 from '../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_1.png'
import staliColdBrewCoffee_2 from '../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_2.png'
import staliColdBrewCoffee_3 from '../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_3.png'
import staliColdBrewCoffee_4 from '../../images/menu/staliColdBrewCoffee/staliColdBrewCoffee_4.png'

import yoghurt_1 from '../../images/menu/yoghurt/yoghurt_1.png'
import yoghurt_2 from '../../images/menu/yoghurt/yoghurt_2.png'
import yoghurt_3 from '../../images/menu/yoghurt/yoghurt_3.png'


export default function MenuSec2() {
  return (
    <Tabs variant="soft-rounded" mt={10} align="center" size="sm" isFitted>
      <TabList>
        <Stack direction={["column", "row"]}>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
          PREMIUM FRESH MILK
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
          TEA LATTE
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
          SPECIALTY
          </Tab>
        </Stack>
        <Stack direction={["column", "row"]}>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
          SEASONAL
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
          ST. ALI COLD BREW COFFEE
          </Tab>
          <Tab _selected={{ color: "white", bg: "primary.100" }}>
          YOGHURT
          </Tab>
        </Stack>
      </TabList>
      <TabPanels>
        <TabPanel>
        <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_1} 
        />
                  <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_2} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_3} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_4} 
        />
         </Stack>
         <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_5} 
        />
                  <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_6} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_7} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={premiumFreshMilk_8} 
        />
         </Stack>
        </TabPanel>
        <TabPanel>
        <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={teaLatte_1} 
        />
                  <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={teaLatte_2} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={teaLatte_3} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={teaLatte_4} 
        />
         </Stack>
        </TabPanel>
        <TabPanel>
        <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={specialty_1} 
        />
                  <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={specialty_2} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={specialty_3} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={specialty_4} 
        />
         </Stack>
         <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={specialty_5} 
        />
         </Stack>
        </TabPanel>
        <TabPanel>
        <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={seasonal_1} 
        />
                  <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={seasonal_2} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={seasonal_3} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={seasonal_4} 
        />
         </Stack>
        </TabPanel>
        <TabPanel>
        <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={staliColdBrewCoffee_1} 
        />
                  <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={staliColdBrewCoffee_2} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={staliColdBrewCoffee_3} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={staliColdBrewCoffee_4} 
        />
         </Stack>
        </TabPanel>
        <TabPanel>
        <Stack direction={["column", "row"]} justify="center" align="center" mt="5" spacing={10}>
         <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={yoghurt_1} 
        />
                  <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={yoghurt_2} 
        />
                 <Image 
            boxSize="250px" 
            objectFit="contain" 
            src={yoghurt_3} 
        />
         </Stack>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
