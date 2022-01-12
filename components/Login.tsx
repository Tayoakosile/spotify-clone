import { Box, Button, chakra, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { loginUrl } from "../spotify";

const ChakraImage = chakra(Image);

const Login = () => {
  return (
    <VStack spacing="-4" bg="#191414" h="100vh">
      <Box w="500px" h="500px" position="relative">
        <ChakraImage
          alt="Spotify logo"
          src="/img/logo.png"
          layout="fill"
          objectFit="contain"
          width="100%"
        />
      </Box>
      <Button
        as="a"
        href={loginUrl}
        fontWeight="bold"
        bg="#1db954"
        size="lg"
        fontSize={"md"}
        rounded="full"
        color="white"
        textTransform="uppercase"
        px="10"
        h="14"
      >
        Login with Spotify
      </Button>
    </VStack>
  );
};

export default Login;
