import { extendTheme } from "@chakra-ui/react";


const colors = {
  primary: {
    100: "#61840d",
    200: "#707070",
    300: "#10DE82",
    400: "#0EBE6F",
    500: "#0CA25F",
    600: "#0A864F",
    700: "#086F42",
    800: "#075C37",
    900: "#064C2E"
  }
};




const customTheme = extendTheme({ 
  colors,
  fonts: {
    thin: "houschka-rounded-thin",
    light: "houschka-rounded-light",
    medium: "houschka-rounded-medium",
    demibold: "houschka-rounded-demibold",
    bold: "houschka-rounded-bold",
    extrabold: "houschka-rounded-extrabold"
  },

});

export default customTheme;