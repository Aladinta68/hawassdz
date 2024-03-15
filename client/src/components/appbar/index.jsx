import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
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
  const [isLogin, setisLogin] = useState(false);

  return (
    <Flex
      position={{ base: "absolute", md: "absolute" }}
      top="0"
      left="0"
      right="0"
      zIndex="99"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <DesktopAppbar isLogin={isLogin} links={links} />
      <MobileAppbar isLogin={isLogin} links={links} />
    </Flex>
  );
};
