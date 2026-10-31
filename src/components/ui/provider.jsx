"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { appSystem } from "../../theme";

export function Provider(props) {
  return (
    <ChakraProvider value={appSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
