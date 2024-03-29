import React from "react";
import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";


import Logo from "./logo";

const NavBar = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <NavBarContainer {...props}>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
      <Link href="/">
      <Logo
        w="100px"
        display = {{ base: "none", md: "block" }}
      />
      </Link>
    </NavBarContainer>
  );
};

const CloseIcon = () => (
  <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    width="24px"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
  >
    <title>Menu</title>
    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
  </svg>
);

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle} justify="flex-end">
      {isOpen ? <CloseIcon /> : <MenuIcon />}
    </Box>
  );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest} color={["white", "white", "primary.100", "primary.100"]}>
        {children}
      </Text>
    </Link>
  );
};

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/menu">Menu</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/franchise">Franchise</MenuItem>
        <MenuItem to="/contact">Contact</MenuItem>
        <MenuItem to="/news">News</MenuItem>
        <MenuItem to="https://w.abacus.co/signup/2570654" isLast isExternal>
          <Button
            size="sm"
            rounded="full"
            py={5}
            color={["primary.100", "primary.100", "white", "white"]}
            bg={["white", "white", "primary.100", "primary.100"]}
            _hover={{
              color: ["white", "white", "primary.100", "primary.100"],
              bg: ["primary.100", "primary.100", "white", "white"],
            }}
            border="1px solid"
            borderColor={"primary.100"}
            fontFamily={'extrabold'}
          >
            Membership Signup
          </Button>
        </MenuItem>   
        
      </Stack>
    </Box>
  );
};

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify={{ base: "flex-end", md: "space-between" }}
      wrap="wrap"
      w="100%"
      p={8}
      bg={["primary.100", "primary.100", "transparent", "transparent"]}
      color={["white", "white", "primary.100", "primary.100"]}
      fontFamily={'medium'}
      {...props}
    >
      {children}
    </Flex>
  );
};

export default NavBar;
