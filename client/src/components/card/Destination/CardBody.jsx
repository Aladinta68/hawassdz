import { HStack, Icon, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { GiTreasureMap } from "react-icons/gi";
import { IoBed } from "react-icons/io5";
import { MdRestaurantMenu } from "react-icons/md";

export const DestinationCardBody = () => {
  const Items = [
    { icon: IoBed, number: "5", color: "#e37e18" },
    { icon: MdRestaurantMenu, number: "2", color: "#127e24" },
    { icon: GiTreasureMap, number: "10", color: "#8213be" },
  ];
  return (
    <VStack px={2} w={"100%"}>
      <Text w={"100%"}>azer sfqf zaefsferfdjkcd fzezd azefzrazer</Text>
      <HStack justifyContent={"space-between"} w={"100%"}>
        {Items.map((item, index) => (
          <HStack
            px={4}
            py={1}
            spacing={3}
            bg={"#f4f2f2"}
            borderRadius={5}
            key={index}
          >
            <Icon color={item.color} fontSize={20} as={item.icon} />
            <Text>{item.number}</Text>
          </HStack>
        ))}
      </HStack>
    </VStack>
  );
};
