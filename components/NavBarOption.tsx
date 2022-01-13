import { Box, Text } from "@chakra-ui/react";
import React from "react";

type SideOption = {
  title: string;
  icon: string;
};
const NavBarOption = ({ title, icon }: SideOption) => {
  return (
    <Box
      h="40px"
      cursor="pointer"
      transition="200ms color ease-in"
      color="gray"
      _hover={{
        color: "white",
      }}
    >
      <Text fontSize="sm">{title}</Text>
    </Box>
  );
};

export default NavBarOption;
