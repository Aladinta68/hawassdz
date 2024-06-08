import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { LuChefHat } from "react-icons/lu";

export const DetailsDescription = ({ type, data }) => {
  return (
    <VStack align={"flex-start"} w={{ base: "100%", md: "50%" }}>
      {type === "restaurant" && (
        <VStack spacing={5}>
          <Text ml={2} fontSize={20} fontWeight={500}>
            نوع المطبخ
          </Text>
          <HStack>
            <Icon as={LuChefHat} />
            <Text fontSize={18}>{data?.type}</Text>
          </HStack>
        </VStack>
      )}
      <Text fontSize={20}>{data?.description}</Text>
    </VStack>
  );
};
