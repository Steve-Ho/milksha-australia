import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../utils/theme"
import Fonts from '../components/Fonts'

import MenuSec1 from '../components/menu/MenuSec1'
import MenuSec2 from '../components/menu/MenuSec2'


const Franchise = () => {
    return (
        <ChakraProvider theme={customTheme}>
            <Fonts />
            <Header />

            <MenuSec1 />
            <MenuSec2 />
            
            <Footer />
        </ChakraProvider>
    )
}

export default Franchise