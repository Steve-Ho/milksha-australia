import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import MenuSec1 from "../components/menu/MenuSec1";
import MenuSec2 from "../components/menu/MenuSec2";

const Franchise = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Milksha Australia - Menu</title>
        <meta name="description" content="Milksha Menu" />
      </Helmet>
      <Fonts />
      <Header />

      <MenuSec1 />
      <MenuSec2 />

      <Footer />
    </ChakraProvider>
  );
};

export default Franchise;
