import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaPersonHiking } from "react-icons/fa6";
import { MdHotel } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

export const DestinationCardBody = () => {
  const features = [
    { icon: MdHotel, number: "5", color: "#e37e18" },
    { icon: MdRestaurantMenu, number: "2", color: "#127e24" },
    { icon: FaPersonHiking, number: "10", color: "#8213be" },
  ];
  return (
    <VStack w={"100%"}>
      <Text w={"100%"}>azer sfqf zaefsferfdjkcd fzezd azefzrazer</Text>
      <HStack justifyContent={"space-between"} w={"100%"}>
        {features.map((feature, index) => (
          <HStack
            px={4}
            py={1}
            spacing={3}
            bg={"#f4f2f2"}
            borderRadius={5}
            key={index}
          >
            <Icon color={feature.color} fontSize={20} as={feature.icon} />
            <Text>{feature.number}</Text>
          </HStack>
        ))}
      </HStack>
    </VStack>
  );
};
