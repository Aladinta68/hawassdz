import { HStack, Icon, List, ListItem, Spacer, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { IoMaleFemaleOutline } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { BsPersonRaisedHand } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdFamilyRestroom } from "react-icons/md";

export const TripCardBody = () => {
  const features = [
    { icon: BsPersonRaisedHand },
    { icon: IoMaleFemaleOutline },
    { icon: MdFamilyRestroom },
    { icon: FaBus },
  ];
  return (
    <VStack align={"flex-start"}  w={"100%"}>
      <Text fontWeight={"600"} fontSize={13} w={"100%"}>
        Randonné
      </Text>
      <List fontSize={14}>
        <ListItem>
          <HStack>
            <Icon as={IoCalendarNumber} />
            <Text>Monday, 13 Sep 2024</Text>
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Icon as={MdTimer} />
            <Text>2 days</Text>{" "}
          </HStack>
        </ListItem>
        <ListItem>
          <HStack>
            <Icon as={HiMiniUserGroup} />
            <Text>5-12</Text>{" "}
          </HStack>
        </ListItem>
      </List>
      <HStack py={2} justifyContent={"space-between"} w={"100%"}>
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
      <HStack>
        <Text fontSize={14} fontWeight={600}>
          From 2500 DA
        </Text>
        <Spacer/>
        <HStack color={"green"}>
          <MdEventAvailable />
          <Text fontSize={13}>available - 4 places </Text>
        </HStack>
      </HStack>
    </VStack>
  );
};
