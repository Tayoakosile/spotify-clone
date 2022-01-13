import { HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";

type SideOption = {
  title: string;
  icon?: IconType;
};
const NavBarOption = ({ title, icon }: SideOption) => {
  return (
    <HStack
      h="40px"
      cursor="pointer"
      transition="200ms color ease-in"
      color="gray"
      _hover={{
        color: "white",
      }}
    >
      {icon && <Icon as={icon} />}
      <Text as={icon ? "h4" : "p"} fontSize="sm">
        {title}
      </Text>
    </HStack>
  );
};

export default NavBarOption;
