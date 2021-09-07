import React from "react";
import {
  Image,
} from "@chakra-ui/react";



import menu from '../../images/menu/top10menu.png'



export default function MenuSec2() {
  return (
    <Image 
      src={menu}
      alt="top 10 menu"
      textAlign="center"
      margin={'5% auto'}
    ></Image>
  );
}
