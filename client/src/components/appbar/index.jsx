import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { DesktopAppbar } from "./desktop";
import { MobileAppbar } from "./mobile";

export const Appbar = ({ type }) => {
  const links = [
    { name: "Home", url: "/" },
    { name: "Destinations", url: "/destinations" },
    { name: "Hotels", url: "/hotels" },
    { name: "Restaurants", url: "/restaurants" },
    { name: "Trips", url: "/trips" },
  ];
  const [isLogin, setisLogin] = useState(false);

  const Setbackground = () => {
    if (
      type === "/trips" ||
      type === "/destinations" ||
      type === "/hotels" ||
      type === "/restaurants"
    ) {
      return "#333333";
    }
    return "transparent";
  };
  return (
    <Flex
      bg={Setbackground}
      position={{ base: "absolute", md: "absolute" }}
      top="0"
      left="0"
      right="0"
      zIndex="99"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <DesktopAppbar isLogin={false} links={links} />
      <MobileAppbar isLogin={isLogin} links={links} />
    </Flex>
  );
};
