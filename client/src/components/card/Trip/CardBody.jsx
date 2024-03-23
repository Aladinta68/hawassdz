import {
  Button,
  HStack,
  Icon,
  List,
  ListItem,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { IoMaleFemaleOutline } from "react-icons/io5";
import { MdTimer } from "react-icons/md";
import { IoCalendarNumber } from "react-icons/io5";
import { BsPersonRaisedHand } from "react-icons/bs";
import { FaBus } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdFamilyRestroom } from "react-icons/md";
import { ViewIcon } from "@chakra-ui/icons";

export const TripCardBody = ({renderButton,isHorizontal }) => {
  const features = [
    { icon: BsPersonRaisedHand },
    { icon: IoMaleFemaleOutline },
    { icon: MdFamilyRestroom },
    { icon: FaBus },
  ];
  return (
    <VStack align={"flex-start"} w={"100%"}>
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
      <HStack py={2} justifyContent={!isHorizontal&&"space-between"} w={"100%"}>
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
      <Stack direction={!isHorizontal?"column":"row"} justify={"flex-start"} align={"center"} w={"100%"}>
        <HStack>
          <Text fontSize={14} fontWeight={600}>
            From 2500 DA
          </Text>
          <Spacer />
          <HStack color={"green"}>
            <MdEventAvailable />
            <Text fontSize={13}>available - 4 places </Text>
          </HStack>
        </HStack>
        <Spacer />
        {renderButton() && (
          <Stack pt={{ base: 2, md: 0 }} align={"end"} w={!isHorizontal&&"100%"}>
            <Button
              variant={"unstyled"}
              _hover={{ opacity: 0.8 }}
              color={"#ffffff"}
              bg={"#608aff"}
              w={{ base: "100%", md: "120px" }}
            >
              <HStack w={"100%"} h={"100%"} align={"center"} justify={"center"}>
                <Text fontWeight={{ base: "600", md: "500" }}>View</Text>
                <ViewIcon />
              </HStack>
            </Button>
          </Stack>
        )}
      </Stack>
    </VStack>
  );
};
