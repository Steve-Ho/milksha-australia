import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../utils/theme"
import Fonts from '../components/Fonts'

import Franchise_sec1 from '../components/franchise/FranchiseSec1'
import Franchise_sec2 from '../components/franchise/FranchiseSec2'


const Franchise = () => {
    return (
        <ChakraProvider theme={customTheme}>
            <Fonts />
            <Header />

            <Franchise_sec1 />
            <Franchise_sec2 />
            
            <Footer />
        </ChakraProvider>
    )
}

export default Franchise