import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
  Button,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box
      borderRadius="2xl"
      overflow="hidden"
      bg="white"
      boxShadow="md"
      _hover={{ boxShadow: "xl", transform: "translateY(-4px)" }}
      transition="all 0.2s"
      maxW="sm"
    >
      <Image src={imageSrc} alt={title} objectFit="cover" w="100%" h="200px" />
      <VStack align="start" spacing={3} p={5}>
        <Heading size="md">{title}</Heading>
        <Text fontSize="sm" color="gray.600">
          {description}
        </Text>
        <HStack>
          <Button
            size="sm"
            rightIcon={<FontAwesomeIcon icon={faArrowRight} />}
            colorScheme="blue"
            variant="link"
          >
            Learn More
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Card;
