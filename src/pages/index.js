import * as React from "react"

import Home from './home'

import Header from '../components/Header'
import Footer from '../components/Footer'

import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../utils/theme"
import Fonts from '../components/Fonts'


const IndexPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  )
}

export default IndexPage