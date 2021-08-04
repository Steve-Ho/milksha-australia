import * as React from "react"

import Home from './home'

import { ChakraProvider } from "@chakra-ui/react"
import customTheme from "../utils/theme"
import Fonts from '../components/Fonts'


const IndexPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Fonts />
      <Home />
    </ChakraProvider>
  )
}

export default IndexPage