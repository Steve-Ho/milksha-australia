import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import Store1 from "../components/stores/Store1";


const store1 = () => {
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

      <Store1 />
      

      <Footer />
    </ChakraProvider>
  );
};

export default store1;
