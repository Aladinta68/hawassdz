import { Progress, VStack, Heading, HStack, Text, Divider, Spacer } from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa";

export const Rating = () => {
  return (
    <VStack my={20} w={"100%"} align={"flex-start"}>
      <Heading>Notice</Heading>
      <HStack w={"100%"} my={10}>
        <Text fontSize={30} fontWeight={600}>
          3.0
        </Text>
        <FaStar color="#FFBA0A" size={20} />
        <VStack w={"100%"}>
          <Progress cursor={'pointer'} borderRadius={20} size="sm" value={0} w={"80%"} />
          <Progress cursor={'pointer'}  borderRadius={20} size="sm" value={50} w={"80%"} />
          <Progress cursor={'pointer'}  borderRadius={20} size="sm" value={20} w={"80%"} />
          <Progress cursor={'pointer'}  borderRadius={20} size="sm" value={80} w={"80%"} />
          <Progress cursor={'pointer'}  borderRadius={20} size="sm" value={50} w={"80%"} />
        </VStack>
      </HStack>
    </VStack>
  );
};
