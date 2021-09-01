import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import Contact_sec1 from "../components/contact/ContactSec1";
import Contact_sec2 from "../components/contact/ContactSec2";

const Contact = () => {
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Milksha Australia - Contact</title>
        <meta name="description" content="Milksha Contact" />
      </Helmet>
      <Fonts />
      <Header />

      <Contact_sec1 />
      <Contact_sec2 />

      <Footer />
    </ChakraProvider>
  );
};

export default Contact;
