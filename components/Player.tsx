import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Player = ({ spotify }: { spotify: object }) => {
  return (
    <Box>
      <HStack as="section" spacing="0">
        <NavBar />
        <Body />
      </HStack>

      <Footer />
    </Box>
  );
};

export default Player;
