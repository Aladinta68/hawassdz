import { HStack, Icon, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { GrRestaurant } from "react-icons/gr";
import { MdDeliveryDining } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { RiParkingBoxLine } from "react-icons/ri";
import { FaCheck } from 'react-icons/fa6';

export const RestaurantCardBody = () => {
  const features = [
    { icon: MdDeliveryDining },
  ];
  return (
    <VStack align={"flex-start"}w={"100%"}>
      <Text fontWeight={"600"} fontSize={13} w={"100%"}>
        Chambre Double Deluxe
      </Text>
      <List fontSize={13}>
        <ListItem>
          <HStack>
            <Icon as={GrRestaurant} />
            <Text>French, European</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Icon as={IoTimeOutline} />
            <Text>7j  12:00 PM - 9:30 PM</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Icon as={FaCheck} />
            <Text>Parking</Text>
          </HStack>
        </ListItem>
      </List>
      <HStack py={2}  w={"100%"}>
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
          </HStack>
        ))}
      </HStack>
      <Text fontSize={14} fontWeight={400}>
        PRICE RANGE 1500DA - 20000DA
      </Text>
    </VStack>
  );
};
