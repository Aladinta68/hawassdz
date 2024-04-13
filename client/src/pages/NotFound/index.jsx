import { Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";
export const NotFound = () => {
  const bgColor = useColorModeValue("white", "gray.900");

  return (
    <Flex
    height="100vh"
    alignItems="center"
    justifyContent="center"
    bg={bgColor}
  >
    <Flex direction="column" alignItems="center" textAlign="center">
      <Heading fontSize="6xl" color="red.500">404</Heading>
      <Text fontSize="xl" fontWeight="bold" mb={4}>Page Not Found</Text>
      <Text fontSize="lg" color="gray.600">Oops! The page you are looking for does not exist.</Text>
    </Flex>
  </Flex>  )
}
