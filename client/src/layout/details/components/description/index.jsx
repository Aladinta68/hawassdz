import { Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

export const DetailsDescription = ({ data }) => {
  return (
    <VStack align={"flex-start"} w={{ base: "100%", md: "50%" }}>
      <Text fontSize={20}>{data?.description}</Text>
    </VStack>
  );
};
