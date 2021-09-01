import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import Franchise_sec1 from "../components/franchise/FranchiseSec1";
import Franchise_sec2 from "../components/franchise/FranchiseSec2";

const Franchise = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Milksha Australia - Franchise</title>
        <meta name="description" content="Milksha Franchise" />
      </Helmet>
      <Fonts />
      <Header />

      <Franchise_sec1 />
      <Franchise_sec2 />

      <Footer />
    </ChakraProvider>
  );
};

export default Franchise;
