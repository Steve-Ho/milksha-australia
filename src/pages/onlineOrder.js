import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import OnlineOrderSec1 from "../components/onlineOrder/OnlineOrderSec1";


const onlineOrder = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Milksha Australia - Online Order - Elizabeth</title>
        <meta name="description" content="Milksha Online Order" />
        <script type="text/javascript" src="https://w.abacus.co/distwc/js/AbacusOnlineOrderingImport.js" async defer></script>
      </Helmet>
      <Fonts />
      <Header />

      <OnlineOrderSec1 />
      

      <Footer />
    </ChakraProvider>
  );
};

export default onlineOrder;
