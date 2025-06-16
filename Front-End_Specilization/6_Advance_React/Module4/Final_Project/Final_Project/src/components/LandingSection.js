import React from "react";
import { Avatar, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    id="landing-section" // optional: for anchor linking
  >
    <VStack spacing={4} align="center">
      <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
      <Text fontSize="3xl" fontWeight="bold">
        {greeting}
      </Text>
      <Text fontSize="xl">{bio1}</Text>
      <Text fontSize="xl">{bio2}</Text>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
