import { Box, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      backgroundColor="white"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.05)" }}
    >
      <Image src={imageSrc} alt={title} objectFit="cover" height="200px" width="100%" />
      <VStack align="start" spacing={4} p={6}>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <Text fontSize="md" color="gray.600">
          {description}
        </Text>
        <Box color="blue.500" fontWeight="bold">
          <FontAwesomeIcon icon={faArrowRight} /> Learn More
        </Box>
      </VStack>
    </Box>
  );
};

export default Card;
