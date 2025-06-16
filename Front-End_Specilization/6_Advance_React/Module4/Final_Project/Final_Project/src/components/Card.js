import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
   return (
    <HStack
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      spacing={6}
      padding={4}
      align="center"
      width="100%"
    >
      <Image
        boxSize="100px"
        src={imageSrc}
        alt={title}
        objectFit="cover"
        borderRadius="md"
      />

      <VStack align="start" spacing={2} flex="1">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>

      <FontAwesomeIcon icon={faArrowRight} size="1x" />
    </HStack>
  );
};

export default Card;
