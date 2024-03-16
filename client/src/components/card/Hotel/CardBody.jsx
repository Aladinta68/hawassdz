import { HStack, Icon, List, ListItem, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaCheck } from "react-icons/fa6";
import { FaWifi } from "react-icons/fa6";
import { MdCoffee } from "react-icons/md";
import { LuBedDouble } from "react-icons/lu";
import { FaSwimmer } from "react-icons/fa";

export const HotelCardBody = () => {
  const Items = [
    { icon: LuBedDouble, },
    { icon: MdCoffee, },
    { icon: FaWifi, },
    { icon: FaSwimmer, },
  ];
  return (
    <VStack align={"flex-start"} px={2} w={"100%"}>
      <Text fontWeight={"600"} fontSize={13} w={"100%"}>
        Chambre Double Deluxe
      </Text>
      <List color={'#04741b'} fontSize={12}>
        <ListItem >
          <HStack>
            <Icon as={FaCheck} />
            <Text>Annulation gratuite</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Icon as={FaCheck} />
            <Text>Aucun prépaiement requis</Text>{" "}
          </HStack>
        </ListItem>
      </List>
      <HStack py={2} justifyContent={"space-between"} w={"100%"}>
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
          </HStack>
        ))}
      </HStack>
      <HStack >
        <Text textDecor={'line-through'} color={'red'} fontSize={16} fontWeight={400}>3000 DA</Text>
        <Text fontSize={20} fontWeight={600}>2500 DA</Text>
        <Text fontSize={13}>1 night <Text as={'span'}>,1 Adult</Text></Text>
      </HStack>
    </VStack>
  );
};
