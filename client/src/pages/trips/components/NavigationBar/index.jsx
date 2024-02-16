import { Button, Flex, Icon, Link, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import { FiCalendar } from "react-icons/fi";
import { BsInfoCircle } from "react-icons/bs";
import { ImImages } from "react-icons/im";
import { HiOutlineLocationMarker } from "react-icons/hi";

export const NavigationBar = ({ Triplinkstate, HandleTripLink }) => {
  const MyTripsLink = [
    {
      name: "Information",
      path: "tripinformation",
      icon: BsInfoCircle,
    },
    { name: "Tour Plan", path: "tripplan", icon: FiCalendar },
    { name: "Location", path: "triplocation", icon: HiOutlineLocationMarker },
    { name: "Gallery", path: "tripgallery", icon: ImImages },
  ];
  return (
    <Flex
      w={{ md: "4xl", base: "100%" }}
      h={"80px"}
      position="absolute"
      top="72vh"
      zIndex="2"
      bg={"#F8F8F8"}
    >
      {MyTripsLink.map((Triplink, index) => (
        <Button
          h={"100%"}
          variant={"unstyled"}
          w={"25%"}
          color={Triplinkstate === Triplink.path ? "#FA8B02" : "#000000"}
          _hover={{ color: "#FA8B02" }}
          transition={"ease-in-out 0.3s"}
          key={index}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={() => HandleTripLink(Triplink.path)}
        >
          <Icon as={Triplink.icon} />
          <Text px={{ md: 2, base: 0.5 }}> {Triplink.name}</Text>
        </Button>
      ))}
    </Flex>
  );
};
