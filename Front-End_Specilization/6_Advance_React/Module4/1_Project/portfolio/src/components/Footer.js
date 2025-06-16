import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <Box backgroundColor="#18181b" as="footer">
      <Flex
        margin="0 auto"
        px={{ base: 6, md: 12 }}
        color="white"
        justifyContent="center"
        alignItems="center"
        maxWidth="1024px"
        height={16}
      >
        <Text fontSize="sm">Pete • © {year}</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
