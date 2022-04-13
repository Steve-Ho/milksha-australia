import React from "react";
import { Helmet } from "react-helmet";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../utils/theme";
import Fonts from "../components/Fonts";

import Store1 from "../components/stores/Store1";


<<<<<<< HEAD:src/pages/onlineOrder3.js
const onlineOrder = () => {
=======
const store1 = () => {
>>>>>>> 468f0d20172fae0dcffff52f867104785facb5dd:src/pages/store1.js
  return (
    <ChakraProvider theme={customTheme}>
      <Helmet>
        <html lang="en" />
        <meta charSet="utf-8" />
<<<<<<< HEAD:src/pages/onlineOrder3.js
        <title>Milksha Australia - Online Order - Elizabeth</title>
        <meta name="description" content="Milksha Online Order" />
        <script type="text/javascript" src="https://w.abacus.co/distwc/js/AbacusOnlineOrderingImport.js" async defer></script>
=======
        <title>Milksha Australia - Stores</title>
        <meta name="description" content="Milksha Stores" />
        <script type="text/javascript" src="https://w.abacus.co/distwc/js/AbacusstoresingImport.js" async defer></script>
>>>>>>> 468f0d20172fae0dcffff52f867104785facb5dd:src/pages/store1.js
      </Helmet>
      <Fonts />
      <Header />

      <Store1 />
      

      <Footer />
    </ChakraProvider>
  );
};

<<<<<<< HEAD:src/pages/onlineOrder3.js
export default onlineOrder;
=======
export default store1;
>>>>>>> 468f0d20172fae0dcffff52f867104785facb5dd:src/pages/store1.js
