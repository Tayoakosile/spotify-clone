import React from "react";
import {
  Box,
  Image as ChakraImg,
  chakra,
  VStack,
  Divider,
  Heading,
  Text,
  HStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
import NavBarOption from "./NavBarOption";
import { useDataLayerValue } from "./DataLayer";

const NavBar = () => {
  const ChakraImage = chakra(Image);
  const [{ playlist }, dispatch] = useDataLayerValue();
  console.log("playlist", playlist);
  return (
    <Box
      as="nav"
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
      <NavBarOption title="Home" icon={AiFillHome} />
      <NavBarOption title="Search" icon={AiOutlineSearch} />
      <NavBarOption title="Your Library" icon={MdLibraryMusic} />
      <Box mt="30px">
        <Text fontSize="xs" fontWeight="bold">
          PLAYLIST
        </Text>
        <Divider my="10px" />
        <VStack spacing="10px" as="span" alignItems="flex-start" mt="10px">
          {playlist?.items?.map((playlist) => (
            <React.Fragment key={playlist.id}>
              <HStack as="span">
                <ChakraImg
                  src={playlist.images[0].url}
                  w="30px"
                  h="30px"
                  rounded="lg"
                />
                <NavBarOption title={playlist.name} />
              </HStack>
            </React.Fragment>
          ))}
        </VStack>
      </Box>
    </Box>
  );
};

export default NavBar;
