import { ChakraProvider } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { theme } from "../theme";
import { DataLayer } from "./DataLayer";
import reducer, { initialState } from "./reducer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </DataLayer>
  );
};

export default Layout;
