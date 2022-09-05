import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import NewsSec1 from "../components/news/NewsSec1";
import NewsSec2 from "../components/news/NewsSec2";

const News = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>Milksha Australia - News</title>
        <meta name="description" content="Milksha News" />
      </Helmet>
      <Fonts />
      <Header />

      <NewsSec1 />
      <NewsSec2 />

      <Footer />
    </ChakraProvider>
  );
};

export default News;
