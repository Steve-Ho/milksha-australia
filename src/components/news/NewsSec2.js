import React from 'react'
import {
    Box,
    chakra,
    Container,
    Flex,
    Link,
    SimpleGrid,
    useColorModeValue,
  } from '@chakra-ui/react';

  import "./news.css";
  
  const news = [
    {
      name: 'Business Franchise Australia & New Zealand',
      content:
        'Brisbane Goes Wild Over All New Milksha Bubble Tea!',
      link: 'https://www.businessfranchiseaustralia.com.au/latest-news/brisbane-goes-wild-over-all-new-milksha-bubble-tea/',
    },
    {
      name: 'The Food People',
      content:
        "New opening highlights in May 2022",
      link: 'https://thefoodpeople.co.uk/blog/new-opening-highlights-in-may-2022',
    },
    {
      name: 'Where to',
      content:
        "Milksha is finally opening its first store in Brissy!",
      link: 'https://www.wheretoaustralia.com.au/brisbane/2022/04/06/milksha-is-finally-opening-its-first-store-in-brissy/',
    },
    {
      name: 'QSR Media Kevin Santos',
      content:
        'Milksha Austrtalia’s bubble tea market has yet to burst',
      link: 'https://qsrmedia.com.au/franchising/in-focus/milksha-australias-bubble-tea-market-has-yet-burst'
    },
    {
      name: 'Concrete Playground Sarah Ward',
      content:
        'New Brisbane openings that you should add to your must visit list',
      link: 'https://concreteplayground.com/brisbane/pinboard/new-brisbane-openings-that-you-should-add-to-your-must-visit-list'
    },
    {
      name: 'Concrete Playground Sarah Ward',
      content:
        'Milksha Albert St',
      link: 'https://concreteplayground.com/brisbane/restaurants/milksha-albert-st'
    },
    {
      name: 'The Weekend Edition James Frostick',
      content:
        'Milksha',
      link: 'https://theweekendedition.com.au/stumble-guide/milksha-brisbane-city/'
    },
    {
      name: 'The Weekend Edition James Frostick',
      content:
        'Taiwanese bubble tea brand Milksha has opened its first Brisbane location in The City',
      link: 'https://theweekendedition.com.au/food-drink/milksha-brisbane-city/'
    },
    {
      name: 'Queensland.com',
      content:
        'Milksha Brisbane',
      link: 'https://www.queensland.com/us/en/things-to-do/food-and-drink/p-625f5157834584694d201082-milksha-brisbane'
    },
    {
      name: 'Australia’s Guide',
      content:
        'Milksha Brisbane',
      link: 'https://www.australias.guide/qld/food-drink/milksha-brisbane/'
    },
    {
      name: 'Broadsheet Brisbane Daniela Frangos',
      content:
        'Now Open: A Taiwanese Bubble Tea Giant Brings Its Fresh Milk Teas and Signature Honey Pearls to Brisbane',
      link: 'https://www.broadsheet.com.au/brisbane/food-and-drink/article/now-open-taiwanese-bubble-tea-giant-brings-its-fresh-milk-teas-brisbane'
    },
    {
      name: 'Espresso and Matcha Blog',
      content:
        'Milksha – Brisbane CBD',
      link: 'http://espresso-and-matcha.blogspot.com/2022/04/milksha-brisbane-cbd.html'
    },
    {
      name: 'Gourmand and Gourmet Lauren Kavanagh',
      content:
        'What to eat and drink this weekend in Brisbane',
      link: 'https://gourmandandgourmet.com.au/this-weekend-in-brisbane-eat-drink/'
    },
    {
      name: 'Briscity Lifestyle Samantha Mackenzie',
      content:
        'Milksha Brisbane – Opening April 7, 2022',
      link: 'https://briscitylifestyle.com.au/milksha-brisbane-opening-april-7-2022/'
    },
    {
      name: 'Westside Community News',
      content:
        'Taiwanese Bubble Tea Giant Milksha Is Finally Opening Its First Brisbane Store',
      link: 'https://briscitylifestyle.com.au/milksha-brisbane-opening-april-7-2022/'
    },
    {
      name: 'Concrete Playground Brisbane Sarah Ward',
      content:
        'Taiwanese Bubble Tea Giant Milksha Is Finally Opening Its First Brisbane Store',
      link: 'https://concreteplayground.com/brisbane/food-drink/drink/taiwanese-bubble-tea-giant-milksha-is-finally-opening-its-first-brisbane-store'
    },
    {
      name: 'Urban List Brisbane Georgia Condon',
      content:
        'What’s on in Brisbane this week, this month and beyond',
      link: 'https://www.theurbanlist.com/brisbane/a-list/whats-on-brisbane?utm_source=Jeeng'
    },
    {
      name: 'Inside Retail Rakshana Pattabiraman',
      content:
        'Melbourne’s Milksha tea moves interstate',
      link: 'https://insideretail.com.au/sectors/melbournes-milksha-tea-moves-interstate-202203'
    },
    {
      name: 'Inside FMCG Rakshnna Pattabiraman',
      content:
        'Melbourne’s Milksha tea moves interstate',
      link: 'https://insidefmcg.com.au/2022/03/31/melbournes-milksha-tea-moves-interstate/'
    },
    {
      name: 'Urban List Brisbane Georgia Condon',
      content:
        'The Feed | Brisbane Food News You Need To Know',
      link: 'https://www.theurbanlist.com/brisbane/a-list/brisbane-food-news'
    },
    {
      name: 'QSR Media Kevin Santos',
      content:
        'Milksha to open first Brisbane site',
      link: 'https://qsrmedia.com/operations/news/milksha-open-first-brisbane-site'
    },
  ];
  

  

  
  function NewsCard(props) {
    const { name, role, content, index, link } = props;
    return (
      <Link href={link} className="news_link" isExternal>
      <Flex
        maxW={{ base:'320px', md: '640px'}}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        borderWidth={2}
        borderColor={'primary.100'}
        p={{ base: '5', md: '10' }}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        _hover={{
          boxShadow: 'lg',
          transform : 'translate(0, -5px)',
          transition: 'all 0.25s ease-out'
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p
            fontFamily={'Inter'}
            fontWeight={'medium'}
            fontSize={'15px'}
            pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            - {name}
          </chakra.p>
        </Flex>
      </Flex>
      </Link>
    );
  }
  
  export default function NewsSec2() {
    return (
      <Flex
        textAlign={'center'}
        pt={10}
        justifyContent={'center'}
        direction={'column'}
        width={'full'}>
        <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
          <chakra.h1
            py={5}
            fontSize={40}
            fontFamily={'extrabold'}
            fontWeight={'bold'}
            color={useColorModeValue('gray.700', 'gray.50')}>
            Media and Release
          </chakra.h1>
        </Box>
        <SimpleGrid
          columns={{ base: 1, xl: 2 }}
          spacing={'20'}
          mt={10}
          mx={'auto'}>
          {news.map((cardInfo, index) => (
            <NewsCard {...cardInfo} index={index} />
          ))}
        </SimpleGrid>

      </Flex>
    );
  }