import React from "react";
import {
  HStack,
  Image,
  Text,
  Icon,
  Box,
  VStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from "@chakra-ui/react";
// import Image from "next/image";
import { IoIosShuffle, IoIosFastforward } from "react-icons/io";
import {
  IoPlayBack,
  IoPlayCircleOutline,
  IoRepeatSharp,
} from "react-icons/io5";

const Footer = () => {
  return (
    <HStack
      as="footer"
      position="fixed"
      bottom="0"
      h="80px"
      width="100%"
      justify="space-between"
      alignItems={"center"}
      bg="#282828"
      p="20px"
      color="#fff"
    >
      <Box flex="0.3" width="300px">
        <HStack>
          <Image
            src="/img/logo.png"
            objectFit={"contain"}
            width={50}
            height={50}
          />
          <VStack
            whiteSpace="nowrap"
            flex="0.3"
            alignItems={"flex-start"}
            spacing="0 "
          >
            <Text>Tayo </Text>
            <Text fontSize="xs">Tayo akosile</Text>
          </VStack>
        </HStack>
      </Box>

      <HStack
        justify="space-between"
        maxW="300px"
        alignItems="center"
        color="white"
        flex="0.4"
        p="0 100px"
      >
        <Icon w="6" color="brand.500" h="6" as={IoIosShuffle} />
        <Icon w="6" h="6" as={IoPlayBack} />
        <Icon w="10" h="10" as={IoPlayCircleOutline} />
        <Icon w="6" h="6" as={IoIosFastforward} />
        <Icon w="6" h="6" color="brand.500" as={IoRepeatSharp} />
      </HStack>
      <Box flex="0.3">
        <Slider colorScheme="brand" aria-label="slider-ex-1" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
    </HStack>
  );
};

export default Footer;
