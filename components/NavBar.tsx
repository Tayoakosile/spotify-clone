import React from "react";
import { Box, chakra } from "@chakra-ui/react";
import Image from "next/image";

const ChakraImage = chakra(Image);
const NavBar = () => {
  return (
    <Box
      as="header"
      color="white"
      minWidth="200px"
      h="100vh"
      px="10px"
      bg="#020202"
      flex="0.2"
    >
      <Box position="relative" w="120px" px="10px" h="120px">
        <ChakraImage
          src="/img/logo.png"
          width="100%"
          objectFit="contain"
          layout="fill"
        />
      </Box>
    </Box>
  );
};

export default NavBar;
