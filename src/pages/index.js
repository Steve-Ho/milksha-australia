import * as React from "react";
import { Helmet } from "react-helmet";

import Home from "./home";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

const IndexPage = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Milksha Australia" />
        <title>Milksha Australia</title>
        <link rel="canonical" href="https://www.milksha.com.au/" />
        <script src="https://w.abacus.co/distwc/js/AbacusOnlineOrderingImport.js"></script>
      </Helmet>
      <Fonts />
      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  );
};

export default IndexPage;
