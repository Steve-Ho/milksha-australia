import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import Store3 from "../components/stores/Store3";


const store3 = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Milksha Australia - Stores</title>
        <meta name="description" content="Milksha Stores" />
        <script type="text/javascript" src="https://w.abacus.co/distwc/js/AbacusstoresingImport.js" async defer></script>
      </Helmet>
      <Fonts />
      <Header />

      <Store3 />
      

      <Footer />
    </ChakraProvider>
  );
};

export default store3;
