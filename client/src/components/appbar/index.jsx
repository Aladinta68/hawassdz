import { Flex } from "@chakra-ui/react";
import React from "react";
import { DesktopAppbar } from "./desktop";
import { MobileAppbar } from "./mobile";

export const Appbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: "Hotels", url: "/hotels" },
    { name: "Restaurants", url: "/restaurants" },
    { name: "Trips", url: "/trips" },
  ];
  return (
    <Flex
      bg={"#3333337b"}
      position={{ base: "absolute", md: "absolute" }}
      top="0"
      left="0"
      right="0"
      zIndex="99"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <DesktopAppbar links={links} />
      <MobileAppbar links={links} />
    </Flex>
  );
};
