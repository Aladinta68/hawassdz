import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const BookNow = () => {
  return (
    <Flex  p={5} bg={"#EDEDED"}>
      <VStack spacing={5} w={"100%"}>
        <Heading color={"#181E4B"} fontWeight={600} fontSize={30}>
          Book This Trip
        </Heading>
        <Text fontSize={14} textAlign={"center"}>
          Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
          aut ?
        </Text>
        <Button
          boxShadow={"md"}
          variant={"unstyled"}
          bg={"#DF6951"}
          px={10}
          fontWeight={400}
          _hover={{ opacity: 0.9 }}
          color={"#ffffff"}
        >
          Book Now
        </Button>
      </VStack>
    </Flex>
  );
};
