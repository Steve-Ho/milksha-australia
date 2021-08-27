import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../utils/theme"
import Fonts from '../components/Fonts'

import About_sec1 from '../components/about/AboutSec1'
import About_sec2 from '../components/about/AboutSec2'

const About = () => {
    return (
        <ChakraProvider theme={customTheme}>
            <Fonts />
            <Header />

            <About_sec1 />
            <About_sec2 />

            <Footer />
        </ChakraProvider>
    )
}

export default About