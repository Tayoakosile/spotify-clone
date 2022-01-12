import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { theme } from "../theme";

const Layout = ({ children }: { children: ReactNode }) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default Layout;
