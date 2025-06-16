import * as React from "react";
import { VStack } from "@chakra-ui/react";

/**
 * Full-screen wrapper section using Chakra UI.
 * Supports background toggle and flexible layout via props.
 */
const FullScreenSection = ({ children, isDarkBackground, ...boxProps }) => {
  return (
    <VStack
      w="100%"
      backgroundColor={boxProps.backgroundColor}
      color={isDarkBackground ? "white" : "black"}
      {...boxProps}
    >
      <VStack w="100%" maxWidth="1280px" minHeight="100vh" py={16}>
        {children}
      </VStack>
    </VStack>
  );
};

export default FullScreenSection;
