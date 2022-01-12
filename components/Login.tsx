import React from "react";
import { Box, chakra, VStack } from "@chakra-ui/react";
import Image from "next/image";

const ChakraImage = chakra(Image);

const Login = () => {
  return (
    <VStack bg="black" h="100vh" placeItems={"center"}>
      <Box w="400px" h="400px" position="relative">
        <ChakraImage src="/img/logo.png" layout="fill" objectFit="contain" />
      </Box>
    </VStack>
  );
};

export default Login;
