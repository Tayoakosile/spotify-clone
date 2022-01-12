import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      brand: {
        100: "#d2f7df",
        200: "#a5efbf",
        300: "#78e7a0",
        400: "#4bdf80",
        500: "#1ed760",
        600: "#18ac4d",
        700: "#12813a",
        800: "#0c5626",
        900: "#062b13",
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "brand", components: ["Button"] })
);
